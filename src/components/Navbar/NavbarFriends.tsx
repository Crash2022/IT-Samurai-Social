import React from "react";
import styles from './Navbar.module.css';
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {UsersArray} from "../../redux/users-reducer";
import userAvatar from "../../common/assets/images/avatars/user_avatar.jpg";

type NavbarFriendsPropsType = {
    // friendsData: Array<SidebarFriendsType>
    followedUsers: Array<UsersArray>
}

export const NavbarFriends: React.FC<NavbarFriendsPropsType> = ({followedUsers}) => {

    const users = useSelector<RootStateType, Array<UsersArray>>(state => state.usersPage.users)
    const filteredFollowedUsers = users.filter(u => u.followed ? u : '')

    return (
            <div className={styles.friendsWrapper}>
                {filteredFollowedUsers.map(friend => {
                    return (
                        <div className={styles.friendsItem} key={friend.id}>
                            <div className={styles.friendsName}>{friend.name}</div>
                            <div className={styles.friendsAvatar}>
                                <img src={friend.photos.small ? friend.photos.small : userAvatar} alt="avatar"/>
                            </div>
                        </div>
                    )
                })}
                {/*{props.friendsData.map(friend => {
                    return (
                        <div className={styles.friendsItem} key={friend.id}>
                            <div className={styles.friendsName}>{friend.name}</div>
                            <div className={styles.friendsAvatar}>
                                <img src={friend.avatar} alt="avatar"/>
                            </div>
                        </div>
                    )
                })}*/}
            </div>
    );
}