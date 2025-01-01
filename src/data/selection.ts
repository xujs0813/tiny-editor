import { ISelection } from "@/types";
import {EventNames, emitter} from '@/utils/customEvent'

let _selection: ISelection | null = null;
export function getSelection(): ISelection | null {
    return _selection;
}

export function updateSelection(selection: ISelection | null) {
    _selection = selection;
    emitter.emit(EventNames.OnSelectionChange);
}
