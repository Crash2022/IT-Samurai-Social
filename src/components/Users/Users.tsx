import React, {useEffect} from "react";
import {UsersContainerType} from "./UsersContainer";
import classes from "./Users.module.css";
//import {v1} from "uuid";
import axios from "axios";
import userPhoto from '../../assets/images/user_avatar.jpg';

export const Users = (props: UsersContainerType) => {

    //useEffect(()=> {
        const getUsers = () => {
            if (props.users.length === 1) {
                axios
                    .get('https://social-network.samuraijs.com/api/1.0/users')
                    .then(response => {
                        props.onSetUsers(response.data.items)
                    });

                /*props.onSetUsers([
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
                )*/
            }
        }
    //},[props.users])

    return (
        <div className={classes.usersWrapper}>

            <button onClick={getUsers}>Get Users</button>

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