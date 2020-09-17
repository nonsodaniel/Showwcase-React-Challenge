import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom'
import Select from 'react-select'
import * as actions from '../../store/actions'

import ProfileHeader from './ProfileHeader';
import ProfileAside from './ProfileAside';
import ProfileDetails from './ProfileDetails';
import NoData from '../layouts/NoData';


import Modal from 'react-modal'
import AddModal from '../layouts/Modal';


const customStyles = {
    content: {
        height: '40rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '0',
        width: '60%',
        transform: 'translate(-50%, -50%)',
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 12px 15px 0px`,
        overflow: 'hidden'

    }
};
const style = {
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? 0 : 0,
        background: '#f0f0f0',
        fontSize: '.9rem',
        padding: '0 2rem',
        boxShadow: state.isFocused ? 0 : 0,
        "&:hover": {
            border: state.isFocused ? 0 : 0
        }
    })
};

const Profile = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalData, setModalData] = React.useState({});
    const [schoolName, setSchoolName] = useState('')

    function openModal(data) {
        if (data && data['id']) { setModalData({ ...data, editMode: true }) }
        else { setModalData({ ...data, editMode: false }) }
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    const handleSchool = (selectedOption) => {
        setSchoolName(selectedOption)
        document.getElementById(selectedOption.id).scrollIntoView()
        window.scrollTo(0, 0);
    };


    useEffect(() => {
        let params = props.match.params.id
        let name = localStorage.getItem("name")
        if (params.toLowerCase() !== name.toLowerCase()) {
            props.history.push('/wrong-action')
        }
        Modal.setAppElement('body');
    })
    const { getProfile, getName } = props;
    useEffect(() => {
        const fetchName = async () => {
            await getName()
        }
        fetchName()
    }, [getName])

    useEffect(() => {
        const fetchProfile = async () => {
            await getProfile()
        }
        fetchProfile()
    }, [getProfile])
    useEffect(() => {
        const check = () => {
            if (!localStorage.getItem('name')) {
                props.history.push('/')
            }
        }
        check()
    }, [])


    const details = <>
        <div className="content">
            <div className="row">
                <ProfileAside data={props.profile} />
                <ProfileDetails data={props.profile} openModal={openModal} />
            </div>
        </div>
    </>
    let schoolList = [], { profile } = props;

    if (profile && profile.length > 0) {
        profile.forEach((value) => {
            let { school, id } = value
            schoolList.push({ value: school, label: school, id: id });
        });
    }
    return (
        <>

            <ProfileHeader openModal={openModal} />
            {
                props.profile && props.profile.length > 0 ? (
                    <div className="select__school">
                        <Select
                            value={schoolName}
                            onChange={handleSchool}
                            options={schoolList}
                            className="mySelect"
                            placeholder="My School"
                            theme={{
                                borderRadius: 0,
                                spacing: { controlHeight: 55, baseUnit: 5 },
                            }}
                            styles={style}
                        />
                    </div>

                ) : null
            }

            {
                !props.profile || !props.profile.length > 0 ?
                    <div className="empty-state">
                        <NoData />
                    </div> : details
            }

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                closeTimeoutMS={1000}
            >
                <AddModal editData={modalData} closeModal={closeModal} />
            </Modal>

        </>
    )
}

const mapStateToProps = state => {
    const { profile, name } = state.schoolData
    return {
        profile, name
    }

}

export default withRouter(connect(mapStateToProps, actions)(Profile));



