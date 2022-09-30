import {
    ActionsType,
    DialogsPropsType,
    SEND_DIALOG_TEXT,
    UPDATE_NEW_DIALOG_TEXT
} from "./store";
import {v1} from "uuid";

let initialState = {
    dialogsData: [
        {id: v1(), name: "Neil Tunicliff"},
        {id: v1(), name: "Craig Lee Scott"},
        {id: v1(), name: "Ali Clarkson"},
        {id: v1(), name: "Thomas Remvik Aasen"},
        {id: v1(), name: "Damon Watson"}
    ],
    messagesData: [
        {id: v1(), text: "Hello, Neil Tunicliff"},
        {id: v1(), text: "Hello, Craig Lee Scott"},
        {id: v1(), text: "Hello, Ali Clarkson"},
        {id: v1(), text: "Hello, Thomas Remvik Aasen"},
        {id: v1(), text: "Hello, Damon Watson"}
    ],
    newMessageTextForDialog: ''
}

export const dialogsPageReducer = (state: DialogsPropsType = initialState, action: ActionsType) => {

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
        case SEND_DIALOG_TEXT: {
            let newDialogMessageText = state.newMessageTextForDialog;
            return {...state,
                newMessageTextForDialog: '',
                messagesData: [...state.messagesData, {id: v1(), text: newDialogMessageText}]
            };
        }
        case UPDATE_NEW_DIALOG_TEXT: {
            return { ...state, newMessageTextForDialog: action.newDialogMessageText };
        }
        default:
            return state;
    }
}