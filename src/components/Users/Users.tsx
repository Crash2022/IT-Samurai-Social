import React, {ChangeEvent, useEffect, useState} from "react";
import styles from "./Users.module.css";
import {getUsersTC, UsersArray} from "../../redux/users-reducer";
import {Paginator} from "../../common/UI/Paginator/Paginator";
import {UserItem} from "./UserItem";
import {Search} from "../../common/components/Seacrh/Search";
import {useDebounce} from "../../common/hooks/useDebounce";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";

export type UsersPropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePageHandler: (pageNumber: number) => void
    followingInProgress: Array<string>
    deleteFollow: (userId: string) => void
    postFollow: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {

    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState<string>('')
    const debouncedSearchValue = useDebounce<string>(searchValue, 1000)

    const searchInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
        // return props.users.filter((user: UsersArray) => user.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    const clearInput = () => {
        setSearchValue('');
    }

    // useEffect(() => {
    //     // dispatch(getUsersTC(props.currentPage, props.pageSize))
    //     props.users.filter((user: UsersArray) => user.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()))
    // }, [props.users])

    return (
        <>
            <Search
                searchValue={searchValue}
                setSearchValue={searchInputValue}
                clearInput={clearInput}
            />
            <Paginator
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onChangePageHandler={props.onChangePageHandler}
                numberOfPagesInBlock={10}
            />

            <div className={styles.usersWrapper}>
                {
                    props.users.length !== 0
                        ?
                    props.users.map(u => {
                        return (
                            <UserItem key={u.id}
                                      user={u}
                                      followingInProgress={props.followingInProgress}
                                      deleteFollow={props.deleteFollow}
                                      postFollow={props.postFollow}
                            />
                        )
                    })
                        :
                        <div className={styles.usersNotFound}>Джедаи не найдены</div>
                }
            </div>
        </>
    );
}