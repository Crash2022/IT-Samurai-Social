import axios from "axios";
import {FormDataType} from "../components/Profile/MyProfile/MyProfile";

export type authMeType = {
    resultCode: number
    data: {
        id: number
        email: string
        login: string
    }
}

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
    getProfile(userId: string) {
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
                .get<authMeType>(`auth/me`, { })
                .then(response => response.data)
        )
    },
    postLogin(email: string, password: string, rememberMe: boolean = false,
              captchaUrl: null | string = null) {
        return (
            instance
                .post(`auth/login`, {email, password, rememberMe, captchaUrl}, { })
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

export const securityAPI = {
    getCaptcha() {
        return (
            instance
                .get(`security/get-captcha-url`)
                .then(response => response.data)
        )
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return (
            instance
                .get(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getUserStatus(userId: string) {
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
    },
    updateUserPhoto(photoFile: File) {
        const formData = new FormData;
        formData.append('image', photoFile);

        return (
            instance
                .put(`profile/photo`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => response.data)
        )
    },
    updateUserProfile(profile: FormDataType) {
        return (
            instance
                .put(`profile`, profile)
                .then(response => response.data)
        )
    }
}