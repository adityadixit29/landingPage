import React, { useState } from 'react'
import { RiEyeCloseLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import {Link} from "react-router-dom"
import School from '../school/School';
import './welcome.css'
const New = ({ heading, subheading, img, infolength }) => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState("")
    const [password, setPassword] = useState("")
    const [correctpassword, setCorrectpassword] = useState("")
    const [allow, setAllow] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleVisibility = () => {
        setVisible(!visible);
    }
    const handleChange = (e) => {

        setAllow(true)
        setEmail(e.target.value);

    }
    const handleChangepassword = (e) => {
        setAllow(true)
        setPassword(e.target.value);
    }
    const checkValidation = () => {
   
        const reGex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let isValidEmail = reGex.test(email);
        console.log(password.length);
        let isValidPassword = password.length >= 8;
    
        if (isValidEmail && isValidPassword) {
            setAllow(true);
            setMessage("Email is valid");
            setCorrectpassword("Password is correct");
        } else {
            if (!isValidEmail) {
                setMessage("Invalid Email Format");
            } else if (email === "") {
                setMessage("Please Enter the text");
            }
            if (!isValidPassword) {
                setCorrectpassword("Invalid Password Format");
            } else if (password === "") {
                setCorrectpassword("Enter password");
            }
            setAllow(false);
        }
    }
    
    return (
        <div className="container">
            <div className="left">
                <div className='topheading'>
                    <h1 style={{ fontWeight: "bold" }}>{heading}</h1>
                    <p style={{ color: "#838383" }}>{subheading}</p>
                </div>

                <div className="input">
                    <input type="email" placeholder='Email' className='input-box' value={email} onChange={handleChange} />
                    <p className='tooltip'>{message}</p>
                    <input type={visible ? "text" : "password"} placeholder='Password' className='input-box' value={password} onChange={handleChangepassword} />
                    <div className='visible'>
                        {visible ? <FaEye onClick={handleVisibility} /> : <RiEyeCloseLine onClick={handleVisibility} />}
                    </div>
                    <p className='tooltip'>{correctpassword}</p>
                </div>
                <div className='bottom'>
                    <div className="remember">
                        <input className='checkbox' type="checkbox" name="" id="" />
                        Remember me
                    </div>
                    <div className='forgot'>
                        <a href="">Forgot password?</a>
                    </div>
                </div>
                <div className="btn">
                    {allow ? <Link to="school" className='button' onClick={checkValidation} >Log In</Link> :
                        <button className='button-disable' onClick={checkValidation} >Log In</button>}
                </div>
                <div>
                    <p>Don't have an account? <span className='highlight'>Sign up</span></p>
                </div>

            </div>
            <div className='footer'>
                <div className='question'>
                    ?
                </div>
                <a href='/' className='h'>Help</a>
            </div>
            <div className="right">
                <div className="right-image">
                    <img src={img} className="image" alt="" />
                </div>
            </div>
        </div>
    )
}

export default New