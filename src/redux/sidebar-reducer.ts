import {v1} from "uuid";
import {toggleIsLoadingAC, setCurrentPageAC, setUsersTotalCountAC, UsersArray} from './users-reducer';
import {AppThunkType} from './redux-store';
import {usersAPI} from '../common/api/api';

type SideBarInitialStateType = {
    users: Array<UsersArray>
    friend: null | boolean
    // friendsData: Array<SidebarFriendsType>
}
type SidebarFriendsType = {
    id: string
    name: string
    avatar: string
}

const initialState = {
    users: [] as Array<UsersArray>,
    friend: null as null | boolean
    /*friendsData: [
        {id: v1(), name: 'Neil Tunicliff', avatar: 'https://www.tribalzine.com/IMG/jpg/neil_3small.jpg'},
        {id: v1(), name: 'Craig Lee Scott', avatar: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg'},
        {id: v1(), name: 'Ali Clarkson', avatar: 'https://i.ytimg.com/vi/q_4gVJpSJtA/maxresdefault.jpg'},
        {id: v1(), name: 'Damon Watson', avatar: 'https://i.ytimg.com/vi/aiDyCZWiDeU/maxresdefault.jpg'}
    ]*/
}

export const sidebarReducer = (state: SideBarInitialStateType = initialState, action: SidebarActionsType): SideBarInitialStateType => {
    switch (action.type) {
        case 'SIDEBAR/SET_USERS':
            return {...state, users: action.users};
        case 'SIDEBAR/SET_NAVBAR_FRIENDS':
            return {...state, friend: action.friend };
        default:
            return state;
    }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type SidebarActionsType = SetNavbarUsersACType | SetNavbarFriendsACType;

export type SetNavbarUsersACType = ReturnType<typeof setNavbarUsersAC>
export type SetNavbarFriendsACType = ReturnType<typeof setNavbarFriendsAC>

export const setNavbarUsersAC = (users: Array<UsersArray>) => ({type: 'SIDEBAR/SET_USERS', users} as const)
export const setNavbarFriendsAC = (friend: null | boolean) => ({type: 'SIDEBAR/SET_NAVBAR_FRIENDS', friend} as const)

/*------------------------------THUNK------------------------------*/

export const getUserFriendsTC = (currentPage: number, pageSize: number, friend: null | boolean): AppThunkType => {

    return (dispatch) => {
        // dispatch(toggleIsLoadingAC(true));

        usersAPI.getUserFriends(currentPage, pageSize, friend)
            .then(data => {
                // dispatch(toggleIsLoadingAC(false));
                dispatch(setNavbarUsersAC(data.items));
                dispatch(setNavbarFriendsAC(friend));
                dispatch(setCurrentPageAC(currentPage));
                // dispatch(setUsersTotalCountAC(data.totalCount)); // все пользователи
            })
    }
}
