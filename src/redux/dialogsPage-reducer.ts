import {v1} from "uuid";

type ActionsType = SendMessageACType;

export type DialogsPropsType = {
    dialogsData: Array<DialogsArray>
    messagesData: Array<MessagesArray>
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
    ] as Array<MessagesArray>
}

export const dialogsPageReducer = (state: DialogsPropsType = initialState, action: ActionsType): DialogsPropsType => {

    switch(action.type) {
        case 'SEND_DIALOG_TEXT': {
            let newDialogMessageText = action.newMessageTextForDialog;
            return {...state,
                messagesData: [...state.messagesData, {id: v1(), text: newDialogMessageText}]
            };
        }
        default:
            return state;
    }
}

export type SendMessageACType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageTextForDialog: string) => ({
    type: 'SEND_DIALOG_TEXT', newMessageTextForDialog
} as const)