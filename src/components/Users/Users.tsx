import React from "react";
import classes from "./Users.module.css";
import userAvatar from "../../assets/images/user_avatar.jpg";
import {v1} from "uuid";
import {NavLink} from "react-router-dom";
import {UsersArray} from "../../redux/users-reducer";

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
                                                ? <button
                                                    onClick={() => props.unfollowAC(user.id)}>Unfollow</button>
                                                :
                                                <button onClick={() => props.followAC(user.id)}>Follow</button>
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