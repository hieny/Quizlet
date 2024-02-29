import { ChangeEvent, useContext } from "react";
import { SourceContext } from "../sources/Sources";
import { TermAndDefContext } from "../sources/TermAndDef";

export default function Terms({ id }: { id: number }) {
  const context = useContext(SourceContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    context?.upDateSources(id, "term", e.target.value);
  };

  const contextTermAndDef = useContext(TermAndDefContext);

  const termValue = context?.source.find((term) => term.id === id)?.term;

  return (
    <div>
      <input
        type="text"
        placeholder="Enter term"
        className="input input-ghost w-[600px]  border-b-2"
        value={termValue}
        onChange={(e) => handleChange(e)}
      />
      <hr className="border border-slate-400" />
      <label className="text-slate-500 font-semibold">Term</label>

      {contextTermAndDef?.isMultipleChoice && (
        <div className="mt-3 border-t p-5 w-[400px]">
          <p className="font-bold my-5">MULTIPLE CHOICE OPTIONS</p>
          <p className="my-5">
            With your Quizlet Plus subscription, you can add multiple-choice
            answers to questions.
          </p>
          <p className="my-5"> 
            These added options will appear as randomly ordered multiple-choice
            distractors in Learn and Test to help you go beyond memorization.
          </p>
          <div
            onClick={() => {
              contextTermAndDef.handleOpenMultipleChoice(false, id);
            }}
            className="flex"
          >
            <div className="w-5 h-5">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                />
              </svg>
            </div>
            <p>Remove options</p>
          </div>
        </div>
      )}
    </div>
  );
}
