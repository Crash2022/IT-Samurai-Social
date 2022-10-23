import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '74a19bbb-094d-4af5-81dc-fc82431ac8a3' }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance
                .get(`users?page=${currentPage}&count=${pageSize}`, { })
                .then(response => response.data)
        )
    },
    // можно написать так на всякий случай
    getProfile(userId: number) {
        console.log('Please, use new object');
        return profileAPI.getProfile(userId)
    },
    deleteFollow(userId: string) {
        return (
            instance
                .delete(`follow/${userId}`, { })
                .then(response => response.data)
        )
    },
    postFollow (userId: string) {
        return (
            instance
                .post(`follow/${userId}`, { }, { })
                .then(response => response.data)
        )
    }
}

export const authAPI = {
    getAuth() {
        return (
            instance
                .get(`auth/me`, { })
                .then(response => response.data)
        )
    },
    postLogin(email: string, password: string, rememberMe: boolean = false) {
        return (
            instance
                .post(`auth/login`, {email, password, rememberMe}, { })
                .then(response => response.data)
        )
    },
    deleteLogin() {
        return (
            instance
                .delete(`auth/login`)
                .then(response => response.data)
        )
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return (
            instance
                .get(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getUserStatus(userId: number) {
        return (
            instance
                .get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateUserStatus(status: string) {
        return (
            instance
                .put(`profile/status`, {status: status})
                .then(response => response.data)
        )
    }
}