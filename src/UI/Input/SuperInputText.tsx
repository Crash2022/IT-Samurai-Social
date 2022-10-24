import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent} from 'react'
import s from './SuperInputText.module.css'
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form/lib/Field";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    input: WrappedFieldProps
    meta: WrappedFieldMetaProps
}

export const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        //type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        input, meta,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    //const finalSpanClassName = `${error ? s.error : ''} ${spanClassName ? spanClassName : ''}`
    //const finalInputClassName = `${error ? s.errorInput : ''} ${className ? className : s.superInputDone}`

    const validateError = meta.touched && meta.error;

    const finalInputClassName = `${s.superInputDone} ${validateError ? s.errorInput : ''}`
    const finalSpanClassName = `${s.error}`

    return (
        <>
            <div className={s.inputBlock}>
                <input
                    //type={'text'}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}
                    {...input}
                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                />
            </div>
            {/*<div>{error && <span className={finalSpanClassName}>{error}</span>}</div>*/}
            <div className={s.errorBlock}>
                {validateError && <span className={finalSpanClassName}>{meta.error}</span>}
            </div>
        </>
    )
}