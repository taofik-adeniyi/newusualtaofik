import React, { useState } from 'react'
import './style.scss'
import Button from '../Button'

//my components
import Input from '../Input'
import LineBreak from '../LineBreak'

const SignIn = () => {
    const [user, setuser] = useState('')
    const [pass, setpass] = useState('')
    const handleSubmit = () => {
        console.log('sign in');
    }
    const handleUser = (e: { target: { value: React.SetStateAction<string> } }) => {
        setuser(e.target.value)
    }
    const handlePass = (e: { target: { value: React.SetStateAction<string> } }) => {
        setpass(e.target.value)
    }
    return (
        <div className="container">
            <h1>Welcome and test the sign in</h1>
            <Input idd="username" onchange={()=>handleUser} label="username" type="text" value={user} required placeholder="firstname"  />
            <Input idd="password" onchange={()=>handlePass} label="password" type="password" value={pass} required  />
            <LineBreak />
            <Button buttonText="Sign In" onclick={()=>handleSubmit} />
        </div>
    )
}

export default SignIn
