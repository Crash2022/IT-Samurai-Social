import React from "react";
import axios from "axios";
import {UsersContainerType} from "./UsersContainer";
import {Users} from "./Users";

export class UsersAPIClassComponent extends React.Component<UsersContainerType> {

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