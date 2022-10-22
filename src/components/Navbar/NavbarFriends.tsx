import React from "react";
import styles from './Navbar.module.css';
import {SidebarFriendsType} from "../../redux/sidebar-reducer";

type NavbarFriendsPropsType = {
    friendsData: Array<SidebarFriendsType>
}

export const NavbarFriends = (props: NavbarFriendsPropsType) => {
    return (
            <div className={styles.friendsWrapper}>
                {props.friendsData.map(friend => {
                    return (
                        <div className={styles.friendsItem} key={friend.id}>
                            <div className={styles.friendsName}>{friend.name}</div>
                            <div className={styles.friendsAvatar}>
                                <img src={friend.avatar} alt="avatar"/>
                            </div>
                        </div>
                    )
                })}
            </div>
    );
}