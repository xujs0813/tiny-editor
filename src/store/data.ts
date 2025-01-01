import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ISelection } from "@/types";

export interface Data {
    selection: ISelection | null;
    updateToken: string
}

const initialState: Data = {
    selection: null,
    updateToken: "",
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        updateData: (state, action: PayloadAction<Data>) => {
            state.selection = {...action.payload.selection};
        },
        updateToken: (state, action: PayloadAction<string>) => {
            state.updateToken = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { updateData, updateToken } = dataSlice.actions;

export default dataSlice.reducer;
