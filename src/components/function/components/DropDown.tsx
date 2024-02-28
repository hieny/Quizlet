import KeyboardSVG from "../../../assets/KeyboardSVG";

export default function DropDown() {
  const data = [
    {
      action: "Add card (inserts below the current card)",
      keyBoard: "Ctrl+Shift+R",
    },
    { action: "Next side or card", keyBoard: "Tab" },
    { action: "Move card up/down", keyBoard: "Alt+↑ / ↓" },
    {
      action: "Open image gallery(tab and enter to select image)",
      keyBoard: "Ctrl+Shift+I",
    },
    { action: "Upload image", keyBoard: "Ctrl+Shift+U" },
    { action: "Toggle autosuggestions", keyBoard: "Ctrl+Shift+A" },
    { action: "Open voice recording", keyBoard: "Ctrl+Shift+O" },
    { action: "Bold text", keyBoard: "Ctrl+B" },
    { action: "Italicize text", keyBoard: "Ctrl+I" },
    { action: "Underline text", keyBoard: "Ctrl+U" },
  ];

  const renderDropdownContent = data.map((item, index) => {
    return (
      <li key={index}>
        <div className="flex justify-between">
          <p className=" text-black font-semibold">{item.action}</p>
          <p className="p-2 rounded-lg border-2 border-slate-300">
            {item.keyBoard}
          </p>
        </div>
      </li>
    );
  });
  return (
    <details className="dropdown dropdown-top dropdown-end w-fit ">
      <summary className="btn btn-outline border-slate-300 bg-white mx-2 rounded-full">
        <div className="w-5 h-5">
          <KeyboardSVG />
        </div>
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box h-72 overflow-y-auto">
        {renderDropdownContent}
      </ul>
    </details>
  );
}
