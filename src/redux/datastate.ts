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
            {text: "Hello, Neil Tunicliff"},
            {text: "Hello, Craig Lee Scott"},
            {text: "Hello, Ali Clarkson"},
            {text: "Hello, Thomas Remvik Aasen"},
            {text: "Hello, Damon Watson"}
        ]
    },
    newPostText: 'add post here...'
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

    dispatch(action: ActionType | ActionChangeType) {
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
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (textareaValue: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: textareaValue
    }
}

/*let renderEntireTree = (datastate: RootDataStateType) => {
    // console.log('datastate changed');
}*/

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
}
export type DialogsArray = {
    id: string
    name: string
}

export type MessagesArray = {
    text: string
}

export const ADD_POST = 'ADD-POST'

export type ActionType = {
    type: typeof ADD_POST
}
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ActionChangeType = ({
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
})

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
