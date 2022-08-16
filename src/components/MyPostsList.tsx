import React from "react";
import {MyPostsItem} from "./MyPostsItem";

const user1 = [
  {
  avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg",
  nickname: "Ivan", 
  postmessage: "Hello to all Incubator", 
  likes: 15, 
  dislikes: 1
}
]
const user2 = [
  {
  avatar: "https://i.pinimg.com/236x/34/57/50/345750705629b0b7d592036167c5832b.jpg",
  nickname: "Petr", 
  postmessage: "Hello to all Codewars", 
  likes: 10, 
  dislikes: 0
}
]
const user3 = [
  {
  avatar: "https://www.mag-russia.ru/f/product/21_merida_e_bikes_mountainbikes_eone_sixty_my2021_gallery_05.jpg",
  nickname: "Dimych", 
  postmessage: "Hello to all FreeCodeCamp", 
  likes: 105, 
  dislikes: 10
}
]

export const MyPostsList = () => {
  return (
      <>
        <div className="content__postlist">
          <MyPostsItem message={user1}/>
          <MyPostsItem message={user2}/>
          <MyPostsItem message={user3}/>
        </div>
      </>
  );
}