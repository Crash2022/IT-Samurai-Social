import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {DialogsArray, MessagesArray} from "../../redux/dialogsPage-reducer";
import {Messages} from "./Messages";
import {sendMessageAC} from "../../redux/dialogsPage-reducer";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {compose} from "redux";
import {dialogsDataSelector, messagesDataSelector} from '../../redux/dialogsPage-selectors';

export type MessagesContainerType = MapStateToPropsMessagesType & MapDispatchToPropsMessagesType;

type MapStateToPropsMessagesType = {
    myDialogs: Array<DialogsArray>
    myMessages: Array<MessagesArray>
}
type MapDispatchToPropsMessagesType = {
    sendMessageAC: (newMessageTextForDialog: string) => void
}

const mapStateToProps = (state: RootStateType) => {
    return {
        myDialogs: dialogsDataSelector(state),
        myMessages: messagesDataSelector(state)
    }
}

// первоначально было так
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

const mapDispatchToProps: MapDispatchToPropsMessagesType = {
    sendMessageAC
}

// Пошаговая запись без compose
// let AuthRedirectComponent = withAuthRedirect(Messages);
// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export const MessagesContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Messages);