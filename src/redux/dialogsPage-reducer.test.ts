import {DialogsArray, DialogsPropsType, MessagesArray,
    sendMessageAC, dialogsPageReducer} from "./dialogsPage-reducer";

let startState: DialogsPropsType;

beforeEach(() => {
    startState = {
        dialogsData: [
            {id: '1', name: 'Neil Tunicliff'},
            {id: '2', name: 'Craig Lee Scott'},
            {id: '3', name: 'Ali Clarkson'},
            {id: '4', name: 'Thomas Remvik Aasen'},
            {id: '5', name: 'Damon Watson'}
        ] as Array<DialogsArray>,
        messagesData: [
            {id: '6', text: 'Hello, Neil Tunicliff'},
            {id: '7', text: 'Hello, Craig Lee Scott'},
            {id: '8', text: 'Hello, Ali Clarkson'},
            {id: '9', text: 'Hello, Thomas Remvik Aasen'},
            {id: '10', text: 'Hello, Damon Watson'}
        ] as Array<MessagesArray>
    }
})

test('correct message should be send', () => {
    const newDialogMessage = 'Hello, this is test message';
    const endState = dialogsPageReducer(startState, sendMessageAC(newDialogMessage));

    expect(endState.messagesData.length).toBe(6);
    expect(endState.messagesData[5].text).toBe('Hello, this is test message');
})