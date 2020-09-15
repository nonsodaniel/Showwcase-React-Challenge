import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import * as actions from '../../store/actions'
import Modal from 'react-modal'
import AddModal from '../layouts/Modal';
import '../assets/css/style.css'


const customStyles = {
    content: {
        height: '30rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '0',
        width: '50%',
        // border: '1px transparent',
        transform: 'translate(-50%, -50%)',
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 12px 15px 0px;`
    }
};

const Home = () => {
    const [name, setname] = useState('')
    const handleSave = (e) => {
        e.preventDefault()
        console.log(name)
        localStorage.setItem('name', name)
    }
    return (
        <div class="home">
            <div class="form-wrap">
                <form class="sign-in-form" onSubmit={handleSave}>
                    <p class="text-welcome">Hi there! Welcome to your education showcase.</p>
                    <p class="text-desc">Type your name and click "Enter" below to begin!</p>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Your name" onChange={({ target }) => setname(target.value)} />
                    </div>
                    <button type="submit" class="btn solid" disabled={name ? false : true} >Enter</button>
                </form>
            </div>
        </div>

    )
}


const mapStateToProps = state => {
    const { schools, loading } = state.schoolData
    return {
        schools, loading
    }
}

export default withRouter(connect(mapStateToProps, actions)(Home));

