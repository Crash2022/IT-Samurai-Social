import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

type MapStateToPropsAuthRedirectType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: RootStateType): MapStateToPropsAuthRedirectType => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = <T, >(Component: ComponentType<T>) => {

    const AuthRedirectComponent = (props: MapStateToPropsAuthRedirectType) => {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T} />
    }
    return connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
}