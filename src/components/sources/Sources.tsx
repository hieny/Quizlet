import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { createContext, useContext, useEffect, useState } from "react";
import { SourcesType } from "../../pages/model";
import Column from "./Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { QuizletFormContext } from "../../pages/QuizletForm";
import useImportCourse from "./hooks/useImportCourse";

type SourceContext = {
  source: SourcesType[];
  upDateSources: (
    id: number,
    type: "term" | "def",
    value: string | string[]
  ) => void;
  handleDeleteTerm: (id: number) => void;
};

export const SourceContext = createContext<SourceContext | undefined>(
  undefined
);

export default function Sources() {
  const context = useContext(QuizletFormContext);
  const initialSource = (): SourcesType[] => {
    const source = [1, 2].map((item) => {
      return {
        id: item,
        term: "",
        definition: "",
      };
    });
    return source;
  };

  const [source, setSource] = useState<SourcesType[]>(initialSource);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getTermPos = (id: number) => source.findIndex((term) => term.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over) {
      if (active.id === over.id) return;

      setSource((term) => {
        const originalPos = getTermPos(Number(active.id));
        const newPos = getTermPos(Number(over.id));

        return arrayMove(term, originalPos, newPos);
      });
    }
  };

  const upDateSources = (
    id: number,
    type: "term" | "def",
    value: string | string[]
  ) => {
    const index = getTermPos(id);
    if (index !== -1) {
      const newSource = [...source];
      if (type === "term") {
        newSource[index].term = value as string;
      }
      if (type === "def") {
        newSource[index].definition = value;
      }
      setSource(newSource);
    }
  };

  const handleDeleteTerm = (id: number) => {
    const index = getTermPos(id);
    if (index !== -1) {
      const newSource = [...source];
      newSource.splice(index, 1);
      setSource(newSource);
    }
  };

  const handleAddTerm = () => {
    const newSource = [...source];
    newSource.push({
      id: source.length + 1,
      term: "",
      definition: "",
    });
    setSource(newSource);
  };

  useEffect(() => {
    context?.handleSetSource(source);
  }, [source]);

  const importCouse = useImportCourse();
  useEffect(() => {
    if (importCouse) {
      setSource(importCouse);
    }
  }, [importCouse]);

  return (
    <SourceContext.Provider value={{ source, upDateSources, handleDeleteTerm }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Column sourceTerm={source} />
      </DndContext>
      <div className="flex justify-center">
        <p
          className="p-2 w-fit border-b-4 border-blue-500 uppercase text-lg text-center hover:border-yellow-500 hover:text-yellow-500 font-bold cursor-pointer"
          onClick={() => handleAddTerm()}
        >
          + Add card
        </p>
      </div>
    </SourceContext.Provider>
  );
}
