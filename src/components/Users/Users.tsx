import React from "react";
import styles from "./Users.module.css";
import {UsersArray} from "../../redux/users-reducer";
import {Paginator} from "../../UI/Paginator/Paginator";
import {UserItem} from "./UserItem";

export type UsersPropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePageHandler: (pageNumber: number) => void
    followingInProgress: Array<string>
    deleteFollow: (userId: string) => void
    postFollow: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {

    return (
        <>
            <Paginator
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onChangePageHandler={props.onChangePageHandler}
                numberOfPagesInBlock={10}
            />

            <div className={styles.usersWrapper}>
                {
                    props.users.map(u => {
                        return (
                            <UserItem key={u.id}
                                      user={u}
                                      followingInProgress={props.followingInProgress}
                                      deleteFollow={props.deleteFollow}
                                      postFollow={props.postFollow}
                            />
                        )
                    })
                }

                {/*перенесли в компоненту UserItem*/}
                {/*{
                    props.users.map(user => {
                        return (
                            <div className={styles.usersItem} key={user.id}>
                                <div className={styles.users_leftSide}>
                                    <NavLink to={'/profile/' + user.id}>
                                        <div className={styles.usersAvatar}>
                                            <img src={user.photos.small !== null ? user.photos.small : userAvatar}
                                                 alt="userAvatar"/>
                                        </div>
                                    </NavLink>
                                    <div className={styles.followButton}>
                                        {
                                            user.followed
                                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                    onClick={() => {deleteFollowHandler(user.id)}}>Unfollow</button>

                                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                                    onClick={() => {postFollowHandler(user.id)}}>Follow</button>
                                        }
                                    </div>
                                </div>
                                <div className={styles.users_rightSide}>
                                    <div className={styles.users_rightSide_info}>
                                        <div className={styles.users_rightSide_name}>
                                            {user.name}
                                        </div>
                                        <div className={styles.users_rightSide_location}>
                                            <div>{'user.location.country'},</div>
                                            <div>{'user.location.city'}</div>
                                        </div>
                                    </div>
                                    <div className={styles.users_rightSide_status}>
                                        {user.status !== null ? user.status : 'Here will be your status speech: user.status'}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }*/}
            </div>
        </>
    );
}