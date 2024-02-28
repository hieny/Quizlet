import { SourcesType } from "../../../../pages/model";

export default function PreviewCourse({
  previewCourse,
}: {
  previewCourse: SourcesType[] | undefined;
}) {
  return (
    <div>
      {previewCourse && (
        <>
          <p className="uppercase text-lg text-slate-400">Preview import</p>
          {previewCourse.map((item, index) => {
            return (
              <div key={index} className="flex justify-between">
                <div className=" my-2">
                  <p className="w-[450px] rounded  p-2 bg-slate-200">
                    {item.term}
                  </p>
                  <hr className="border border-slate-400" />
                  <label>Term</label>
                </div>
                <div className=" my-2">
                  <p className="w-[450px] rounded  p-2 bg-slate-200">
                    {item.definition}
                  </p>
                  <hr className="border border-slate-400" />
                  <label>Definition</label>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
