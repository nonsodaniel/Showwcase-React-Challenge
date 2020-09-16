import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileAside = ({ data }) => {
    return (
        <div class="sidebar-wrap">
            <div class="sidebar-content">
                <ul class="sidebar__ul">
                    {
                        data && data.map(o => {
                            console.log(o)
                            let { id, school } = o
                            return (
                                <li class="sidebar__li" key={id}>
                                    <NavLink to="/"> {school}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProfileAside
