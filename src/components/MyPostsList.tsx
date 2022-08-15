import React from "react";
import MyPostsItem from "./MyPostsItem";

function MyPostsList() {
  return (
      <>
        <div className="content__postlist">
          <MyPostsItem />
          <MyPostsItem />
        </div>
      </>
  );
}

export default MyPostsList;
