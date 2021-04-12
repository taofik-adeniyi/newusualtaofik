import React from 'react'

interface ButtonProps {
    buttonText: string;
    onclick: () => {};
}

const index = (props: ButtonProps) => {
    const { buttonText, onclick } = props
    return (
        <div>
            <button onClick={onclick}>{buttonText}</button>
        </div>
    )
}

export default index
