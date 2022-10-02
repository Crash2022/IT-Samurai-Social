import {UsersArray, UsersPropsType} from "./redux-store";
import {ActionsType} from "./redux-store";
//import {v1} from "uuid";

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
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1
};

export const usersReducer = ( state: UsersPropsType = initialState, action: ActionsType) => {
    switch(action.type) {
        case FOLLOW:
            return {...state, users: state.users.map( user => user.id === action.id ? {...user, followed: true} : user)};
        case UNFOLLOW:
            return {...state, users: state.users.map( user => user.id === action.id ? {...user, followed: false} : user)};
        case SET_USERS:
            return {...state, users:  action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        /*case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}; // берём из Action Creator*/
        default:
            return state;
    }
}

const FOLLOW = 'FOLLOW'
export type UserFollowACType = ReturnType<typeof followAC>
const UNFOLLOW = 'UNFOLLOW'
export type UserUnfollowACType = ReturnType<typeof unfollowAC>
const SET_USERS = 'SET_USERS'
export type SetUsersACType = ReturnType<typeof setUsersAC>
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
//const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
//export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>

export const followAC = (userId: string) => ({type: FOLLOW, id: userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, id: userId} as const)
export const setUsersAC = (users: Array<UsersArray>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
//export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount} as const)