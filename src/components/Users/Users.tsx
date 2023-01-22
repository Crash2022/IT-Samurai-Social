import React, {ChangeEvent, useEffect, useState} from "react";
import styles from "./Users.module.css";
import {getUsersTC, setFilterAC, UsersArray, UsersSearchFilterType} from '../../redux/users-reducer';
import {Paginator} from "../../common/UI/Paginator/Paginator";
import {UserItem} from "./UserItem";
import {Search} from "../../common/components/Search/Search";
import {SearchWithUseFormik} from "../../common/components/Search/SearchWithUseFormik";
import {SearchWithFormik} from "../../common/components/Search/SearchWithFormik";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {selectedCurrentPage, selectedFilter, selectedFollowingInProgress, selectedPageSize,
    selectedTotalUsersCount, selectedUsers, selectedUsersIsLoading} from "../../redux/users-selectors";
import classes from "./Users.module.css";
import {Preloader} from "../../common/UI/Preloader/Preloader";
// import {useHistory} from 'react-router-dom';
// import queryString from 'querystring';
import { useSearchParams } from 'react-router-dom';

type UsersPropsType = {
    /*users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangePageHandler: (pageNumber: number) => void
    followingInProgress: Array<string>
    deleteFollow: (userId: string) => void
    postFollow: (userId: string) => void
    filterValue: string
    filterIsFriend: null | boolean
    setSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
    setSearchSelect: (e: ChangeEvent<HTMLSelectElement>) => void
    clearInput: () => void
    findFilteredUserHandler: (filter: UsersSearchFilterType) => void
    selectStateValue: string*/
}

// type QueryParamsType = { term?: string, friend?: string, page?: string }

export const Users = React.memo((/*props: UsersPropsType*/) => {

    const dispatch = useAppDispatch()
    // const history = useHistory()

    const isLoading = useAppSelector(selectedUsersIsLoading)
    const users = useAppSelector(selectedUsers)
    const currentPage = useAppSelector(selectedCurrentPage)
    const pageSize = useAppSelector(selectedPageSize)
    const totalUsersCount = useAppSelector(selectedTotalUsersCount)
    const followingInProgress = useAppSelector(selectedFollowingInProgress)
    const filter = useAppSelector(selectedFilter)

    const [searchParams, setSearchParams] = useSearchParams()

    // if (e.currentTarget.value !== '') {
    //     searchParams.set('packName', e.currentTarget.value)
    // } else {
    //     searchParams.delete('packName')
    // }

    // стейт для текущего отображения селекта
    const [selectStateValue, setSelectStateValue] = useState<any>('null')

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
        setSelectStateValue('null');
        dispatch(setFilterAC({term: '', friend: null}));
        dispatch(getUsersTC(1, pageSize, {term: '', friend: null}))
    }

    const findFilteredUserHandler = (filter: UsersSearchFilterType) => {
        dispatch(getUsersTC(currentPage, pageSize, {term: filter.term, friend: filter.friend}));
    }

    useEffect(() => {
        /*const parsed = queryString.parse(history.location.search.substr(1));

        let actualPage = currentPage;
        let actualFilter = filter;

        if(!!parsed.page) actualPage = Number(parsed.page)
        if(!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        if(!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true'}*/

        dispatch(getUsersTC(currentPage, pageSize, {term: '', friend: null}));
    }, [])

    /*useEffect(() => {
        const query: QueryParamsType = {}

        if(!!filter.term) query.term = filter.term
        if(filter.friend !== null) query.friend = String(filter.friend)
        if(currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            // search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])*/

    if(isLoading) {
        return (
            <div className={classes.usersWrapper}>
                <Preloader />
            </div>
        )
    }

    return (
        <>
            {/*<SearchWithUseFormik
                findFilteredUserHandler={findFilteredUserHandler}
                clearInput={clearInput}
                filterValue={filter.term}
                filterIsFriend={filter.friend}
            />*/}
            {/*<SearchWithFormik
                findFilteredUserHandler={findFilteredUserHandler}
                clearInput={clearInput}
                filterValue={filter.term}
                filterIsFriend={filter.friend}
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
            <Paginator
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                onChangePageHandler={onChangePageHandler}
                numberOfPagesInBlock={10}
            />

            {/*для классовой компоненты*/}
            {/*<Search
                searchValue={props.filterValue}
                filterIsFriend={props.filterIsFriend}
                setSearchValue={props.setSearchValue}
                setSearchSelect={props.setSearchSelect}
                clearInput={props.clearInput}
                findFilteredUserHandler={props.findFilteredUserHandler}
                selectStateValue={props.selectStateValue}
            />
            <Paginator
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