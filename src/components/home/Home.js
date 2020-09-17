import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from "styled-components";
import '../assets/css/style.css'

//React styled component 
const Button = styled.button`
width: 150px;
background-color: #5995fd;
border: none;
outline: none;
height: 45px;
border-radius: 5px;
color: #fff;
font-weight: 600;
margin: 10px 0;
cursor: pointer;
`;


const Home = (props) => {
    const [name, setname] = useState('')
    const handleSave = (e) => {
        e.preventDefault()
        props.history.push(`/profile/${name}`)
        localStorage.setItem('name', name)
    }
    return (
        <>
            <div className="home">
                <div className="form-wrap">
                    <form className="sign-in-form" onSubmit={handleSave}>
                        <p className="text-welcome">Hi there! Welcome to your education showcase.</p>
                        <p className="text-desc">Type your name and click "Enter" below to begin!</p>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Your name"
                                onChange={({ target }) => setname(target.value)} required={true} />
                        </div>
                        <Button type="submit"   >Enter</Button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default withRouter(Home);
