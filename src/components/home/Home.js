import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../assets/css/style.css'

const Home = (props) => {
    const [name, setname] = useState('')
    const handleSave = (e) => {
        e.preventDefault()
        props.history.push(`/profile/${name}`)
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
                        <input type="text" placeholder="Your name"
                            onChange={({ target }) => setname(target.value)} />
                    </div>
                    <button type="submit" class="btn solid" disabled={name ? false : true} >Enter</button>
                </form>
            </div>
        </div>

    )
}


export default withRouter(Home);
