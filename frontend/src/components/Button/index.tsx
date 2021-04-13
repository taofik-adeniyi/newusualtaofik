import React from 'react'

interface ButtonProps {
    buttonText: string;
    onclick: () => void;
}

const Button = (props: ButtonProps) => {
    const { buttonText, onclick } = props
    return (
        <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button style={{padding: '10px 25px', color: '#fff', backgroundColor: 'blue', borderRadius: '10px', border: 'none'}} onClick={onclick}>{buttonText}</button>
        </div>
    )
}

export default Button
