export default function StyleImport() {
  return (
    <div className="flex justify-between">
      <div>
        <p className="font-bold">Between term and definition</p>
        <div className="items-center flex gap-2 my-2">
          <div className="flex justify-start items-center gap-2">
            <input
              type="radio"
              name="radio-9"
              className="radio radio-warning"
              disabled
            />
            <label>Tab</label>
          </div>
          <div className="flex justify-start items-center gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-warning"
              checked
            />
            <label>Comma</label>
          </div>
          <div className="flex justify-start items-center gap-2">
            <input
              type="radio"
              name="radio-11"
              className="radio radio-warning"
              disabled
            />
            <label>Custom: _____</label>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold">Between cards</p>
        <div className="items-center flex gap-2 my-2">
          <div className="flex justify-start items-center gap-2">
            <input
              type="radio"
              name="radio-7"
              className="radio radio-warning"
              disabled
            />
            <label>New Line</label>
          </div>
          <div className="flex justify-start items-center gap-2">
            <input
              type="radio"
              name="radio-8"
              className="radio radio-warning"
              checked
            />
            <label>Semicolon</label>
          </div>
          <div className="flex justify-start items-center gap-2">
            <input
              type="radio"
              name="radio-9"
              className="radio radio-warning"
              disabled
            />
            <label>Custom: _____</label>
          </div>
        </div>
      </div>
      
    </div>
  );
}
