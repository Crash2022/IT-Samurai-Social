import React, {ChangeEvent} from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {UsersArray, getUsersTC, deleteFollowTC, postFollowTC, setFilterAC}
    from '../../redux/users-reducer';
import {Users} from "./Users";
import {Preloader} from "../../common/UI/Preloader/Preloader";
import classes from "./Users.module.css";
import {compose} from "redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";

export type UsersContainerType = MapStateToPropsUsersType & MapDispatchToPropsUsersType;

type MapStateToPropsUsersType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Array<string>
    isAuth: boolean
    filter: string
}
type MapDispatchToPropsUsersType = {
    getUsers: (currentPage: number, pageSize: number, term: string) => void
    deleteFollow: (userId: string) => void
    postFollow: (userId: string) => void
    setUserFilter: (term: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsUsersType => {
    return {
        users: state.usersPage.users,
        // users: getUsers(state),
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth,
        filter: state.usersPage.filter.term
    }
}

const mapDispatchToProps: MapDispatchToPropsUsersType = {
    //followAC, // больше не нужны тут, берутся из Thunk
    //unfollowAC, // больше не нужны тут, берутся из Thunk
    //setUsersAC, // больше не нужны тут, берутся из Thunk
    //toggleIsLoadingAC, // больше не нужны тут, берутся из Thunk
    //toggleFollowInProgressAC, // больше не нужны тут, берутся из Thunk

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
        this.props.getUsers(pageNumber, this.props.pageSize, '');
    }

    onChangeSearchInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        // dispatch(setFilterAC(e.currentTarget.value));
        this.props.setUserFilter(e.currentTarget.value);
    }

    clearInput = () => {
        // dispatch(setFilterAC(''));
        this.props.setUserFilter('');
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
                                 filterValue={this.props.filter}
                                 setSearchValue={this.onChangeSearchInputValue}
                                 clearInput={this.clearInput}
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