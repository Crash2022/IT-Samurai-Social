import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user_avatar.jpg";
import axios from "axios";
import {UsersContainerType} from "./UsersContainer";

export class UsersClassComponent extends React.Component<UsersContainerType> {

    componentDidMount() {

        // if (this.props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.onSetUsers(response.data.items)
                });
        // }
    }

    render() {
        return (
            <div className={classes.usersWrapper}>

                {
                    this.props.users.map(user => {
                        return (
                            <div className={classes.usersItem} key={user.id}>
                                <div className={classes.users_leftSide}>
                                    <div className={classes.usersAvatar}>
                                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="userAvatar"/>
                                    </div>
                                    <div className={classes.followButton}>
                                        {
                                            user.followed
                                                ? <button onClick={() => this.props.onUnfollow(user.id)}>Unfollow</button>
                                                : <button onClick={() => this.props.onFollow(user.id)}>Follow</button>
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
}