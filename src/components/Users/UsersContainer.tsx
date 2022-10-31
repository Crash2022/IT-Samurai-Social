import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {UsersArray, getUsersThunkCreator, deleteFollowThunkCreator, postFollowThunkCreator}
    from "../../redux/users-reducer";
//import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../UI/Preloader/Preloader";
import classes from "./Users.module.css";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
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
    //followAC: (userId: string) => void
    //unfollowAC: (userId: string) => void
    //setUsersAC: (users: Array<UsersArray>) => void
    //setCurrentPageAC: (currentPage: number) => void
    //setUsersTotalUsersCount: (totalUsersCount: number) => void
    //toggleIsLoadingAC: (isLoading: boolean) => void
    //toggleFollowInProgressAC: (userId: string, followingInProgress: boolean) => void
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

const mapDispatchToProps: MapDispatchToPropsUsersType = {
    //followAC, // больше не нужны тут, берутся из Thunk
    //unfollowAC, // больше не нужны тут, берутся из Thunk
    //setUsersAC, // больше не нужны тут, берутся из Thunk
    //setCurrentPageAC,
    //setUsersTotalUsersCountAC, // !!!нужно для вывода всех страниц с юзерами!!!
    //toggleIsLoadingAC, // больше не нужны тут, берутся из Thunk
    //toggleFollowInProgressAC, // больше не нужны тут, берутся из Thunk

    getUsers: getUsersThunkCreator, // можно сократить до getUsers
    deleteFollow: deleteFollowThunkCreator,
    postFollow: postFollowThunkCreator
}

export class UsersAPIClassContainer extends React.Component<UsersContainerType> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        /*this.props.toggleIsLoadingAC(true);

        /!*axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })*!/
            //getUsers(this.props.currentPage, this.props.pageSize)
            usersAPI.getUsers(this.props)
            .then(data => {
                this.props.toggleIsLoadingAC(false);
                this.props.setUsersAC(data.items);
                //this.props.setUsersTotalUsersCount(response.data.totalCount);
                //this.props.setUsersTotalUsersCount(data.totalCount);
            })*/
    }

    onChangePageHandler = (pageNumber: number) => {
       /* this.props.setCurrentPageAC(pageNumber);
        this.props.toggleIsLoadingAC(true);*/

        /*axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
                withCredentials: true
            })*/
            //getUsers(pageNumber, this.props.pageSize)

            /*usersAPI.getUsers(this.props)
            .then(data => {
                this.props.setUsersAC(data.items);
                this.props.toggleIsLoadingAC(false);
            })*/

        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        console.log('users')

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
                                 //followAC={this.props.followAC}
                                 //unfollowAC={this.props.unfollowAC}
                                 onChangePageHandler={this.onChangePageHandler}
                                 followingInProgress={this.props.followingInProgress}
                                 //toggleFollowInProgressAC={this.props.toggleFollowInProgressAC}
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