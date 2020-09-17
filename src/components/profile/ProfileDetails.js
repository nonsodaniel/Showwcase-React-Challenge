import React from 'react'
import ProfileList from './ProfileList'

const ProfileDetails = (props) => {
    return (

        <div className="main-wrap">
            <div className="main-content">
                {
                    props.data && props.data.length > 0 ? (
                        props.data.map(o => {
                            return (
                                <ProfileList key={o.id}  {...o} openModal={props.openModal} />
                            )
                        })
                    ) : (<h1>Hello</h1>)
                }
            </div>
        </div>
    )
}
export default ProfileDetails
