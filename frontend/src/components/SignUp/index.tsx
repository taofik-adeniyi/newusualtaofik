import React, { useState } from 'react'
import './style.scss'

//my Components
import Input from '../Input'
import LineBreak from '../LineBreak'
import Button from '../Button'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [username, setusername] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    const handleUser = (e: any) => {
        setusername(e.target.value)
    }
    const handlePass = (e: any) => {
        setpass(e.target.value)
    }
    const handlelast = (e: any) => {
        setlastname(e.target.value)
    }
    const handlefirst = (e: any) => {
        setfirstname(e.target.value)
    }
    const handlemail = (e: any) => {
        setemail(e.target.value)
    }
    function handleSubmit(){
        alert(`${email} <br> ${firstname} <br> ${lastname} <br> ${username} <br> ${pass}`)
    }
     
    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'white'}}>Signup</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                <Input onchange={(e)=> handlefirst(e)} idd="first-name" label="first name" type="text" value={firstname} required placeholder="firstname"  />
                <Input onchange={(e)=> handlelast(e)} idd="last-name" label="last name" type="text" value={lastname} required placeholder="firstname"  />
                <Input onchange={(e) => handleUser(e)} idd="username" label="username" type="text" value={username} required placeholder="firstname"  />
                <Input onchange={(e)=> handlemail(e)} idd="email" label="email" type="email" value={email} required placeholder="firstname"  />
                <Input onchange={(e)=> handlePass(e)} idd="password" label="password" type="password" value={pass} required placeholder="firstname"  />
                <LineBreak />
                <Button buttonText="Sign Up" onclick={()=> handleSubmit} />
                </form>
                <div style={{color: '#fff', textAlign: 'center'}}>
                    <p>Already have an account <Link  style={{color: '#fff'}} to="/signin">Sign in</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
