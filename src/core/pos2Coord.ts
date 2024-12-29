import { Dir } from "../constants/enums";
import { IRect } from "../types";

export function pos2Coords(
  $el: any,
  pos: number,
  dir: Dir = Dir.Tail
): IRect | null {
  const rect = _pos2Coords($el, pos);
  console.log("rect: ", rect);
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

// 字符索引号转为屏幕坐标
function _pos2Coords($el: Element, pos: number) {
    console.log('pos: ', pos);
  if (!$el) {
    return null;
  }
  const range = document.createRange();
  const start = pos 
  const end = pos + 1
  range.setStart($el, start);
  range.setEnd($el, end);
  
  const selection = window.getSelection();
  if (!selection) {
      return null;
    }
  selection.removeAllRanges()
  selection.addRange(range);

  const rects = range.getClientRects();
  if (!rects?.length) {
    return null;
  }
  return rects[0];
}
