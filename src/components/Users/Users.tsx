import React from "react";
import {UsersContainerType} from "./UsersContainer";
import classes from "./Users.module.css";
import {v1} from "uuid";

export const Users = (props: UsersContainerType) => {
    if (props.users.length === 1) {
        props.onSetUsers([
                {
                    id: v1(),
                    fullName: 'Neil Tunicliff',
                    isFollowed: true,
                    status: 'Biketrials is my Life!',
                    location: {
                        country: 'UK',
                        city: 'London'
                    },
                    avatar: 'https://www.tribalzine.com/IMG/jpg/neil_3small.jpg',
                },
                {
                    id: v1(),
                    fullName: 'Thomas Remvik Aasen',
                    isFollowed: false,
                    status: 'Norway BT',
                    location: {
                        country: 'Norway',
                        city: 'Oslo'
                    },
                    avatar: 'https://sun9-27.userapi.com/c10357/u12423350/-6/x_8e806d44.jpg',
                },
                {
                    id: v1(),
                    fullName: 'Damon Watson',
                    isFollowed: true,
                    status: 'London BT Team',
                    location: {
                        country: 'UK',
                        city: 'London'
                    },
                    avatar: 'https://i.ytimg.com/vi/aiDyCZWiDeU/maxresdefault.jpg',
                },
                {
                    id: v1(),
                    fullName: 'Danny Macaskill',
                    isFollowed: false,
                    status: 'Redbull & Specialized Bikes prorider',
                    location: {
                        country: 'Scotland',
                        city: 'Edinburgh'
                    },
                    avatar: 'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/12/10/1331764435698_1/danny-nin-%C3%B6zel-yap%C4%B1m-street-trials-bisikleti.jpg',
                }
            ]
        )
    }

    return (
        <div className={classes.usersWrapper}>
            {
                props.users.map(user => {
                    return (
                        <div className={classes.usersItem} key={user.id}>
                            <div className={classes.users_leftSide}>
                                <div className={classes.usersAvatar}>
                                    <img src={user.avatar} alt="userAvatar"/>
                                </div>
                                <div className={classes.followButton}>
                                    {
                                        user.isFollowed
                                            ? <button onClick={() => props.onUnfollow(user.id)}>Unfollow</button>
                                            : <button onClick={() => props.onFollow(user.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={classes.users_rightSide}>
                                <div className={classes.users_rightSide_info}>
                                    <div className={classes.users_rightSide_name}>
                                        {user.fullName}
                                    </div>
                                    <div className={classes.users_rightSide_location}>
                                        <div>{user.location.country},</div>
                                        <div>{user.location.city}</div>
                                    </div>
                                </div>
                                <div className={classes.users_rightSide_status}>
                                    {user.status}
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    );
}