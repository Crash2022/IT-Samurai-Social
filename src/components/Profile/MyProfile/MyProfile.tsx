import React from "react";
import classes from './MyProfile.module.css';
import {MapStateUserProfileToPropsType} from "../ProfileContainer";
import {Preloader} from "../../../UI/Preloader";
import userAvatar from "../../../assets/images/user_avatar.jpg";

export const MyProfile = (props: MapStateUserProfileToPropsType) => {
    /*return (
        <>
            <div className={classes.content__avatar}>
                <img src="https://twentysix.ru/uploads/images/00/02/33/2021/07/26/94076d_full.jpg"
                     alt="profile-avatar"></img>
            </div>

            <div className={classes.content__info}>
                <div className={classes.content__info_avatar}>
                    <img
                        src="https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg"
                        alt="my-avatar"></img>
                </div>
                <div className={classes.content__info_info}>
                    <div>Меня зовут ...</div>
                    <div>Дата рождения: ...</div>
                    <div>Город: ...</div>
                    <div>Хобби: ...</div>
                    <div>Веб-сайт: ...</div>
                </div>
            </div>
        </>
    );*/

    //console.log('props', props);

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <>
                <div className={classes.content__avatar}>
                    <img src="https://twentysix.ru/uploads/images/00/02/33/2021/07/26/94076d_full.jpg"
                         alt="profile-avatar">
                    </img>
                </div>

                <div className={classes.content__info}>
                    <div className={classes.content__info_avatar}>
                        <img
                            src={props.profile.photos.small !== null ? props.profile.photos.small : userAvatar}
                            alt="my-avatar"></img>
                    </div>
                    <div className={classes.content__info_info}>
                        <div>Имя: {props.profile.fullName}</div>
                        <div>Дата рождения: ...</div>
                        <div>Город: ...</div>
                        <div>Хобби: ...</div>
                        <div>Работа: {props.profile.lookingForAJobDescription}</div>
                        <div>Веб-сайт: {props.profile.contacts.vk}</div>
                    </div>
                </div>
            </>
        );
    }
}