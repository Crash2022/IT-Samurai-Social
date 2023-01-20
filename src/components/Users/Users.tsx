import React, {ChangeEvent} from "react";
import styles from "./Users.module.css";
import {UsersArray, UsersSearchFilterType} from '../../redux/users-reducer';
import {Paginator} from "../../common/UI/Paginator/Paginator";
import {UserItem} from "./UserItem";
import {Search} from "../../common/components/Seacrh/Search";
import {FormikSearch} from "../../common/components/Seacrh/FormikSearch";

export type UsersPropsType = {
    users: Array<UsersArray>
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
    selectStateValue: string
}

// const selectedFilterValue = ((state: RootStateType) => state.usersPage.filter.term)

export const Users = React.memo((props: UsersPropsType) => {

    // с использованием хуков
    /*const dispatch = useAppDispatch()
    const filterValue = useAppSelector(selectedFilterValue)
    // const [searchValue, setSearchValue] = useState<string>('')
    const debouncedSearchValue = useDebounce<string>(filterValue, 1000)

    let filteredUsers = props.users.filter((user: UsersArray) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()))

    const onChangeSearchInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilterAC(e.currentTarget.value));
    }

    const clearInput = () => {
        dispatch(setFilterAC(''));
    }

    useEffect(() => {
        dispatch(getUsersTC(props.currentPage, props.pageSize, debouncedSearchValue))
    }, [debouncedSearchValue])*/

    return (
        <>
            <FormikSearch
                findFilteredUserHandler={props.findFilteredUserHandler}
                selectStateValue={props.selectStateValue}
                clearInput={props.clearInput}
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
                        <div className={styles.usersNotFound}>Джедаи не найдены!</div>
                }
            </div>
        </>
    );
})