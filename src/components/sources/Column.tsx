import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SourcesType } from "../../pages/model";
import TermAndDef from "./TermAndDef";

export default function Column({ sourceTerm }: { sourceTerm: SourcesType[] }) {
  return (
    <div className="my-2">
      <SortableContext
        items={sourceTerm}
        strategy={verticalListSortingStrategy}
      >
        {sourceTerm.map((item, index) => {
          return (
            <div key={item.id}>
              <TermAndDef id={item.id} index={index} />
            </div>
          );
        })}
      </SortableContext>
    </div>
  );
}
