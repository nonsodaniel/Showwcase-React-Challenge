import React, { useEffect } from 'react'




const ProfileHeader = (props) => {
    // openModal = () =>{
    //     props.openModal(editData:false)
    // }

    return (
        <>
            <header>
                <p className="welcome__edu">Hi there! Welcome to your education page.</p>
                <input type="submit" value="Add new Education" className="btn solid" onClick={props.openModal} />
            </header>


        </>
    )
}

export default ProfileHeader
