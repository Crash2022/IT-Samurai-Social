import {v1} from "uuid";

const state: RootDataStateType = {
    myPostPage: {
        user1: [
            {
                id: v1(),
                avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
                nickname: "Dimych",
                postMessage: "Hello to all Incubator",
                likes: 15,
                dislikes: 1
            },
            {
                id: v1(),
                avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
                nickname: "Dimych",
                postMessage: "Hello to all programmers",
                likes: 150,
                dislikes: 10
            },
            {
                id: v1(),
                avatar: "https://i.pinimg.com/236x/34/57/50/345750705629b0b7d592036167c5832b.jpg",
                nickname: "Petr",
                postMessage: "Hello to all Codewars",
                likes: 10,
                dislikes: 0
            },
            {
                id: v1(),
                avatar: "https://www.mag-russia.ru/f/product/21_merida_e_bikes_mountainbikes_eone_sixty_my2021_gallery_05.jpg",
                nickname: "Ivan",
                postMessage: "Hello to all FreeCodeCamp",
                likes: 105,
                dislikes: 10
            }
        ]
    },
    dialogsPage: {
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
    },
    newPostText: ''
}

export const store = {
    _state: state,
    _callSubscriber() {
        return this._state;
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    /*addPost() {
        let newPost = {
            id: v1(),
            avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
            nickname: "Dimych",
            postMessage: this._state.newPostText,
            likes: 0,
            dislikes: 0
        };
        this._state.myPostPage.user1.push(newPost);
        this._state.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.newPostText = newText;
        this._callSubscriber();
    },*/

    dispatch(action: ActionsType) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: v1(),
                avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
                nickname: "Dimych",
                postMessage: this._state.newPostText,
                likes: 0,
                dislikes: 0
            };
            this._state.myPostPage.user1.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === SEND_DIALOG_TEXT) {
            let newDialogMessageText = this._state.dialogsPage.newMessageTextForDialog;
            this._state.dialogsPage.newMessageTextForDialog = '';
            this._state.dialogsPage.messagesData.push({id: v1(), text: newDialogMessageText});
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
            this._state.dialogsPage.newMessageTextForDialog = action.newDialogMessageText;
            this._callSubscriber();
        }
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
} as const)
export const updateNewPostActionCreator = (textareaValue: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: textareaValue
} as const )

export const sendMessageActionCreator = () => ({
    type: SEND_DIALOG_TEXT
} as const)
export const updateNewDialogTextActionCreator = (textareaMessage: string) => ({
    type: UPDATE_NEW_DIALOG_TEXT,
    newDialogMessageText: textareaMessage
} as const)

export type RootDataStateType = {
    myPostPage: MyPostsItemPropsType
    dialogsPage: DialogsPropsType
    newPostText: string
}

export type MyPostsItemPropsType = {
    user1: Array<UserMessageType>
}

export type UserMessageType = {
    id: string
    avatar: string
    nickname: string
    postMessage: string
    likes: number
    dislikes: number
}

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

export const ADD_POST = 'ADD-POST'
export type AddPostACType = ReturnType<typeof addPostActionCreator>
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export type ActionChangeType = ReturnType<typeof updateNewPostActionCreator>

export const SEND_DIALOG_TEXT = 'SEND_DIALOG_TEXT'
export type ActionSendMessageType = ReturnType<typeof sendMessageActionCreator>
export const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT'
export type ActionUpdateMessageType = ReturnType<typeof updateNewDialogTextActionCreator>

export type ActionsType = AddPostACType | ActionChangeType | ActionSendMessageType | ActionUpdateMessageType

// const datastate: RootDataStateType = {
//     myPostPage: {
//         user1: [
//             {
//                 id: v1(),
//                 avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
//                 nickname: "Dimych",
//                 postMessage: "Hello to all Incubator",
//                 likes: 15,
//                 dislikes: 1
//             },
//             {
//                 id: v1(),
//                 avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
//                 nickname: "Dimych",
//                 postMessage: "Hello to all programmers",
//                 likes: 150,
//                 dislikes: 10
//             },
//             {
//                 id: v1(),
//                 avatar: "https://i.pinimg.com/236x/34/57/50/345750705629b0b7d592036167c5832b.jpg",
//                 nickname: "Petr",
//                 postMessage: "Hello to all Codewars",
//                 likes: 10,
//                 dislikes: 0
//             },
//             {
//                 id: v1(),
//                 avatar: "https://www.mag-russia.ru/f/product/21_merida_e_bikes_mountainbikes_eone_sixty_my2021_gallery_05.jpg",
//                 nickname: "Ivan",
//                 postMessage: "Hello to all FreeCodeCamp",
//                 likes: 105,
//                 dislikes: 10
//             }
//         ]
//     },
//     dialogsPage: {
//         dialogsData: [
//             {id: v1(), name: "Neil Tunicliff"},
//             {id: v1(), name: "Craig Lee Scott"},
//             {id: v1(), name: "Ali Clarkson"},
//             {id: v1(), name: "Thomas Remvik Aasen"},
//             {id: v1(), name: "Damon Watson"}
//         ],
//         messagesData: [
//             {text: "Hello, Neil Tunicliff"},
//             {text: "Hello, Craig Lee Scott"},
//             {text: "Hello, Ali Clarkson"},
//             {text: "Hello, Thomas Remvik Aasen"},
//             {text: "Hello, Damon Watson"}
//         ]
//     },
//     newPostText: 'add post here...'
// }

/*export const addPost = () => {
    let newPost = {
        id: v1(),
        avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
        nickname: "Dimych",
        postMessage: datastate.newPostText,
        likes: 0,
        dislikes: 0
    };
    datastate.myPostPage.user1.unshift(newPost);
    datastate.newPostText = '';
    renderEntireTree(datastate);
}*/

/*export const updateNewPostText = (newText: string) => {
    datastate.newPostText = newText;
    renderEntireTree(datastate);
}*/

/*export const subscribe = (observer: any) => {
    renderEntireTree = observer;
}*/

//export default datastate;
//window.store = store;

export default store;