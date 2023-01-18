import { useDispatch } from 'react-redux'
import {AppThunkDispatch} from "../../redux/redux-store";

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()