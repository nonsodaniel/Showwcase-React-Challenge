import React from 'react'
import ProfileList from './ProfileList'

const ProfileDetails = (props) => {
    return (

        <div class="main-wrap">
            <div class="main-content">
                {
                    props.data && props.data.length > 0 ? (
                        props.data.map(o => {
                            return (
                                <ProfileList  {...o} />
                            )
                        })
                    ) : (<h1>Hello</h1>)
                }
            </div>
        </div>
    )
}

export default ProfileDetails
