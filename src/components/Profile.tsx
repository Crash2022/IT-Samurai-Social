import React from "react";

function Profile() {
  return (
    <main className="content">
      <nav className="left__menu">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>

      <div className="right__profile">
        <div className="content__avatar">
          <img src="https://twentysix.ru/uploads/images/00/02/33/2021/07/26/94076d_full.jpg" /* style={{ width: "500px" }} */></img>
        </div>

        <div className="content__info">
          <div className="content__info_avatar">
            <img src="https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg" style={{ width: "150px", height: "150px" }}></img>
          </div>
          <div className="content__info_info">
            <div>My name is ...</div>
            <div>Date of birth: ...</div>
            <div>City: ...</div>
            <div>Education: ...</div>
            <div>Web-site: ...</div>
          </div>
        </div>

        <div className="content__myposts">
          <div className="content__myposts_title">
            My Posts
          </div>
          <div className="content__myposts_add">
            <textarea className="newMessage"></textarea>
          </div>
          <div className="sendButton">
            <button>Send message</button>
          </div>
          
        </div>
        <div className="content__postlist">
          <div>PostList</div>
          <div>PostList</div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
