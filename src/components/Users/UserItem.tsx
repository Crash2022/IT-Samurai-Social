import React from "react";
import styles from "./Users.module.css";
import userAvatar from "../../assets/images/avatars/user_avatar.jpg";
import {NavLink} from "react-router-dom";
import {UsersArray} from "../../redux/users-reducer";

export type UserItemPropsType = {
    user: UsersArray
    followingInProgress: Array<string>
    deleteFollow: (userId: string) => void
    postFollow: (userId: string) => void
}

export const UserItem = (props: UserItemPropsType) => {

    const deleteFollowHandler = (userId: string) => {
        props.deleteFollow(userId);
    }

    const postFollowHandler = (userId: string) => {
        props.postFollow(userId);
    }

    return (
        <>
            <div className={styles.usersWrapper}>
                <div className={styles.usersItem}>
                    <div className={styles.users_leftSide}>
                        <NavLink to={'/profile/' + props.user.id}>
                            <div className={styles.usersAvatar}>
                                <img src={props.user.photos.small !== null ? props.user.photos.small : userAvatar}
                                     alt="userAvatar"/>
                            </div>
                        </NavLink>
                        <div className={styles.followButton}>
                            {
                                props.user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                              onClick={() => {
                                                  deleteFollowHandler(props.user.id)
                                              }}>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                              onClick={() => {
                                                  postFollowHandler(props.user.id)
                                              }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={styles.users_rightSide}>
                        <div className={styles.users_rightSide_info}>
                            <div className={styles.users_rightSide_name}>
                                {props.user.name}
                            </div>
                            <div className={styles.users_rightSide_location}>
                                <div>{'user.location.country'},</div>
                                <div>{'user.location.city'}</div>
                            </div>
                        </div>
                        <div className={styles.users_rightSide_status}>
                            {props.user.status !== null ? props.user.status : 'Here will be your status speech: user.status'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}