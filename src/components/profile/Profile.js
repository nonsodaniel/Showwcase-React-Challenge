import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom'
import * as actions from '../../store/actions'
import Modal from 'react-modal'
import AddModal from '../layouts/Modal';

const customStyles = {
    content: {
        height: '30rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '0',
        width: '50%',
        // border: '1px transparent',
        transform: 'translate(-50%, -50%)',
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 12px 15px 0px;`
    }
};


const Profile = (props) => {
    const [schools, setSchools] = useState([])

    const fetchSchools = async () => {
        await props.getSchools()
        setSchools(props.schools)
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    useEffect(() => {
        fetchSchools()
        Modal.setAppElement('body');
    }, [])
    return (
        <div>















            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                closeTimeoutMS={1000}
            >
                <AddModal closeModal={closeModal} />
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    const { schools, loading } = state.schoolData
    return {
        schools, loading
    }
}

export default withRouter(connect(mapStateToProps, actions)(Profile));
