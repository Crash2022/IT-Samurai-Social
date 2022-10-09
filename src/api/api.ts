import axios from "axios";
import {UsersContainerType} from "../components/Users/UsersContainer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '74a19bbb-094d-4af5-81dc-fc82431ac8a3' }
})

export const getUsers = (props: UsersContainerType) => {
    return (
        instance
            .get(`users?page=${props.currentPage}&count=${props.pageSize}`, { })
            .then(response => response.data)
    )
}

export const getAuth = () => {
    return (
        instance
            .get(`auth/me`, { })
            .then(response => response.data)
    )
}

export const getProfile = (userId: number) => {
    return (
        instance
            .get(`profile/${userId}`)
            .then(response => response.data)
    )
}

export const deleteFollow = (userId: string) => {
    return (
        instance
            .delete(`follow/${userId}`, { })
            .then(response => response.data)
    )
}
export const postFollow = (userId: string) => {
    return (
        instance
            .post(`follow/${userId}`, { }, { })
            .then(response => response.data)
    )
}