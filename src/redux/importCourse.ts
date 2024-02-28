import { SourcesType } from "../pages/model";
import { IMPORT_COURSE_REDUX } from "./action";

type ActionType<T> = {
    type: string;
    payload: T
}

type SourceTypeState = {
    importCourse: SourcesType[] | null
}


const initialState: SourceTypeState = {
    importCourse: null
}

const importCourseReducer = (state = initialState, action: ActionType<SourcesType[]>) => {
  switch (action.type) {

  case IMPORT_COURSE_REDUX:
    return { ...state, importCourse: action.payload }

  default:
    return state
  }
}


export default importCourseReducer