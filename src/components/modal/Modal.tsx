import { QuizletFormType } from "../../pages/model";

export default function Modal({
  id,
  value,
}: {
  id: string;
  value: QuizletFormType;
}) {
  const renderSource = () => {
    return value.sources.map((source, index) => {
      return (
        <div key={index} className="flex">
          <p className="ml-3 mr-2"><span className="font-semibold mr-2">term:</span> {source.term},</p>
          {Array.isArray(source.definition) ? (
            <p>
             <span className="font-semibold mr-2">definition:</span>{JSON.stringify(source.definition)}
            </p>
          ) : (
            <p><span className="font-semibold mr-2">definition:</span> {source.definition}</p>
          )}
        </div>
      );
    });
  };

  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Create new set of course with value like this
        </h3>
        <p>{`{`}</p>
        <p className="mx-4"><span className="font-semibold mr-2">title:</span>{value.title}</p>
        <p className="mx-4"><span className="font-semibold mr-2">school:</span>{value.schoolName}</p>
        <p className="mx-4"><span className="font-semibold mr-2">course:</span>{value.course}</p>
        <p className="mx-4"><span className="font-semibold mr-2">sources:</span>{`{`}{renderSource()} <span className="">{"}"}</span></p>
        <p>{`}`}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
