import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import * as actions from '../../store/actions'


const Home = (props) => {
    const [schools, setSchools] = useState([])

    const fetchSchools = async () => {
        await props.getSchools()
        setSchools(props.schools)
    }
    useEffect(() => {
        fetchSchools()
    }, [])
    return (
        <div>
            Hello <button>Hello</button>
        </div>
    )
}


const mapStateToProps = state => {
    const { schools, loading } = state.schoolData
    return {
        schools, loading
    }
}

export default withRouter(connect(mapStateToProps, actions)(Home));

