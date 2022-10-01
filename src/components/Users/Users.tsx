import React, {useEffect} from "react";
import {UsersContainerType} from "./UsersContainer";
import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from '../../assets/images/user_avatar.jpg';

export const Users = (props: UsersContainerType) => {

    useEffect(()=> {
            //if (props.users.length === 0) {
                axios
                    .get('https://social-network.samuraijs.com/api/1.0/users')
                    .then(response => {
                        props.onSetUsers(response.data.items)
                    });
            //}
    },[])

    return (
        <div className={classes.usersWrapper}>

            {
                props.users.map(user => {
                    return (
                        <div className={classes.usersItem} key={user.id}>
                            <div className={classes.users_leftSide}>
                                <div className={classes.usersAvatar}>
                                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="userAvatar"/>
                                </div>
                                <div className={classes.followButton}>
                                    {
                                        user.followed
                                            ? <button onClick={() => props.onUnfollow(user.id)}>Unfollow</button>
                                            : <button onClick={() => props.onFollow(user.id)}>Follow</button>
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
                                    {user.status !==null ? user.status : 'Here will be your status speech: user.status'}
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
}