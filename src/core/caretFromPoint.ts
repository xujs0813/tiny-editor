export function caretFromPoint(x: number, y: number) {
  let range;
  let textNode;
  let offset;

  if ((document as any).caretPositionFromPoint) {
    range = (document as any).caretPositionFromPoint(x, y);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // 使用 WebKit 专有回退方法
    range = document.caretRangeFromPoint(x, y);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // 两个方法都不支持，什么都不做
    return;
  }

  if (textNode?.nodeType === 3) {
    console.log(range, textNode, offset);
  }
}
