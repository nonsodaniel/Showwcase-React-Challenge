import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import * as actions from '../../store/actions'

import ProfileHeader from './ProfileHeader';
import ProfileAside from './ProfileAside';
import ProfileDetails from './ProfileDetails';



const Profile = (props) => {
    const [schools, setSchools] = useState([])

    const fetchSchools = async () => {
        await props.getSchools()
        setSchools(props.schools)
    }


    useEffect(() => {
        fetchSchools()

    }, [])
    return (
        <>
            <ProfileHeader />
            <div class="content">
                <div class="row">
                    <ProfileAside />
                    <ProfileDetails />
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    const { schools, loading } = state.schoolData
    return {
        schools, loading
    }
}

export default withRouter(connect(mapStateToProps, actions)(Profile));



