import { createContext, useState } from "react";
import QuizFormHeader from "../components/headerForm/QuizFormHeader";
import Sources from "../components/sources/Sources";
import { QuizFormHeaderType, QuizletFormType, SourcesType } from "./model";
import Modal from "../components/modal/Modal";
import FuncQuizlet from "../components/function/FuncQuizlet";
import HeaderTitle from "../components/headerTitle/Header";

type QuizletFormtype = {
  handleSetHeader: (quizHeader: QuizFormHeaderType) => void;
  handleSetSource: (quizSource: SourcesType[]) => void;
};

export const QuizletFormContext = createContext<QuizletFormtype | undefined>(
  undefined
);

export default function QuizletForm() {
  const [quizValue, setQuizValue] = useState<QuizletFormType>({
    course: "",
    description: "",
    sources: [],
    title: "",
    schoolName: "",
  });

  const handleSetHeader = (quizHeader: QuizFormHeaderType) => {
    setQuizValue((prevValue) => ({
      ...prevValue,
      course: quizHeader.course,
      description: quizHeader.description,
      schoolName: quizHeader.schoolName,
      title: quizHeader.title,
    }));
  };
  const handleSetSource = (quizSource: SourcesType[]) => {
    setQuizValue((preValue) => ({
      ...preValue,
      sources: quizSource,
    }));
  };
  console.log("quizValue", quizValue);

  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className=" bg-slate-50">
      <HeaderTitle />
      <div className="p-20">
        <QuizletFormContext.Provider
          value={{ handleSetHeader, handleSetSource }}
        >
          <QuizFormHeader />
          <FuncQuizlet />
          <Sources />
        </QuizletFormContext.Provider>
        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={openModal}>
            Create
          </button>
        </div>

        <Modal id="my_modal_2" value={quizValue} />
      </div>
    </div>
  );
}
