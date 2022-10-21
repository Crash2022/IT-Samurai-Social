import {v1} from "uuid";

type ActionsType = SendMessageACType | UpdateMessageACType;

export type DialogsPropsType = {
    dialogsData: Array<DialogsArray>
    messagesData: Array<MessagesArray>
    newMessageTextForDialog: string
}
export type DialogsArray = {
    id: string
    name: string
}
export type MessagesArray = {
    id: string
    text: string
}

let initialState = {
    dialogsData: [
        {id: v1(), name: 'Neil Tunicliff'},
        {id: v1(), name: 'Craig Lee Scott'},
        {id: v1(), name: 'Ali Clarkson'},
        {id: v1(), name: 'Thomas Remvik Aasen'},
        {id: v1(), name: 'Damon Watson'}
    ] as Array<DialogsArray>,
    messagesData: [
        {id: v1(), text: 'Hello, Neil Tunicliff'},
        {id: v1(), text: 'Hello, Craig Lee Scott'},
        {id: v1(), text: 'Hello, Ali Clarkson'},
        {id: v1(), text: 'Hello, Thomas Remvik Aasen'},
        {id: v1(), text: 'Hello, Damon Watson'}
    ] as Array<MessagesArray>,
    newMessageTextForDialog: ''
}

export const dialogsPageReducer = (state: DialogsPropsType = initialState, action: ActionsType): DialogsPropsType => {

    /*if (action.type === SEND_DIALOG_TEXT) {
        let newDialogMessageText = state.newMessageTextForDialog;
        state.newMessageTextForDialog = '';
        state.messagesData.push({id: v1(), text: newDialogMessageText});
        /!*props._callSubscriber();*!/
    } else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
        state.newMessageTextForDialog = action.newDialogMessageText;
        /!*props._callSubscriber();*!/
    }*/

    switch(action.type) {
        case 'SEND_DIALOG_TEXT': {
            let newDialogMessageText = state.newMessageTextForDialog;
            return {...state,
                newMessageTextForDialog: '',
                messagesData: [...state.messagesData, {id: v1(), text: newDialogMessageText}]
            };
        }
        case 'UPDATE_NEW_DIALOG_TEXT': {
            return { ...state, newMessageTextForDialog: action.newDialogMessageText };
        }
        default:
            return state;
    }
}

export type SendMessageACType = ReturnType<typeof sendMessageAC>
export type UpdateMessageACType = ReturnType<typeof updateNewDialogTextAC>

export const sendMessageAC = () => ({
    type: 'SEND_DIALOG_TEXT'
} as const)
export const updateNewDialogTextAC = (textareaMessage: string) => ({
    type: 'UPDATE_NEW_DIALOG_TEXT',
    newDialogMessageText: textareaMessage
} as const)