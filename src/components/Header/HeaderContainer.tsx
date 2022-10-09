import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";
import {getAuth} from "../../api/api";

export type HeaderContainerPropsType = MapStateHeaderToPropsType & DispatchHeaderToPropsType;

export type MapStateHeaderToPropsType = {
    isAuth: boolean
    login: null | string
}

export type DispatchHeaderToPropsType = {
    setAuthUserDataAC: (userId: string, email: null, login: null) => void
}

const mapStateToProps = (state: RootStateType): MapStateHeaderToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const DispatchHeaderToProps: DispatchHeaderToPropsType = {
    setAuthUserDataAC
}

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        /*axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })*/
            getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserDataAC(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    };
}

export default connect(mapStateToProps, DispatchHeaderToProps)(HeaderContainer);