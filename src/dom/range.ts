export function getRangeHeadPos() {
  const selection = window.getSelection();
  if (!selection) {
    return null;
  }
  const rects = selection.getRangeAt(0).getClientRects();
  if (!rects || !rects.length) {
    return null;
  }
  const { left, top } = rects[0];
  return { left, top };
}

export function getRangeEndPos() {
  const selection = window.getSelection();
  if (!selection) {
    return null;
  }
  const rects = selection.getRangeAt(0).getClientRects();
  if (!rects || !rects.length) {
    return null;
  }
  const last = rects[rects.length - 1];
  const { left, width, top } = last;
  return { left: left + width, top };
}
