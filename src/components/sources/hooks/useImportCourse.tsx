import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configStore";

export default function useImportCourse() {
  const course = useSelector(
    (state: RootState) => state.ImportCourseReducer.importCourse
  );
  return course;
}
