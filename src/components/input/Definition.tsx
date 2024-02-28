import { ChangeEvent, useContext, useState } from "react";
import { SourceContext } from "../sources/Sources";
import { TermAndDefContext } from "../sources/TermAndDef";

export default function Definition({ id }: { id: number }) {
  const [inputDefArr, setInputDefArr] = useState<
    {
      id: number;
      value: string;
    }[]
  >([]);
  const contextTermAndDef = useContext(TermAndDefContext);

  const context = useContext(SourceContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    context?.upDateSources(id, "def", e.target.value);
  };
  const handleChangeArr = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const indexDef = inputDefArr.findIndex((def) => def.id === index);
    const newInputDef = [...inputDefArr];

    if (indexDef !== -1) {
      newInputDef[indexDef].value = e.target.value;
    } else {
      newInputDef.push({ id: index, value: e.target.value });
    }

    setInputDefArr(newInputDef);

    const defArrString = newInputDef.map((def) => def.value);
    context?.upDateSources(id, "def", defArrString);
  };

  const defValue = context?.source.find((def) => def.id === id)?.definition;
  let defInputValue: string = "";
  let defInputValueArr: string[] = [];
  if (typeof defValue === "string") {
    defInputValue = defValue;
  }
  if (typeof defInputValue === "object") {
    defInputValueArr = defValue as string[];
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Definition"
        className="input input-ghost w-[600px] border-b-2"
        value={defInputValue}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <hr className="border border-slate-400" />
      <label className="text-slate-500 font-semibold">Definition</label>

      {!contextTermAndDef?.isMultipleChoice && (
        <p
          onClick={() => {
            contextTermAndDef?.handleOpenMultipleChoice(true, id);
          }}
          className="font-bold "
        >
          + Add muiltiple choice options
        </p>
      )}

      {contextTermAndDef?.isMultipleChoice && (
        <div className="mt-3 border-t p-5">
          {[1, 2, 3].map((item) => {
            return (
              <div key={item}>
                <input
                  type="text"
                  placeholder={`Enter muiltiple choice option ${item}`}
                  className="input input-ghost w-[600px] border-b-2"
                  value={defInputValueArr[item]}
                  onChange={(e) => {
                    handleChangeArr(e, item);
                  }}
                />
                <hr className="border border-black" />
                <label>Muiltiple choice options</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
