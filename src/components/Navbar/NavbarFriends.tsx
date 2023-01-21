import React, {useEffect} from "react";
import styles from './Navbar.module.css';
import userAvatar from "../../common/assets/images/avatars/user_avatar.jpg";
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {getUsersTC} from "../../redux/users-reducer";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {selectedCurrentPage, selectedPageSize, selectedUsers} from "../../redux/users-selectors";
import {NavLink} from "react-router-dom";

export const NavbarFriends = () => {

    const dispatch = useAppDispatch()

    const users = useAppSelector(selectedUsers)
    const currentPage = useAppSelector(selectedCurrentPage)
    const pageSize = useAppSelector(selectedPageSize)

    const userFriends = users.filter (u => u.followed ? u : '')

    // useEffect(() => {
    //     dispatch(getUsersTC(currentPage, pageSize, {term: '', friend: true}, false))
    // }, [])

    return (
        <div className={styles.friendsWrapper}>
            {userFriends.map(friend => {
                return (
                    <div className={styles.friendsItem} key={friend.id}>
                        <div className={styles.friendsName}>{friend.name}</div>
                        <NavLink to={'/profile/' + friend.id}>
                            <div className={styles.friendsAvatar}>
                                <img src={friend.photos.small ? friend.photos.small : userAvatar} alt="avatar"/>
                            </div>
                        </NavLink>
                    </div>
                )
            })}
        </div>
    )
}