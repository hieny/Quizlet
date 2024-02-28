import { ChangeEvent, useState } from "react";
import StyleImport from "./StyleImport";
import { SourcesType } from "../../../../pages/model";
import PreviewCourse from "./PreviewCourse";
import { useDispatch } from "react-redux";
import { IMPORT_COURSE_REDUX } from "../../../../redux/action";

export default function ModalImport({ id }: { id: string }) {
  const [previewCourse, setPreviewCourse] = useState<SourcesType[]>();
  const dispatch = useDispatch();
  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(e.target.value);
    const value = e.target.value;

    const result: SourcesType[] = value
      .split(";")
      .reduce(
        (acc: SourcesType[], curr: string, index: number): SourcesType[] => {
          const [term, definition] = curr.split(",");
          if (term && definition) {
            // Check if term and definition are not undefined
            acc.push({
              id: index + 1,
              term: term.trim(),
              definition: definition.trim(),
            });
          }
          return acc;
        },
        []
      );
    setPreviewCourse(result);
  };

  const handleImport = () => {
    dispatch({
      type: IMPORT_COURSE_REDUX,
      payload: previewCourse,
    });
    setPreviewCourse(undefined)
  };
  return (
    <dialog id={id} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="modal-action flex justify-start">
          <form method="dialog">
            <button className="btn">Cancel Import</button>
          </form>
        </div>
        <p className="font-semibold text-lg my-2">
          Import your data. Copy and Paste your data here (from Word, Excel,
          Google Docs, etc.)!
        </p>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Word1  Definition1"
          onChange={(e) => handleOnChange(e)}
        ></textarea>
        <div className="flex justify-between">
          <StyleImport />
          <form method="dialog">
            <button
              className="btn btn-primary uppercase text-lg "
              onClick={() => handleImport()}
            >
              import
            </button>
          </form>
        </div>
        <PreviewCourse previewCourse={previewCourse} />
      </div>
    </dialog>
  );
}
