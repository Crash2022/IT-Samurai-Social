import React, {useEffect} from 'react';
import styles from "./Messages.module.css";
import {DialogItem} from "./DialogItem";
import {MessageItem} from "./MessageItem";
import {MessagesContainerType} from "./MessagesContainer";
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../common/hooks/useAppSelector';
import {selectedIsAuth} from '../../redux/auth-selectors';

export const Messages = (props: MessagesContainerType) => {

    const navigate = useNavigate()
    const isAuth = useAppSelector(selectedIsAuth)

    useEffect(() => {
        if (!isAuth) navigate('/login');
    }, [isAuth])

    return (
        <>
            <div className={styles.messages}>
                <div className={styles.dialogs}>
                    <DialogItem myDialogs={props.myDialogs}/>
                </div>
                <div className={styles.text}>
                    <MessageItem myMessages={props.myMessages}
                                 sendMessageHandler={props.sendMessageAC}
                    />
                </div>
            </div>
        </>
    );
}