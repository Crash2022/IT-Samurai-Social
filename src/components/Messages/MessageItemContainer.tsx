import React, {Dispatch} from "react";
import {ActionsType, MessagesArray,
    sendMessageAC, updateNewDialogTextAC}
    from '../../redux/store';
import {MessageItem} from "./MessageItem";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    newMessageTextForDialog: string
}
type MapDispatchPropsType = {
    sendMessageHandler: () => void
    onChangeMessageText: (textareaMessage: string) => void
}
type MessagesType = {
    myMessages: Array<MessagesArray>
    newMessageTextForDialog: string
}

export type MessageItemType = MapStatePropsType & MapDispatchPropsType & MessagesType

const mapStateToProps = (state: RootStateType) => {
    return {
        newMessageTextForDialog: state.dialogsPage.newMessageTextForDialog
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        sendMessageHandler: () => {
            dispatch(sendMessageAC());
        },
        onChangeMessageText: (textareaMessage: string) => {
            dispatch(updateNewDialogTextAC(textareaMessage));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);