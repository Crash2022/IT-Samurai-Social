import React, {Dispatch} from "react";
import {ActionsType, RootStateType, UsersArray} from "../../redux/redux-store";
import {connect} from "react-redux";
import {followAC, unfollowAC, setCurrentPageAC, setUsersAC, toggleIsLoadingAC} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../UI/Preloader";
import classes from "./Users.module.css";

export type MapStatePropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}
export type MapDispatchPropsType = {
    onFollow: (userId: string) => void
    onUnfollow: (userId: string) => void
    onSetUsers: (users: Array<UsersArray>) => void
    onChangePage: (currentPage: number) => void
    //setUsersTotalUsersCount: (totalUsersCount: number) => void
    onToggleIsLoading: (isLoading: boolean) => void
}

export type UsersContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
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
        },/*,
        setUsersTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount));
        }*/
        onToggleIsLoading: (isLoading: boolean) => {
            dispatch(toggleIsLoadingAC(isLoading))
        }
    }
}

export class UsersAPIClassContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.onToggleIsLoading(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items);
                //this.props.setUsersTotalUsersCount(response.data.totalCount);
                this.props.onToggleIsLoading(false);
            });
    }

    onChangePageHandler = (pageNumber: number) => {
        this.props.onChangePage(pageNumber);
        this.props.onToggleIsLoading(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items);
                this.props.onToggleIsLoading(false);
            });
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
                                 onFollow={this.props.onFollow}
                                 onUnfollow={this.props.onUnfollow}
                                 onChangePageHandler={this.onChangePageHandler}
                        />
                }


            </>
        )
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Users);
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIClassContainer);