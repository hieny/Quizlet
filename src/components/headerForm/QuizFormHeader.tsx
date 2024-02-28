import { ChangeEvent, useContext, useEffect, useState } from "react";
import InfoSVG from "../../assets/InfoSVG";
import { QuizFormHeaderType } from "../../pages/model";
import { QuizletFormContext } from "../../pages/QuizletForm";

export default function QuizFormHeader() {
  const context = useContext(QuizletFormContext);
  const [quizHeader, setQuizHeader] = useState<QuizFormHeaderType>({
    title: "",
    description: "",
    course: "",
    schoolName: "",
  });

  const newQuizHeader = { ...quizHeader };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "title" | "school" | "course" | "des"
  ) => {
    if (type === "title") {
      newQuizHeader.title = e.target.value;
      setQuizHeader(newQuizHeader);
    }
    if (type === "school") {
      newQuizHeader.schoolName = e.target.value;
      setQuizHeader(newQuizHeader);
    }
    if (type === "course") {
      newQuizHeader.course = e.target.value;
      setQuizHeader(newQuizHeader);
    }
    if (type === "des") {
      newQuizHeader.description = e.target.value;
      setQuizHeader(newQuizHeader);
    }
  };

  useEffect(() => {
    context?.handleSetHeader(quizHeader);
  }, [quizHeader]);

  return (
    <div className="grid grid-cols-2 gap-5 my-5 mb-10">
      <input
        type="text"
        placeholder="Enter a title, like 'Biology- Chaper 22: Evolution'"
        className="input input-ghost w-full border-b-2 col-span-2 bg-white shadow-md shadow-slate-400"
        value={quizHeader.title}
        onChange={(e) => {
          handleChange(e, "title");
        }}
      />
      <input
        className="textarea textarea-ghost row-span-2 col-span-1  bg-white shadow-md shadow-slate-400"
        placeholder="Add a description..."
        value={quizHeader.description}
        onChange={(e) => {
          handleChange(e, "des");
        }}
      />
      <label className="input input-bordered flex items-center gap-2 col-span-1  bg-white shadow-md shadow-slate-400">
        <input
          type="text"
          className="grow "
          placeholder="School name"
          value={quizHeader.schoolName}
          onChange={(e) => {
            handleChange(e, "school");
          }}
        />
        <div
          className="tooltip  tooltip-left w-5 h-5"
          data-tip="Tagging a school (Quizlet University) will add your set to the course page."
        >
          <InfoSVG />
        </div>
      </label>
      <label className="input input-bordered flex items-center gap-2 col-span-1  bg-white shadow-md shadow-slate-400">
        <input
          type="text"
          className="grow"
          placeholder="Course"
          value={quizHeader.course}
          onChange={(e) => {
            handleChange(e, "course");
          }}
        />
        <div className="tooltip w-5 h-5" data-tip="Course">
          <InfoSVG />
        </div>
      </label>
    </div>
  );
}
