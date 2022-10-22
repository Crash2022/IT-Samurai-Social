import React from "react";
import styles from './MyPostsItem.module.css';
import {UserMessageType} from "../../../redux/profilePage-reducer";

type MyPostsItemPropsType = {
    myPosts: Array<UserMessageType>
}

export const MyPostsItem = (props: MyPostsItemPropsType) => {
    console.log(props.myPosts)
    return (
        <>
            {props.myPosts.map( elem => {
                return (
                        <div key={elem.id}>
                            <div className={styles.postItem}>
                                <div className={styles.avatar}>
                                    <img src={elem.avatar} alt=""></img>
                                </div>
                                <div className={styles.userInfo}>
                                    <div className={styles.nickname}>
                                        {elem.nickname}
                                    </div>
                                    <div className={styles.message}>
                                        {elem.postMessage}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.counter}>
                                <div className={styles.likes}>
                                    <div>Likes: {elem.likes}</div>
                                </div>
                                <div className={styles.dislikes}>
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