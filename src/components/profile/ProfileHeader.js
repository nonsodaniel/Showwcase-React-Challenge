import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

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

const ProfileHeader = (props) => {
    const [name, setName] = useState('')
    useEffect(() => {
        setName(localStorage.getItem('name'))
    }, [])
    return (
        <>
            <Link to='/'><i className="fas fa-home pointer"></i></Link>
            <header>
                <p className="welcome__edu"> Welcome to <b>{name}'s </b> education page.</p>
                <Button type="submit" onClick={props.openModal}>
                    Add new Education
                </Button >
            </header>


        </>
    )
}

export default ProfileHeader
