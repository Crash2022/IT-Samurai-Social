import React from "react";

type ContactsPropsType = {
    contactsTitle: string
    contactsValue: string | null | undefined
}

export const Contacts: React.FC<ContactsPropsType> = ({contactsTitle, contactsValue}) => {

    return (
        <div>
            <div><b>{contactsTitle}:</b>{contactsValue}</div>
        </div>
    );
}