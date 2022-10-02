import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispacth, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispacth>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
