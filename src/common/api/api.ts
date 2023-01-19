import axios from "axios";
import {FormDataType} from "../../components/Profile/MyProfile/MyProfile";

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type GetUsersResponseType = {
    items: Array<UsersResponseType>
    totalCount: number
    error: null
}

type UsersResponseType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

export type PutResponseType<D = { }> = {
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
    data: D
}

export type authMeResponseType = {
    resultCode: ResultCodesEnum
    data: {
        id: number
        email: string
        login: string
    }
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

type GetCaptchaResponseType = {
    url: string
}

type GetProfileResponseType = {
    aboutMe: string
    contacts: {
        [key:string] : string
        // facebook: string
        // website: string | null
        // vk: string
        // twitter: string
        // instagram: string | null
        // youtube: string | null
        // github: string
        // mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: string
    photos: {
        small: string
        large: string
    }
}

type PutUserPhotoType = {
    photos: {
        small: string
        large: string
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '74a19bbb-094d-4af5-81dc-fc82431ac8a3'}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null) {
        return (
            instance
                .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`), {})
                .then(response => response.data)
        )
    },
    getProfile(userId: string) {
        // можно написать так на всякий случай
        console.log('Please, use new object');
        return profileAPI.getProfile(userId);
    },
    deleteFollow(userId: string) {
        return (
            instance
                .delete<PutResponseType>(`follow/${userId}`, {})
                .then(response => response.data)
        )
    },
    postFollow(userId: string) {
        return (
            instance
                .post<PutResponseType>(`follow/${userId}`, {}, {})
                .then(response => response.data)
        )
    }
}

export const authAPI = {
    getAuth() {
        return (
            instance
                .get<authMeResponseType>(`auth/me`, {})
                .then(response => response.data)
        )
    },
    postLogin(email: string, password: string, rememberMe: boolean = false,
              captchaUrl: null | string = null) {
        return (
            instance
                .post<PutResponseType>(`auth/login`, {email, password, rememberMe, captchaUrl}, {})
                .then(response => response.data)
        )
    },
    deleteLogin() {
        return (
            instance
                .delete<PutResponseType>(`auth/login`)
                .then(response => response.data)
        )
    }
}

export const securityAPI = {
    getCaptcha() {
        return (
            instance
                .get<GetCaptchaResponseType>(`security/get-captcha-url`)
                .then(response => response.data)
        )
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return (
            instance
                .get<GetProfileResponseType>(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getUserStatus(userId: string) {
        return (
            instance
                .get<string>(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateUserStatus(status: string) {
        return (
            instance
                .put<PutResponseType>(`profile/status`, {status: status})
                .then(response => response.data)
        )
    },
    updateUserPhoto(photoFile: File) {
        const formData = new FormData;
        formData.append('image', photoFile);

        return (
            instance
                .put<PutResponseType<PutUserPhotoType>>(`profile/photo`, formData, {
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
                .put<PutResponseType>(`profile`, profile)
                .then(response => response.data)
        )
    }
}