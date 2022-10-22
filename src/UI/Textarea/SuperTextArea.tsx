import React, {ChangeEvent, KeyboardEvent,
    DetailedHTMLFactory, DetailedHTMLProps,
    InputHTMLAttributes, MetaHTMLAttributes} from 'react'
import s from './SuperTextArea.module.css'
import {WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form/lib/Field";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperTextAreaPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    customError?: string
    spanClassName?: string
    input: WrappedFieldProps
    meta: WrappedFieldMetaProps
}

export const SuperTextArea: React.FC<SuperTextAreaPropsType> = (
    {
        // onChange,
        // onChangeText,
        // onKeyPress, onEnter,
        customError,
        className, spanClassName,
        input, meta,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    console.log('meta', meta)
    console.log('input', input)

    // const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     onChange // если есть пропс onChange
    //     && onChange(e) // то передать ему е (поскольку onChange не обязателен)
    //
    //     onChangeText && onChangeText(e.currentTarget.value)
    // }
    // const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     onKeyPress && onKeyPress(e);
    //
    //     onEnter // если есть пропс onEnter
    //     && e.key === 'Enter' // и если нажата кнопка Enter
    //     && onEnter() // то вызвать его
    // }

    const finalSpanClassName = `${meta.error ? s.error : ''} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${meta.error ? s.errorTextArea : ''} ${className ? className : s.superTextArea}`

    const validateError = meta.touched && meta.error /*? '' : 'Поле обязательно для заполнения'*/

    return (
        <>
            <textarea
                {...input}
                // onChange={onChangeCallback}
                // onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <div>
                {customError && <span className={finalSpanClassName}>{customError}</span>}
                {validateError && <span className={finalSpanClassName}>{meta.error}</span>}
            </div>
        </>
    )
}