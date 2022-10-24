import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {deleteLoginThunkCreator, getAuthThunkCreator} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";

export type HeaderContainerType = MapStateToPropsHeaderType & MapDispatchToPropsHeaderType;

type MapStateToPropsHeaderType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchToPropsHeaderType = {
    //setAuthUserDataAC: (userId: string, email: null, login: null) => void
    //getAuth: () => void
    deleteLogin: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsHeaderType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const mapDispatchToProps: MapDispatchToPropsHeaderType = {
    //setAuthUserDataAC,
    //getAuth: getAuthThunkCreator,
    deleteLogin: deleteLoginThunkCreator
}

export class HeaderContainerConnect extends React.Component<HeaderContainerType> {

    render() {
        return (
            <Header {...this.props}/>
        )
    };
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerConnect);