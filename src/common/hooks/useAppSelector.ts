import { TypedUseSelectorHook, useSelector } from 'react-redux'
import {RootStateType} from "../../redux/redux-store";

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector