import React from "react";
import classes from "./Users.module.css";
import userAvatar from "../../assets/images/user_avatar.jpg";
import {v1} from "uuid";
import {NavLink} from "react-router-dom";
import {UsersArray} from "../../redux/users-reducer";
//import axios from "axios";
import {deleteFollow, postFollow} from "../../api/api";

export type UsersPropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followAC: (userId: string) => void
    unfollowAC: (userId: string) => void
    onChangePageHandler: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const deleteFollowHandler = (userId: string) => {
        deleteFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollowAC(userId);
                }
            })
    }

    const postFollowHandler = (userId: string) => {
        postFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    props.followAC(userId);
                }
            })
    }

    return (
        <>
            <div className={classes.pagination}>
                {
                    pages.map(page => {
                        return (
                            <span className={props.currentPage === page ? classes.selectedPage : ''}
                                  key={v1()}
                                  onClick={() => {
                                      props.onChangePageHandler(page)
                                  }}
                            >
                                  {page}
                            </span>
                        )
                    })
                }
            </div>
            <div className={classes.usersWrapper}>
                {
                    props.users.map(user => {
                        return (
                            <div className={classes.usersItem} key={user.id}>
                                <div className={classes.users_leftSide}>
                                    <NavLink to={'/profile/' + user.id}>
                                        <div className={classes.usersAvatar}>
                                            <img src={user.photos.small !== null ? user.photos.small : userAvatar}
                                                 alt="userAvatar"/>
                                        </div>
                                    </NavLink>
                                    <div className={classes.followButton}>
                                        {
                                            user.followed
                                                ? <button onClick={() => {

                                                        /*axios
                                                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                                withCredentials: true,
                                                                headers: { 'API-KEY': '74a19bbb-094d-4af5-81dc-fc82431ac8a3' }
                                                            })*/

                                                            /*deleteFollow()
                                                            .then(data => {
                                                                if (data.resultCode === 0) {
                                                                    props.unfollowAC(user.id);
                                                                }
                                                            })*/

                                                        deleteFollowHandler(user.id)
                                                }
                                                }>Unfollow</button>

                                                : <button onClick={() => {

                                                    /*axios
                                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                            withCredentials: true,
                                                            headers: { 'API-KEY': '74a19bbb-094d-4af5-81dc-fc82431ac8a3' }
                                                        })*/

                                                        /*postFollow()
                                                        .then(data => {
                                                            if (data.resultCode === 0) {
                                                                props.followAC(user.id);
                                                            }
                                                        })*/

                                                        postFollowHandler(user.id)
                                                }
                                                }>Follow</button>
                                        }
                                    </div>
                                </div>
                                <div className={classes.users_rightSide}>
                                    <div className={classes.users_rightSide_info}>
                                        <div className={classes.users_rightSide_name}>
                                            {user.name}
                                        </div>
                                        <div className={classes.users_rightSide_location}>
                                            <div>{'user.location.country'},</div>
                                            <div>{'user.location.city'}</div>
                                        </div>
                                    </div>
                                    <div className={classes.users_rightSide_status}>
                                        {user.status !== null ? user.status : 'Here will be your status speech: user.status'}
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    );

}