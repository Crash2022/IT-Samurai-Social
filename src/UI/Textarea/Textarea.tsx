import React, {ChangeEvent} from 'react';
import styles from './Textarea.module.css';

type TextareaPropsType = {
    value: string
    textareaValue: string
    setTextareaValue: (text: string)=>void
}

export const Textarea = (props: TextareaPropsType) => {

    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.setTextareaValue(event.currentTarget.value);
    }

    return (
        <textarea
            className={styles.newMessage}
            onChange={onChangeTextAreaHandler}>
                {props.textareaValue}
        </textarea>
    );
}

