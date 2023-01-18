import {v1} from "uuid";
import {UsersArray} from "./users-reducer";

export type SideBarPropsType = {
    users: Array<UsersArray>
    friendsData: Array<SidebarFriendsType>
}
export type SidebarFriendsType = {
    id: string
    name: string
    avatar: string
}

const initialState = {
    users: [] as Array<UsersArray>,
    friendsData: [
        {id: v1(), name: 'Neil Tunicliff', avatar: 'https://www.tribalzine.com/IMG/jpg/neil_3small.jpg'},
        {id: v1(), name: 'Craig Lee Scott', avatar: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg'},
        {id: v1(), name: 'Ali Clarkson', avatar: 'https://i.ytimg.com/vi/q_4gVJpSJtA/maxresdefault.jpg'},
        {id: v1(), name: 'Damon Watson', avatar: 'https://i.ytimg.com/vi/aiDyCZWiDeU/maxresdefault.jpg'}
    ]
}

export const sidebarReducer = (state: SideBarPropsType = initialState, action: SidebarActionsType): SideBarPropsType => {
    switch (action.type) {
        case 'SIDEBAR/SET_USERS':
            return {...state, users: action.users};
        default:
            return state;
    }
}

export type SidebarActionsType = SetNavbarUsersACType

export type SetNavbarUsersACType = ReturnType<typeof setNavbarUsersAC>
export const setNavbarUsersAC = (users: Array<UsersArray>) => ({type: 'SIDEBAR/SET_USERS', users} as const)
