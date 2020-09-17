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
                        <button type="submit" className="btn solid"  >Enter</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default withRouter(Home);
