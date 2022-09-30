import {ActionsType, SideBarPropsType} from "./store";
import {v1} from "uuid";

let initialState = {
    friendsData: [
        {id: v1(), name: 'Neil Tunicliff', avatar: 'https://www.tribalzine.com/IMG/jpg/neil_3small.jpg'},
        {id: v1(), name: 'Craig Lee Scott', avatar: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg'},
        {id: v1(), name: 'Ali Clarkson', avatar: 'https://i.ytimg.com/vi/q_4gVJpSJtA/maxresdefault.jpg'},
        {id: v1(), name: 'Damon Watson', avatar: 'https://i.ytimg.com/vi/aiDyCZWiDeU/maxresdefault.jpg'}
    ]
}

export const sidebarReducer = ( state: SideBarPropsType = initialState, action: ActionsType) => {
    return state;
}