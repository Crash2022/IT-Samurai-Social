import React, {Dispatch} from "react";
import {ActionsType, RootStateType, UsersArray} from "../../redux/redux-store";
import {connect} from "react-redux";
import {followAC, unfollowAC, setCurrentPageAC, setUsersAC} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";

export type MapStatePropsType = {
    users: Array<UsersArray>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type MapDispatchPropsType = {
    onFollow: (userId: string) => void
    onUnfollow: (userId: string) => void
    onSetUsers: (users: Array<UsersArray>) => void
    onChangePage: (currentPage: number) => void
    //setUsersTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }/*,
        setUsersTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount));
        }*/
    }
}

export class UsersAPIClassContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items);
                //this.props.setUsersTotalUsersCount(response.data.totalCount);
            });
    }

    onChangePageHandler = (pageNumber: number) => {
        this.props.onChangePage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items)
            });
    }

    render() {
        return (
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onFollow={this.props.onFollow}
                   onUnfollow={this.props.onUnfollow}
                   onChangePageHandler={this.onChangePageHandler}
            />
        )
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Users);
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIClassContainer);