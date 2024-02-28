export type SourcesType = {
  id: number;
  term: string;
  definition: string | string[];
};

export type QuizletFormType = {
  title: string;
  description: string;
  schoolName?: string;
  course: string;
  sources: SourcesType[];
};


export type QuizFormHeaderType = Omit<QuizletFormType, "sources">