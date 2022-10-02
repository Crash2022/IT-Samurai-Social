import React, {Dispatch} from "react";
import { DialogsArray, MessagesArray }
    from '../../redux/store';
import {connect} from "react-redux";
import {ActionsType, RootStateType} from "../../redux/redux-store";
import {Messages} from "./Messages";
import {sendMessageAC, updateNewDialogTextAC} from "../../redux/dialogsPage-reducer";

type MapStatePropsType = {
    newMessageTextForDialog: string
    myDialogs: Array<DialogsArray>
    myMessages: Array<MessagesArray>
}
type MapDispatchPropsType = {
    sendMessageHandler: () => void
    onChangeMessageText: (textareaMessage: string) => void
}
//type MessagesType = {
    //myDialogs: Array<DialogsArray>
    //myMessages: Array<MessagesArray>
    //newMessageTextForDialog: string
//}

export type MessagesContainerType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        newMessageTextForDialog: state.dialogsPage.newMessageTextForDialog,
        myDialogs: state.dialogsPage.dialogsData,
        myMessages: state.dialogsPage.messagesData
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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);