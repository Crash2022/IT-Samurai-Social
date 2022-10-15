import React from "react";
import {ActionsType, RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {UsersArray, followAC, unfollowAC,
    setCurrentPageAC, setUsersAC, toggleIsLoadingAC,
    toggleFollowInProgressAC, getUsersThunkCreator}
    from "../../redux/users-reducer";
//import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../UI/Preloader";
import classes from "./Users.module.css";
import {getUsers} from "../../api/api";

export type MapStateUsersToPropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Array<string>
}
export type DispatchUsersToPropsType = {
    followAC: (userId: string) => void
    unfollowAC: (userId: string) => void
    setUsersAC: (users: Array<UsersArray>) => void
    setCurrentPageAC: (currentPage: number) => void
    //setUsersTotalUsersCount: (totalUsersCount: number) => void
    toggleIsLoadingAC: (isLoading: boolean) => void
    toggleFollowInProgressAC: (userId: string, followingInProgress: boolean) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => Dispatch<ActionsType>
}
export type UsersContainerType = MapStateUsersToPropsType & DispatchUsersToPropsType

const mapStateToProps = (state: RootStateType): MapStateUsersToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/*const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        onFollow: (userId: string) => {
            dispatch(followAC(userId));
        },
        onUnfollow: (userId: string) => {
            dispatch(unfollowAC(userId));
        },
        onSetUsers: (users: Array<UsersArray>) => {
            dispatch(setUsersAC(users));
        },
        onChangePage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },/!*,
        setUsersTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount));
        }*!/
        onToggleIsLoading: (isLoading: boolean) => {
            dispatch(toggleIsLoadingAC(isLoading))
        }
    }
}*/

const DispatchUsersToProps: DispatchUsersToPropsType = {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    //setUsersTotalUsersCountAC,
    toggleIsLoadingAC,
    toggleFollowInProgressAC,
    getUsersThunkCreator
}

export class UsersAPIClassContainer extends React.Component<UsersContainerType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

        // видео 63, минута 22 (userAPI объект)
        /*this.props.toggleIsLoadingAC(true);

        /!*axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })*!/
            //getUsers(this.props.currentPage, this.props.pageSize)
            getUsers(this.props)
            .then(data => {
                this.props.toggleIsLoadingAC(false);
                this.props.setUsersAC(data.items);
                //this.props.setUsersTotalUsersCount(response.data.totalCount);
                //this.props.setUsersTotalUsersCount(data.totalCount);
            })*/
    }

    onChangePageHandler = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber);
        this.props.toggleIsLoadingAC(true);
        /*axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
                withCredentials: true
            })*/
            //getUsers(pageNumber, this.props.pageSize)
            getUsers(this.props)
            .then(data => {
                this.props.setUsersAC(data.items);
                this.props.toggleIsLoadingAC(false);
            })
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
                                 followAC={this.props.followAC}
                                 unfollowAC={this.props.unfollowAC}
                                 onChangePageHandler={this.onChangePageHandler}
                                 followingInProgress={this.props.followingInProgress}
                                 toggleFollowInProgressAC={this.props.toggleFollowInProgressAC}
                        />
                }
            </>
        )
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Users);
//export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIClassContainer);
export default connect(mapStateToProps, DispatchUsersToProps)(UsersAPIClassContainer);