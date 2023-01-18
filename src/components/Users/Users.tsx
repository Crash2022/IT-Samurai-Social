import React, {ChangeEvent, useEffect, useState} from "react";
import styles from "./Users.module.css";
import {getUsersTC, setFilterAC, UsersArray} from '../../redux/users-reducer';
import {Paginator} from "../../common/UI/Paginator/Paginator";
import {UserItem} from "./UserItem";
import {Search} from "../../common/components/Seacrh/Search";
import {useDebounce} from "../../common/hooks/useDebounce";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {useAppSelector} from '../../common/hooks/useAppSelector';
import {RootStateType} from '../../redux/redux-store';

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

const selectedFilterValue = ((state: RootStateType) => state.usersPage.filter.term)

export const Users = (props: UsersPropsType) => {

    const dispatch = useAppDispatch()
    const filterValue = useAppSelector(selectedFilterValue)
    // const [searchValue, setSearchValue] = useState<string>('')
    const debouncedSearchValue = useDebounce<string>(filterValue, 1000)

    // let filteredUsers = props.users.filter((user: UsersArray) =>
    //     user.name.toLowerCase().includes(searchValue.toLowerCase()))

    const onChangeSearchInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilterAC(e.currentTarget.value));
    }

    const clearInput = () => {
        dispatch(setFilterAC(''));
    }

    // useEffect(() => {
    //     dispatch(getUsersTC(props.currentPage, props.pageSize, debouncedSearchValue))
    // }, [debouncedSearchValue])

    return (
        <>
            <Search
                searchValue={filterValue}
                setSearchValue={onChangeSearchInputValue}
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