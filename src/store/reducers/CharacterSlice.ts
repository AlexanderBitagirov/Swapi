import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetCharacters } from "../../interfaces/character.interface";

interface ICharacterState {
  characters: IGetCharacters;
  isLoading: boolean;
  error: string;
}

const initialState: ICharacterState = {
  characters: {
    count: "",
    next: "",
    results: []
  },
  isLoading: false,
  error: ""
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    characterFetching(state) {
      state.isLoading = true;
    },
    characterFetchingSuccess(state, action: PayloadAction<IGetCharacters>) {
      state.isLoading = false;
      state.characters = action.payload;
    },
    characterFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default characterSlice.reducer;
