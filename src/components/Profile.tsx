import React from "react";

function Profile() {
  return (
    <main className="content">
            <div className="content__avatar">
              <img src="https://www.chevalblanc.it/wp-content/uploads/2019/06/pila-free-ride.jpg"></img>
            </div>
            <div className="content__info">
              <div className="content__info-avatar">
                <img src="https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg"></img>
              </div>
              <div className="content__info-info">
                <div>My name is...</div>
                <div>Date of birth:...</div>
                <div>City:...</div>
                <div>Education:...</div>
                <div>Web-site:...</div>
              </div>
            </div>
            <div className="content__myposts">
              <div className="content__myposts-title">
                My Posts
              </div>
              <div className="content__myposts-add">
                Add post...
              </div> 
            </div>
            <div className="content__postlist">
              PostList
            </div>
        </main>
  );
}

export default Profile;