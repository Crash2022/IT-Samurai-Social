import React, {ChangeEvent, useEffect, useState} from "react";
import styles from './MyProfile.module.css';
// import {maxLengthCreator} from "../../../utils/validators/validators";

export type ProfileStatusPropsType = {
    userId: string
    status: string
    updateUserStatus: (userId: string, status: string) => void
}

// const maxLengthCreator20 = maxLengthCreator(20);

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState(props.status);

    const activateEditModeHandler = () => {
        setEditMode(true);
    }

    const deactivateEditModeHandler = () => {
        setEditMode(false);
        props.updateUserStatus(props.userId, status);
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value);
    }

    // из-за того, что вышестоящие компоненты перерисовываются, нет необходиомсти в useEffect здесь
    // useEffect(() => {
    //     setStatus(props.status);
    // },[props.status])

    return (
        <div className={styles.content__status_text}>
            {
                editMode
                    ?
                    <div>
                        <input type="text"
                               value={status}
                               onChange={onStatusChange}
                               onBlur={deactivateEditModeHandler}
                               autoFocus={true}
                               // validate={[maxLengthCreator20]}
                        />
                    </div>
                    :
                    <div>
                            <span onDoubleClick={activateEditModeHandler}>
                                {props.status || 'Тут будет твой статус'}
                            </span>
                    </div>
            }
        </div>
    );
}