import {ActionsType, UsersArray, UsersPropsType} from "./store";
import {v1} from "uuid";

let initialState = {
    users: [
        /*{id: v1(),
         fullName: 'Neil Tunicliff',
         isFollowed: true,
         status: 'Biketrials is my Life!',
         location: {
            country: 'UK',
            city: 'Edinburgh'
         },
         avatar: 'https://www.mag-russia.ru/f/product/21_merida_e_bikes_mountainbikes_eone_sixty_my2021_gallery_05.jpg',
        },
        {id: v1(),
            fullName: 'Thomas Remvik Aasen',
            isFollowed: false,
            status: 'Norway BT',
            location: {
                country: 'Norway',
                city: 'Oslo'
            },
            avatar: 'https://www.mag-russia.ru/f/product/21_merida_e_bikes_mountainbikes_eone_sixty_my2021_gallery_05.jpg',
        },
        {id: v1(),
            fullName: 'Damon Watson',
            isFollowed: true,
            status: 'Biketrials rules!',
            location: {
                country: 'UK',
                city: 'London'
            },
            avatar: 'https://www.mag-russia.ru/f/product/21_merida_e_bikes_mountainbikes_eone_sixty_my2021_gallery_05.jpg',
        },*/
    ]
}

export const usersReducer = ( state: UsersPropsType = initialState, action: ActionsType) => {
    switch(action.type) {
        case FOLLOW:
            return {...state, users: state.users.map( user => user.id === action.id ? {...user, isFollowed: true} : user)};
        case UNFOLLOW:
            return {...state, users: state.users.map( user => user.id === action.id ? {...user, isFollowed: false} : user)};
        case SET_USERS:
            return {...state, users: [...state.users, action.users]};
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

export const followAC = (userId: string) => ({type: FOLLOW, id: userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, id: userId} as const)
export const setUsersAC = (users: UsersArray) => ({type: SET_USERS, users} as const)