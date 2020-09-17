import React from 'react'

const ProfileAside = ({ data }) => {

    const handleClick = (id) => {
        document.getElementById(id).scrollIntoView()
    }
    return (
        <div className="sidebar-wrap">
            <div className="sidebar-content">
                <ul className="sidebar__ul">
                    {
                        data && data.map(o => {
                            let { id, school } = o
                            return (
                                <li className="sidebar__li pointer" key={id} onClick={() => handleClick(id)} >
                                    <span>{school}</span>
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
