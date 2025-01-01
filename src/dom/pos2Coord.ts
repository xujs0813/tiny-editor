import { Dir } from "../constants/enums";
import { IRect } from "../types";

export function pos2Coords(
    $el,
    pos: number,
    dir: Dir = Dir.Tail
): IRect | null {
    const rect = _pos2Coords($el, pos);
    if (!rect) {
        return null;
    }
    const { x, y, width, height } = rect;
    if (dir === Dir.Head) {
        return {
            left: x,
            top: y,
            width,
            height,
        };
    }
    return {
        left: x + width,
        top: y,
        width,
        height,
    };
}

let _range: Range = null;
// 字符索引号转为屏幕坐标
function _pos2Coords($el, pos: number) {
    if (!$el || pos < 0) {
        return null;
    }
    if ($el.nodeType !== 3) {
        $el = $el.firstChild;
    }
    const selection = window.getSelection();
    if (!selection) {
        return null;
    }

    const range = _range || (_range = document.createRange());
    const start = pos;
    const end = pos + 1;
    range.setStart($el, start);
    range.setEnd($el, end);

    selection.removeAllRanges();
    selection.addRange(range);

    const rects = range.getClientRects();
    if (!rects?.length) {
        return null;
    }
    return rects[0];
}
