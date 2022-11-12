import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {deleteLoginTC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";

export type HeaderContainerType = MapStateToPropsHeaderType & MapDispatchToPropsHeaderType;

type MapStateToPropsHeaderType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchToPropsHeaderType = {
    deleteLogin: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsHeaderType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
const mapDispatchToProps: MapDispatchToPropsHeaderType = {
    deleteLogin: deleteLoginTC
}

export class HeaderContainerConnect extends React.Component<HeaderContainerType> {

    render() {
        return (
            <Header {...this.props}/>
        )
    };
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerConnect);