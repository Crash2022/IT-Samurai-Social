import React from "react";

function MyPostsAdd() {
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
            <button>Add post</button>
          </div>
        </div>
      </>
  );
}

export default MyPostsAdd;
