import React, { useState } from 'react'

const ProfileAside = ({ data }) => {
    const [active, setActive] = useState(data[0].id)

    const handleClick = (id) => {
        document.getElementById(id).scrollIntoView()
        setActive(id)
    }
    return (
        <div className="sidebar-wrap">
            <div className="sidebar-content">
                <ul className="sidebar__ul">
                    {
                        data && data.map(o => {
                            let { id, school } = o
                            return (
                                <li className={`sidebar__li pointer ${active === id ? 'li__active' : null}`}
                                    key={id} onClick={() => handleClick(id)} >
                                    <span>
                                        {school}
                                    </span>
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
