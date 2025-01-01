import { useEffect } from "react";
import { coords2Pos } from "@/dom/coords2Pos";
import { emitter, EventNames } from "@/utils/customEvent";
import {updateSelection} from '@/data/selection'

export default function useWindowEvents() {
    useEffect(() => {
        const handleMouseUp = (event) => {
            const { clientX, clientY, target } = event;
            const { pos } = coords2Pos(clientX, clientY);
            if(pos > -1){
                updateSelection({blockId: target.dataset.id, start: pos, end: pos})
            }

            emitter.emit(EventNames.FocusInput);
        };

        const $ele = document.querySelector("#texts");

        $ele!.addEventListener("mouseup", handleMouseUp);
        return () => {
            $ele!.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);
}
