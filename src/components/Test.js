import React from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
// import * as actions from "../store/actions";
import Modal from 'react-modal';

const Test = () => {
    return (
        <div>
            Hello there
        </div>
    )
}

const mapStateToProps = state => {
    const { data, status } = state.provider.providerData
    return {
        data, status
    }
}

export default withRouter(connect(mapStateToProps, actions)(Test));
