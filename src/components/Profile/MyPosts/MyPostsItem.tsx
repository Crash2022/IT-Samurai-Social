import React from "react";
import classes from './MyPostsItem.module.css';
import {UserMessageType} from "../../../redux/store";

type ProfileType = {
    myPosts: Array<UserMessageType>
}

export const MyPostsItem = (props: ProfileType) => {
    return (
        <>
            {props.myPosts.map( elem => {
                return (
                        <div key={elem.id}>
                            <div className={classes.postItem}>
                                <div className={classes.avatar}>
                                    <img src={elem.avatar} alt=""></img>
                                </div>
                                <div className={classes.userInfo}>
                                    <div className={classes.nickname}>
                                        {elem.nickname}
                                    </div>
                                    <div className={classes.message}>
                                        {elem.postMessage}
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
                        </div>
                )
            })
            }
        </>
    );
}