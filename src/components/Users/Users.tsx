import React, {ChangeEvent, useEffect, useState} from "react";
import styles from "./Users.module.css";
import {getUsersTC, setFilterAC, UsersArray, UsersSearchFilterType} from '../../redux/users-reducer';
import {Paginator} from "../../common/UI/Paginator/Paginator";
import {UserItem} from "./UserItem";
import {Search} from "../../common/components/Search/Search";
import {FormikSearch} from "../../common/components/Search/FormikSearch";
import {OldFormikSearch} from "../../common/components/Search/OldFormikSearch";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {RootStateType} from "../../redux/redux-store";
import {
    selectedCurrentPage, selectedFilter, selectedFollowingInProgress,
    selectedPageSize, selectedTotalUsersCount, selectedUsers
} from "../../redux/users-selectors";

type UsersPropsType = {
    // users: Array<UsersArray>
    // pageSize: number
    // totalUsersCount: number
    // currentPage: number
    // onChangePageHandler: (pageNumber: number) => void
    // followingInProgress: Array<string>
    // deleteFollow: (userId: string) => void
    // postFollow: (userId: string) => void
    // filterValue: string
    // filterIsFriend: null | boolean
    // setSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
    // setSearchSelect: (e: ChangeEvent<HTMLSelectElement>) => void
    // clearInput: () => void
    // findFilteredUserHandler: (filter: UsersSearchFilterType) => void
    // selectStateValue: string
}

export const Users = React.memo(() => {

    // с использованием хуков
    const dispatch = useAppDispatch()

    const users = useAppSelector(selectedUsers)
    const currentPage = useAppSelector(selectedCurrentPage)
    const pageSize = useAppSelector(selectedPageSize)
    const totalUsersCount = useAppSelector(selectedTotalUsersCount)
    const followingInProgress = useAppSelector(selectedFollowingInProgress)
    const filter = useAppSelector(selectedFilter)

    // стейт для текущего значения селекта
    const [selectStateValue, setSelectStateValue] = useState<string>('null')

    const onChangePageHandler = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize, filter))
    }

    const onChangeSearchInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilterAC({term: e.currentTarget.value, friend: filter.friend}));
    }

    const onChangeSearchSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilterAC({term: filter.term,
            friend: e.currentTarget.value === 'null' ? null : e.currentTarget.value === 'true'}));
        setSelectStateValue(e.currentTarget.value);
    }

    const clearInput = () => {
        dispatch(setFilterAC({term: '', friend: null}));
        dispatch(getUsersTC(1, pageSize, {term: '', friend: null}))
    }

    const findFilteredUserHandler = (filter: UsersSearchFilterType) => {
        dispatch(getUsersTC(currentPage, pageSize, {term: filter.term, friend: filter.friend}));
    }

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize, {term: '', friend: null}))
    }, [])

    return (
        <>
            {/*<OldFormikSearch
                findFilteredUserHandler={props.findFilteredUserHandler}
                clearInput={props.clearInput}
                filterValue={props.filterValue}
                filterIsFriend={props.filterIsFriend}
            />*/}
            {/*<FormikSearch
                findFilteredUserHandler={props.findFilteredUserHandler}
                clearInput={props.clearInput}
            />*/}

            <Search
                searchValue={filter.term}
                filterIsFriend={filter.friend}
                setSearchValue={onChangeSearchInputValue}
                setSearchSelect={onChangeSearchSelectValue}
                clearInput={clearInput}
                findFilteredUserHandler={findFilteredUserHandler}
                selectStateValue={selectStateValue}
            />
            {/*<Search
                searchValue={props.filterValue}
                filterIsFriend={props.filterIsFriend}
                setSearchValue={props.setSearchValue}
                setSearchSelect={props.setSearchSelect}
                clearInput={props.clearInput}
                findFilteredUserHandler={props.findFilteredUserHandler}
                selectStateValue={props.selectStateValue}
            />*/}

            <Paginator
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                onChangePageHandler={onChangePageHandler}
                numberOfPagesInBlock={10}
            />
            {/*<Paginator
                pageSize={props.pageSize}
                totalUsersCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onChangePageHandler={props.onChangePageHandler}
                numberOfPagesInBlock={10}
            />*/}

            <div className={styles.usersWrapper}>
                {
                    users.length !== 0
                        ?
                    users.map(u => {
                        return (
                            <UserItem key={u.id}
                                      user={u}
                                      // followingInProgress={props.followingInProgress}
                                      followingInProgress={followingInProgress}
                                      // deleteFollow={props.deleteFollow}
                                      // postFollow={props.postFollow}
                            />
                        )
                    })
                        :
                        <div className={styles.usersNotFound}>Джедаи не найдены!</div>
                }
            </div>
        </>
    );
})