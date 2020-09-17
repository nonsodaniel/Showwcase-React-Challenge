import React from 'react'
import ProfileList from './ProfileList'

const ProfileDetails = (props) => {
    return (

        <div className="main-wrap">
            <div className="main-content">
                {
                    props.data && props.data.length > 0 ? (
                        props.data.map(data_ => {
                            return (
                                <ProfileList key={data_.id}  {...data_} openModal={props.openModal} />
                            )
                        })
                    ) : (<h1>Hello</h1>)
                }
            </div>
        </div>
    )
}
export default ProfileDetails
