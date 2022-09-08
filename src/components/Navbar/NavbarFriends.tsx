import React from "react";
import classes from './Navbar.module.css';
import {SidebarFriendsType} from "../../redux/store";

type NavbarPropsType = {
    friendsList: Array<SidebarFriendsType>
}

export const NavbarFriends = (props: NavbarPropsType) => {
    return (
            <div className={classes.friendsWrapper}>
                {props.friendsList.map(friend => {
                    return (
                        <div className={classes.friendsItem} key={friend.id}>
                            <div className={classes.friendsName}>{friend.name}</div>
                            <div className={classes.friendsAvatar}>
                                <img src={friend.avatar} alt="avatar"/>
                            </div>
                        </div>
                    )
                })}
            </div>
    );
}