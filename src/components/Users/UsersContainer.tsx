import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {UsersArray, getUsersTC, deleteFollowTC, postFollowTC}
    from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../../common/UI/Preloader/Preloader";
import classes from "./Users.module.css";
import {compose} from "redux";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
//import {getUsers} from "../../redux/users-selectors";
//import {getUsers} from "../../api/api";

export type UsersContainerType = MapStateToPropsUsersType & MapDispatchToPropsUsersType;

type MapStateToPropsUsersType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Array<string>
    isAuth: boolean
}
type MapDispatchToPropsUsersType = {
    getUsers: (currentPage: number, pageSize: number) => void
    deleteFollow: (userId: string) => void
    postFollow: (userId: string) => void
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
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps: MapDispatchToPropsUsersType = {
    //followAC, // больше не нужны тут, берутся из Thunk
    //unfollowAC, // больше не нужны тут, берутся из Thunk
    //setUsersAC, // больше не нужны тут, берутся из Thunk
    //toggleIsLoadingAC, // больше не нужны тут, берутся из Thunk
    //toggleFollowInProgressAC, // больше не нужны тут, берутся из Thunk

    getUsers: getUsersTC, // можно сократить до getUsers
    deleteFollow: deleteFollowTC,
    postFollow: postFollowTC
}

export class UsersAPIClassContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangePageHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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