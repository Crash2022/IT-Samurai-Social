import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type UsersActionsType =
    UserFollowACType |
    UserUnfollowACType |
    SetUsersACType |
    SetCurrentPageACType |
    setUsersTotalCountACType | // весь список пользователей
    ToggleIsLoadingACType |
    ToggleFollowInProgressACType;

export type UsersPropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Array<string>
}
export type UsersArray = {
    id: string
    name: string
    followed: boolean
    status: string
    photos: { small: string, large: string }
}

let initialState = {
    users: [
        /*{   id: v1(),
            name: 'Craig Lee Scott',
            followed: true,
            status: 'Biketrials London UK!',
            /!*location: {
                country: 'UK',
                city: 'London'
            },*!/
            photos: {
                small: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg',
                large: 'https://i.ytimg.com/vi/rrnIievfbCM/hqdefault.jpg'
            }
        }*/
        /*{id: v1(),
         fullName: 'Neil Tunicliff',
         isFollowed: true,
         status: 'Biketrials is my Life!',
         location: {
            country: 'UK',
            city: 'London'
         },
         avatar: 'https://www.tribalzine.com/IMG/jpg/neil_3small.jpg',
        },
        {id: v1(),
            fullName: 'Thomas Remvik Aasen',
            isFollowed: false,
            status: 'Norway BT',
            location: {
                country: 'Norway',
                city: 'Oslo'
            },
            avatar: 'https://sun9-27.userapi.com/c10357/u12423350/-6/x_8e806d44.jpg',
        },
        {id: v1(),
            fullName: 'Damon Watson',
            isFollowed: true,
            status: 'Biketrials rules!',
            location: {
                country: 'UK',
                city: 'London'
            },
            avatar: 'https://i.ytimg.com/vi/aiDyCZWiDeU/maxresdefault.jpg',
        },
        {id: v1(),
            fullName: 'Danny Macaskill',
            isFollowed: false,
            status: 'Redbull & Specialized Bikes prorider',
            location: {
                country: 'Scotland',
                city: 'Edinburgh'
            },
            avatar: 'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/12/10/1331764435698_1/danny-nin-%C3%B6zel-yap%C4%B1m-street-trials-bisikleti.jpg',
        }*/
    ] as Array<UsersArray>,
    pageSize: 20, // количество пользователей на одной странице
    totalUsersCount: 100, // количество пользователей приходит с сервера, теперь цифра не влияет
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
};

export const usersReducer = (state: UsersPropsType = initialState, action: UsersActionsType): UsersPropsType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(user => user.id === action.id ? {...user, followed: true} : user)};
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.id ? {...user, followed: false} : user)
            };
        case 'SET_USERS':
            return {...state, users: action.users};
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage};
        case 'SET_USERS_TOTAL_COUNT':
            return {...state, totalUsersCount: action.count}; // берём из Action Creator
        case 'TOGGLE_IS_LOADING':
            return {...state, isLoading: action.isLoading};
        case 'TOGGLE_FOLLOW_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.following
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

/*-------------------------ACTION CREATOR-------------------------*/

export type UserFollowACType = ReturnType<typeof followAC>
export type UserUnfollowACType = ReturnType<typeof unfollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
export type ToggleIsLoadingACType = ReturnType<typeof toggleIsLoadingAC>
export type ToggleFollowInProgressACType = ReturnType<typeof toggleFollowInProgressAC>

export const followAC = (userId: string) => ({type: 'FOLLOW', id: userId} as const)
export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', id: userId} as const)
export const setUsersAC = (users: Array<UsersArray>) => ({type: 'SET_USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: 'SET_USERS_TOTAL_COUNT', count: totalUsersCount} as const)
export const toggleIsLoadingAC = (isLoading: boolean) => ({type: 'TOGGLE_IS_LOADING', isLoading} as const)

export const toggleFollowInProgressAC = (userId: string, following: boolean) => ({
    type: 'TOGGLE_FOLLOW_IN_PROGRESS',
    userId, following
} as const)

/*-------------------------THUNK-------------------------*/

export const getUsersTC = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsLoadingAC(true));

        usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsLoadingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setCurrentPageAC(currentPage));
            dispatch(setUsersTotalCountAC(data.totalCount)); // все пользователи
        })
    }
}

export const deleteFollowTC = (userId: string) => {

    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowInProgressAC(userId,true));

        usersAPI.deleteFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                }
                dispatch(toggleFollowInProgressAC(userId,false));
            })
    }
}

export const postFollowTC = (userId: string) => {

    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowInProgressAC(userId,true));

        usersAPI.postFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(toggleFollowInProgressAC(userId,false));
            })
    }
}