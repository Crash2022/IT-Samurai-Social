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
import {
    currentPageSelector, filterUserNameSelector, followingInProgressSelector,
    getUsersSelector, isLoadingSelector,
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
        users: getUsersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isLoading: isLoadingSelector(state),
        followingInProgress: followingInProgressSelector(state),
        isAuth: isAuthSelector(state),
        filter: filterUserNameSelector(state)
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
        this.props.setUserFilter(e.currentTarget.value);
    }

    clearInput = () => {
        this.props.setUserFilter('');
        this.props.getUsers(1, this.props.pageSize, '');
    }

    findFilteredUserHandler = (filter: string) => {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize, filter);
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