import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {DialogsArray, MessagesArray} from "../../redux/dialogsPage-reducer";
import {Messages} from "./Messages";
import {sendMessageAC, updateNewDialogTextAC} from "../../redux/dialogsPage-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type MapStateMessagesToPropsType = {
    //newMessageTextForDialog: string
    myDialogs: Array<DialogsArray>
    myMessages: Array<MessagesArray>
    //isAuth: boolean
}
export type DispatchMessagesToPropsType = {
    sendMessageAC: (newMessageTextForDialog: string) => void
    updateNewDialogTextAC: (textareaMessage: string) => void
}
export type MessagesContainerType = MapStateMessagesToPropsType & DispatchMessagesToPropsType

const mapStateToProps = (state: RootStateType) => {
    return {
        //newMessageTextForDialog: state.dialogsPage.newMessageTextForDialog,
        myDialogs: state.dialogsPage.dialogsData,
        myMessages: state.dialogsPage.messagesData,
        //isAuth: state.auth.isAuth
    }
}
/*const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        sendMessageHandler: () => {
            dispatch(sendMessageAC());
        },
        onChangeMessageText: (textareaMessage: string) => {
            dispatch(updateNewDialogTextAC(textareaMessage));
        }
    }
}*/

const mapDispatchToProps: DispatchMessagesToPropsType = {
    sendMessageAC, updateNewDialogTextAC
}

// Пошаговая запись без compose
// let AuthRedirectComponent = withAuthRedirect(Messages);
// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export const MessagesContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Messages);