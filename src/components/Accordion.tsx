import React from "react";

type AccordionPropsType = {
    titleValue: string
    menuCollapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}

function Accordion(props: AccordionPropsType) {
    if (!props.menuCollapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody />
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
}
function AccordionBody() {
    return (
        <div>
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
        </div>
    );
}

export default Accordion;