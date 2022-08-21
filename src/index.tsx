import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import datastate from './redux/datastate';

/* export type AllType = MyPostsItemPropsType & DialogsPropsType & MessagePropsType */
/* export type AllType = {
  myposts: Array<UserMessageType>
  mydialogs: Array<DialogsArray>
  mymessages: Array<MessagesArray>
} */

/* export type MyPostsItemPropsType = {
  myposts: Array<UserMessageType>
}

type UserMessageType = {
  avatar: string
  nickname: string
  postmessage: string
  likes: number
  dislikes: number
}

const user1 = [
  {
  avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
  nickname: "Ivan", 
  postmessage: "Hello to all Incubator", 
  likes: 15, 
  dislikes: 1
  },
  {
    avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
    nickname: "Ivan",
    postmessage: "Hello to all programmers",
    likes: 150,
    dislikes: 10
  },
  {
    avatar: "https://i.pinimg.com/236x/34/57/50/345750705629b0b7d592036167c5832b.jpg",
    nickname: "Petr", 
    postmessage: "Hello to all Codewars", 
    likes: 10, 
    dislikes: 0
  },
  {
    avatar: "https://www.mag-russia.ru/f/product/21_merida_e_bikes_mountainbikes_eone_sixty_my2021_gallery_05.jpg",
    nickname: "Dimych", 
    postmessage: "Hello to all FreeCodeCamp", 
    likes: 105,
    dislikes: 10
  }
]

export type MessagesType = DialogsPropsType & MessagePropsType

export type DialogsPropsType = {
  mydialogs: Array<DialogsArray>
}
type DialogsArray = {
  id: number
  name: string
}

export type MessagePropsType = {
  mymessages: Array<MessagesArray>
}
type MessagesArray = {
  text: string
}

const dialogsData = [
  { id: 1, name: "Neil Tunicliff" },
  { id: 2, name: "Craig Lee Scott" },
  { id: 3, name: "Ali Clarkson" },
  { id: 4, name: "Thomas Remvik Aasen" },
  { id: 5, name: "Damon Watson" }
]

const messagesData = [
  { text: "Hello, Neil Tunicliff" },
  { text: "Hello, Craig Lee Scott" },
  { text: "Hello, Ali Clarkson" },
  { text: "Hello, Thomas Remvik Aasen" },
  { text: "Hello, Damon Watson" }
] */

ReactDOM.render(
    <App /*myposts={props.user1} mydialogs={props.dialogsData} mymessages={props.messagesData}*//>,
  document.getElementById('root')
);