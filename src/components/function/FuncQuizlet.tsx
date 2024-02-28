import ArrowSVG from "../../assets/ArrowSVG";
import SettingSVG from "../../assets/SettingSVG";
import DropDown from "./components/DropDown";
import ButtonImport from "./components/import/ButtonImport";

export default function FuncQuizlet() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <ButtonImport />
        <button className="btn btn-outline border-slate-300 bg-white mx-2">
          + Add diagram
        </button>
        <button className="btn btn-outline border-slate-300 bg-white mx-2">
          Create from a note
        </button>
      </div>
      <div className="flex">
        <button className="btn btn-outline border-slate-300 bg-white mx-2 rounded-full">
          <div className="w-5 h-5">
            <SettingSVG />
          </div>
        </button>
        <button className="btn btn-outline border-slate-300 bg-white mx-2 rounded-full">
          <div className="w-5 h-5">
            <ArrowSVG />
          </div>
        </button>
        <DropDown />
      </div>
    </div>
  );
}
