import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Terms from "../input/Terms";
import Definition from "../input/Definition";
import { createContext, useContext, useState } from "react";
import { SourceContext } from "./Sources";
import DeleteSVG from "../../assets/DeleteSVG";
import AlignSVG from "../../assets/AlignSVG";

export type TermAndDefContext = {
  isMultipleChoice: boolean;
  handleOpenMultipleChoice: (isMulti: boolean, id: number) => void;
};
export const TermAndDefContext = createContext<TermAndDefContext | undefined>(
  undefined
);
export default function TermAndDef({
  id,
  index,
}: {
  id: number;
  index: number;
}) {
  const { setNodeRef, transform, transition, attributes, listeners } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const context = useContext(SourceContext);
  const [isMultipleChoice, setIsMultipleChoice] = useState<boolean>(false);

  const handleOpenMultipleChoice = (isMulti: boolean, id: number) => {
    setIsMultipleChoice(isMulti);
    context?.upDateSources(id, "def", "");
  };

  return (
    <div
      className="border-2 bg-white rounded-lg my-4 shadow-lg shadow-slate-400 w-full "
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div className="flex justify-between border-b-2 my-2 border-slate-200 p-2">
        <div
          {...listeners}
          className="flex justify-between mx-5 cursor-move w-full"
        >
          <p className="text-slate-500 font-semibold">{index + 1}</p>
          <div className="w-5 h-5">
            <AlignSVG />
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="tooltip items-center" data-tip="delete this card">
            <button
              className="w-5 h-5"
              onClick={() => {
                context?.handleDeleteTerm(id);
              }}
            >
              <DeleteSVG />
            </button>
          </div>
        </div>
      </div>
      <TermAndDefContext.Provider
        value={{ isMultipleChoice, handleOpenMultipleChoice }}
      >
        <div className="flex justify-between  p-4 ">
          <Terms id={id} />
          <Definition id={id} />
        </div>
      </TermAndDefContext.Provider>
    </div>
  );
}
