import React from "react";

export const MyProfile = () => {
  return (
      <>
        <div className="content__avatar">
          <img src="https://twentysix.ru/uploads/images/00/02/33/2021/07/26/94076d_full.jpg" alt="profile-avatar"></img>
        </div>

        <div className="content__info">
          <div className="content__info_avatar">
            <img src="https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg" alt="my-avatar"></img>
          </div>
          <div className="content__info_info">
            <div>My name is ...</div>
            <div>Date of birth: ...</div>
            <div>City: ...</div>
            <div>Education: ...</div>
            <div>Web-site: ...</div>
          </div>
        </div>
      </>
  );
}