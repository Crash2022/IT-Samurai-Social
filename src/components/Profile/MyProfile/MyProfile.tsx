import React from "react";
import classes from './MyProfile.module.css';
import {MapStateUserProfileToPropsType} from "../ProfileContainer";
//import userPhoto from "../../assets/images/user_photo.jpg";
import {Preloader} from "../../../UI/Preloader";

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
    console.log('props', props)
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
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
        );
    }
}