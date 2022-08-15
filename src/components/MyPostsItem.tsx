import React from "react";
import classes from './MyPostsItem.module.css';

function MyPostsItem() {
  return (
      <>
        <div className={classes.postitem}>
          <div className={classes.avatar}>
            <img src="https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg" /* style={{ width: "50px", height: "50px" }} */></img>
          </div>
          <div className={classes.message}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat placeat natus quos dolorum quam hic necessitatibus velit, ratione eaque suscipit sapiente, iure error voluptas. Alias nesciunt culpa similique in.
          </div>
        </div>
      </>
  );
}

export default MyPostsItem;