import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=>void
}

export const Button = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
}

