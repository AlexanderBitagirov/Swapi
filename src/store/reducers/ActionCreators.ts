import axios from "axios";
import { IGetCharacters } from "../../interfaces/character.interface";
import { AppDispacth } from "../store";
import { characterSlice } from "./CharacterSlice";

export const fetchCharacters = () => async (dispatch: AppDispacth) => {
  try {
    dispatch(characterSlice.actions.characterFetching());
    const response = await axios.get<IGetCharacters>(
      "https://swapi.dev/api/people/?page=2"
    );
    dispatch(characterSlice.actions.characterFetchingSuccess(response.data));
  } catch (e) {
    if (e instanceof Error) {
      dispatch(characterSlice.actions.characterFetchingError(e.message));
    }
  }
};
