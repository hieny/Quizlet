import { QuizletFormType } from "../../pages/model";

export default function Modal({
  id,
  value,
}: {
  id: string;
  value: QuizletFormType;
}) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Create new set of course with value like this
        </h3>
        <p className="py-4">{JSON.stringify(value)}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
