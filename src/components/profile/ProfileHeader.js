import React, { useEffect, useState } from 'react'
const ProfileHeader = (props) => {
    const [name, setName] = useState('')
    useEffect(() => {
        setName(localStorage.getItem('name'))
    }, [])
    return (
        <>
            <header>
                <p className="welcome__edu"> Welcome to <b>{name} </b> education page.</p>
                <input type="submit" value="Add new Education" className="btn solid" onClick={props.openModal} />
            </header>


        </>
    )
}

export default ProfileHeader
