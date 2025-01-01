import { useEffect } from "react";
import { emitter, EventNames } from "@/utils/customEvent";
import { getSelection } from "@/data/selection";
import { pos2Coords } from "@/dom/pos2Coord";


export default function useSelectionChange() {
    useEffect(() => {
        const handleSelectionChange = () => {
            const selection = getSelection();
            if (!selection) {
                return;
            }
            const {blockId, start} = selection
            const $ele = document.querySelector(`[data-id="${blockId}"]`);
            const style = pos2Coords($ele, start);
            emitter.emit(EventNames.UpdateCursorStyle, style || null);

        };

        emitter.on(EventNames.OnSelectionChange, handleSelectionChange);
        return () => {
            emitter.off(EventNames.OnSelectionChange, handleSelectionChange);
        };
    }, []);
}
