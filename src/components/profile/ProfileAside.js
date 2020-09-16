import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileAside = (props) => {
    console.log("prof", props)
    return (

        <div class="sidebar-wrap">
            <div class="sidebar-content">
                <ul class="sidebar__ul">
                    <li class="sidebar__li"><NavLink to="/"> all those who wander are losts</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileAside
