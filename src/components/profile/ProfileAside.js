import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileAside = ({ data }) => {
    return (
        <div className="sidebar-wrap">
            <div className="sidebar-content">
                <ul className="sidebar__ul">
                    {
                        data && data.map(o => {
                            let { id, school } = o
                            return (
                                <li className="sidebar__li" key={id}>
                                    <NavLink to={`#${id}`} activeClassName="selected"> {school}</NavLink>
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
