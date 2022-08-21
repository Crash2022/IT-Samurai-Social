/*export type AllType = MyPostsItemPropsType & DialogsPropsType*/
/* export type AllType = {
  myposts: Array<UserMessageType>
  mydialogs: Array<DialogsArray>
  mymessages: Array<MessagesArray>
} */

export type MyPostsItemPropsType = {
  user1: Array<UserMessageType>
}

type UserMessageType = {
  avatar: string
  nickname: string
  postMessage: string
  likes: number
  dislikes: number
}

/*export type MessagesType = DialogsPropsType & MessagePropsType*/

export type DialogsPropsType = {
    dialogsData: Array<DialogsArray>
    messagesData: Array<MessagesArray>
}
type DialogsArray = {
  id: number
  name: string
}

/*export type MessagePropsType = {
    messagesData: Array<MessagesArray>
}*/
type MessagesArray = {
  text: string
}

type RootDataStateType = {
    user1: MyPostsItemPropsType
    dialogsPage: DialogsPropsType
}

const dataState:  RootDataStateType = {
    user1: [
        {
            avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
            nickname: "Ivan",
            postMessage: "Hello to all Incubator",
            likes: 15,
            dislikes: 1
        },
        {
            avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
            nickname: "Ivan",
            postMessage: "Hello to all programmers",
            likes: 150,
            dislikes: 10
        },
        {
            avatar: "https://i.pinimg.com/236x/34/57/50/345750705629b0b7d592036167c5832b.jpg",
            nickname: "Petr",
            postMessage: "Hello to all Codewars",
            likes: 10,
            dislikes: 0
        },
        {
            avatar: "https://www.mag-russia.ru/f/product/21_merida_e_bikes_mountainbikes_eone_sixty_my2021_gallery_05.jpg",
            nickname: "Dimych",
            postMessage: "Hello to all FreeCodeCamp",
            likes: 105,
            dislikes: 10
        }
    ],
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Neil Tunicliff"},
            {id: 2, name: "Craig Lee Scott"},
            {id: 3, name: "Ali Clarkson"},
            {id: 4, name: "Thomas Remvik Aasen"},
            {id: 5, name: "Damon Watson"}
        ],
        messagesData: [
            {text: "Hello, Neil Tunicliff"},
            {text: "Hello, Craig Lee Scott"},
            {text: "Hello, Ali Clarkson"},
            {text: "Hello, Thomas Remvik Aasen"},
            {text: "Hello, Damon Watson"}
        ]
    }
}

export default dataState;