import { useEffect } from "react";
import { coords2Pos } from "@/dom/coords2Pos";
import { pos2Coords } from "@/dom/pos2Coord";
import { emitter, EventNames } from "@/utils/customEvent";

export default function useWindowEvents() {
    useEffect(() => {
        const handleMouseUp = (event) => {
            const { clientX, clientY } = event;
            const { $ele, pos } = coords2Pos(clientX, clientY);
            const style = pos2Coords($ele, pos);
            emitter.emit(EventNames.UpdateCursorStyle, style || null);
        };

        const $ele = document.querySelector("#texts");

        $ele!.addEventListener("mouseup", handleMouseUp);
        return () => {
            $ele!.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);
}
