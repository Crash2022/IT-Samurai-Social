import React from "react";

export const requiredField = (value: string) => {
    if(value) {
        return undefined;
    } else {
        return 'Поле обязательно для заполнения';
    }
}

// короткая запись функции-замыкания (как ThunkCreator)
// export const maxLengthCreator = (maxLength: number) => (value: string) => {
//     if(value && value.length > maxLength) {
//         return `Введено ${maxLength} символов`;
//     } else {
//         return undefined;
//     }
// }

export const maxLengthCreator = (maxLength: number) => {
    return (value: string) => {
        if(value && value.length > maxLength) {
            return `Введено больше ${maxLength} символов`;
        } else {
            return undefined;
        }
    }
}