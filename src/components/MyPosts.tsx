import React from "react";

function MyPosts() {
  return (
      <>
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
      </>
  );
}

export default MyPosts;
