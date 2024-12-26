// 字符位置转屏幕坐标
export function pos2Coords($el, pos) {
  if (!$el) {
    return null;
  }
  const range = document.createRange();
  range.setStart($el, pos);
  range.setEnd($el, pos);

  const selection = window.getSelection();
  if (!selection) {
    return null;
  }
  selection.addRange(range);

  const rects = range.getClientRects();
  if (!rects?.length) {
    return null;
  }
  console.log("rects: ", rects, range.collapsed, selection.toString());
  return rects[0];
}
