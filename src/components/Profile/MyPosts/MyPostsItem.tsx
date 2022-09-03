import React from "react";
import classes from './MyPostsItem.module.css';

import {UserMessageType} from "../../../redux/datastate";

type ProfileType = {
    myposts: UserMessageType[]
}

export const MyPostsItem = (props: ProfileType) => {
    return (
        <>
        {props.myposts.map((elem) => {
                return (
                    <>
                        <div className={classes.postitem} >
                            <div className={classes.avatar}>
                                <img src={elem.avatar} alt=""></img>
                            </div>
                            <div className={classes.userinfo}>
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
                    </>
                )
            })
        }
        </>
    );
}