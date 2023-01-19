import React, {ChangeEvent} from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {UsersArray, getUsersTC, deleteFollowTC, postFollowTC, setFilterAC, UsersSearchFilterType}
    from '../../redux/users-reducer';
import {Users} from "./Users";
import {Preloader} from "../../common/UI/Preloader/Preloader";
import classes from "./Users.module.css";
import {compose} from "redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {
    currentPageSelector,
    filterUserSelector,
    followingInProgressSelector,
    getUsersSelector,
    isLoadingSelector,
    pageSizeSelector,
    totalUsersCountSelector
} from '../../redux/users-selectors';
import {isAuthSelector} from '../../redux/auth-selectors';

export type UsersContainerType = MapStateToPropsUsersType & MapDispatchToPropsUsersType;

type MapStateToPropsUsersType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Array<string>
    isAuth: boolean
    filter: UsersSearchFilterType
    // filterName: string
    // filterIsFriend: null | boolean
}
type MapDispatchToPropsUsersType = {
    getUsers: (currentPage: number, pageSize: number, filter: UsersSearchFilterType) => void
    deleteFollow: (userId: string) => void
    postFollow: (userId: string) => void
    setUserFilter: (filter: UsersSearchFilterType) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsUsersType => {
    return {
        users: getUsersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isLoading: isLoadingSelector(state),
        followingInProgress: followingInProgressSelector(state),
        isAuth: isAuthSelector(state),
        filter: filterUserSelector(state),
        // filterName: filterUserNameSelector(state),
        // filterIsFriend: filterIsUserFriendSelector(state)
    }
}

const mapDispatchToProps: MapDispatchToPropsUsersType = {
    getUsers: getUsersTC,
    deleteFollow: deleteFollowTC,
    postFollow: postFollowTC,
    setUserFilter: setFilterAC
}

export class UsersAPIClassContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props;
        this.props.getUsers(currentPage, pageSize, filter);
    }

    onChangePageHandler = (pageNumber: number) => {
        const {pageSize, filter} = this.props;
        this.props.getUsers(pageNumber, pageSize, filter);
    }

    onChangeSearchInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.setUserFilter({term: e.currentTarget.value, friend: this.props.filter.friend});
    }
    onChangeSearchSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
        this.props.setUserFilter({term: this.props.filter.term,
            friend: e.currentTarget.value === 'null' ? null : e.currentTarget.value === 'true' ? true : false});
    }

    clearInput = () => {
        this.props.setUserFilter({term: '', friend: null});
        this.props.getUsers(1, this.props.pageSize, {term: '', friend: null});
    }

    findFilteredUserHandler = (filter: UsersSearchFilterType) => {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize, {term: filter.term, friend: filter.friend});
    }

    render() {

        return (
            <>
                {
                    this.props.isLoading
                        ? <div className={classes.usersWrapper}>
                            <Preloader />
                        </div>
                        : <Users users={this.props.users}
                                 pageSize={this.props.pageSize}
                                 totalUsersCount={this.props.totalUsersCount}
                                 currentPage={this.props.currentPage}
                                 onChangePageHandler={this.onChangePageHandler}
                                 followingInProgress={this.props.followingInProgress}
                                 deleteFollow={this.props.deleteFollow}
                                 postFollow={this.props.postFollow}
                                 filterValue={this.props.filter.term}
                                 filterIsFriend={this.props.filter.friend}
                                 setSearchValue={this.onChangeSearchInputValue}
                                 setSearchSelect={this.onChangeSearchSelectValue}
                                 clearInput={this.clearInput}
                                 findFilteredUserHandler={this.findFilteredUserHandler}
                        />
                }
            </>
        )
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Users);
//export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIClassContainer);

// Пошаговая запись без compose
//export default connect(mapStateToProps, DispatchUsersToProps)(UsersAPIClassContainer);

export const UsersContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(UsersAPIClassContainer);