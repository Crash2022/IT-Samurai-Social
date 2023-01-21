import React, {useEffect} from "react";
import styles from './Navbar.module.css';
import userAvatar from "../../common/assets/images/avatars/user_avatar.jpg";
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {selectedCurrentPage, selectedPageSize} from "../../redux/users-selectors";
import {NavLink} from "react-router-dom";
import {getUserFriendsTC} from '../../redux/sidebar-reducer';
import {selectedNavbarUsers} from '../../redux/sidebar-selectors';

export const NavbarFriends = () => {

    const dispatch = useAppDispatch()

    const navbarUsers = useAppSelector(selectedNavbarUsers)
    const currentPage = useAppSelector(selectedCurrentPage)
    const pageSize = useAppSelector(selectedPageSize)

    // const userFriends = users.filter (u => u.followed ? u : '')

    useEffect(() => {
        dispatch(getUserFriendsTC(currentPage, pageSize, true))
    }, [])

    return (
        <div className={styles.friendsWrapper}>
            {navbarUsers.map(friend => {
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