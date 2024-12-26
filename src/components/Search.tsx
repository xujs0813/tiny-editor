import { useEffect, useState } from "react";
import { emitter, EventNames } from "../utils/customEvent";
import { pos2Coords } from "../core";

function HiddenInput() {
  const [row, setRow] = useState<number>(1);
  const [pos, setPos] = useState<number>(1);

  const handleRowInput = (event) => {
    const val = event.target.value;
    setRow(val);
  };

  const handlePosInput = (event) => {
    const val = event.target.value;
    setPos(val);
  };

  useEffect(() => {
    const $texts = document.querySelector("#texts");
    const $item = $texts?.childNodes[row];
    const style = pos2Coords($item?.firstChild, pos);
    emitter.emit(EventNames.UpdateBlinkCursor, style || null);
  }, [row, pos]);

  return (
    <div>
      第
      <input
        className="search-input"
        value={row}
        type="number"
        onInput={handleRowInput}
      />
      行 
      第
      <input
        className="search-input"
        value={pos}
        type="number"
        onInput={handlePosInput}
      />
      字符
    </div>
  );
}

export default HiddenInput;
