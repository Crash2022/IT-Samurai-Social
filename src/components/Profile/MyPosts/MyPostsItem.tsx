import React from "react";
import classes from './MyPostsItem.module.css';
/* import {MyPostsItemPropsType} from "./MyPostsList"; */
import {MyPostsItemPropsType} from "../../../index";

export const MyPostsItem = (props: MyPostsItemPropsType) => {
    return (
        <>
        {props.myposts.map((elem) => {
                return (
                    <>
                        <div className={classes.postitem}>
                            <div className={classes.avatar}>
                                <img src={elem.avatar}></img>
                            </div>
                            <div className={classes.userinfo}>
                                <div className={classes.nickname}>
                                    {elem.nickname}
                                </div>
                                <div className={classes.message}>
                                    {elem.postmessage}
                                </div>
                            </div>
                        </div>

                        <div className={classes.counter}>
                            <div className={classes.likes}>
                                <div>Likes: {elem.likes}</div>
                            </div>
                            <div className={classes.dislikes}>
                                <div>Dislikes: {elem.dislikes}</div>
                            </div>
                        </div>
                    </>
                )
            })
        }
        </>
    );
}