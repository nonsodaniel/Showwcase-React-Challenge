import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../store/actions'

import ProfileHeader from './ProfileHeader';
import ProfileAside from './ProfileAside';
import ProfileDetails from './ProfileDetails';
// import noDataImg from '../assets/noData.jpeg'
import NoData from '../layouts/NoData';



const Profile = (props) => {
    const [profile, setProfile] = useState([])

    const fetchProfile = async () => {
        await props.getProfile()
        setProfile(props.profile)
    }


    useEffect(() => {
        fetchProfile()
    }, [])

    const details = <>
        <div class="content">
            <div class="row">
                <ProfileAside data={props.profile} />
                <ProfileDetails data={props.profile} />
            </div>
        </div>
    </>


    return (
        <>
            <ProfileHeader />
            {
                !props.profile || !props.profile.length > 0 ?
                    <div className="empty-state">
                        <NoData />
                    </div> : details
            }

        </>
    )
}

const mapStateToProps = state => {
    const { profile } = state.schoolData
    return {
        profile
    }
}

export default withRouter(connect(mapStateToProps, actions)(Profile));



