import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/UI/Preloader/Preloader";
import classes from "./Users.module.css";
import {selectedUsersIsLoading} from "../../redux/users-selectors";
import {useAppSelector} from "../../common/hooks/useAppSelector";

export const UsersPage = () => {

    const isLoading = useAppSelector(selectedUsersIsLoading)

    return (
        <>
            {
                isLoading
                    ? <div className={classes.usersWrapper}>
                        <Preloader />
                    </div>
                    : <Users />
            }
        </>
    )
}
