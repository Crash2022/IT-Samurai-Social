import React from "react";
import classes from './Navbar.module.css';
import {SidebarFriendsType} from "../../redux/store";

type NavbarFriendsPropsType = {
    friendsData: Array<SidebarFriendsType>
}

export const NavbarFriends = (props: NavbarFriendsPropsType) => {
    return (
            <div className={classes.friendsWrapper}>
                {props.friendsData.map(friend => {
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