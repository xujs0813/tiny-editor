import { useEffect } from "react";
import { getRangeEndPos, getRangeHeadPos } from "../../core/range";
import { EventNames, emitter } from "../../utils/customEvent";

export default function useWindowEvents() {
  useEffect(() => {
    const handleMouseUp = () => {
      const headPos = getRangeHeadPos();
      emitter.emit(EventNames.UpdateHeadCursor, headPos);

      const tailPos = getRangeEndPos();
      emitter.emit(EventNames.UpdateTailCursor, tailPos);
    };

    const $ele = document.querySelector('#texts')

    $ele!.addEventListener("mouseup", handleMouseUp);

    return () => {
      $ele!.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
}
