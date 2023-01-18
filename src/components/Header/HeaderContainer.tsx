import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {deleteLoginTC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";
import {isAuthSelector, loginSelector} from '../../redux/auth-selectors';

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
        isAuth: isAuthSelector(state),
        login: loginSelector(state)
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