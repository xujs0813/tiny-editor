import { blocks } from "./demo";
import { IBlock } from "@/types";
import { getSelection, updateSelection } from "./selection";
import { updateToken } from "@/store/data";
import { store } from "@/store";

let _blocks: IBlock[] = JSON.parse(JSON.stringify(blocks));
export function getBlocks() {
    return _blocks;
}

function setBlocks(val: IBlock[]) {
    _blocks = val;
}

export function insertText(val: string) {
    const selection = getSelection();
    const blocks = getBlocks();
    const block = blocks.find((block) => block.id === selection?.blockId);
    if (!block) {
        return;
    }
    block.text =
        block.text.slice(0, selection.start + 1) +
        val +
        block.text.slice(selection.start + 1);
    block.token = Math.random() + "";

    updateSelection({...selection,start: selection.start + val.length,end: selection.start + val.length});
    setBlocks(blocks);
    store.dispatch(updateToken(Math.random() + ""));
}
