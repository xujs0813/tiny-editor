import { pos2Coords } from "./pos2Coord";

export function coords2Pos(x, y) {
    let $ele = document.elementFromPoint(x, y);
    if ($ele.nodeType !== 3) {
        $ele = $ele.firstChild as Element;
    }
    if (!$ele || $ele.nodeType !== 3) {
        return { $ele, pos: -1 };
    }
    for (let i = 0; i < $ele.nodeValue.length; i++) {
        const rect = pos2Coords($ele, i);
        if (!rect) {
            continue;
        }
        if (
            rect.left <= x &&
            x <= rect.left + rect.width &&
            rect.top <= y &&
            y <= rect.top + rect.height
        ) {
            return { $ele, pos: i };
        }
    }
    return { $ele, pos: -1 };
}
