import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { convertMonthYear } from '../utils/dateFunctions'
import eduLogo from '../assets/edulogo.png'
import { withRouter } from 'react-router-dom'
import * as actions from '../../store/actions'


// const customStyles = {
//     content: {
//         height: '40rem',
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         padding: '0',
//         width: '60%',
//         transform: 'translate(-50%, -50%)',
//         boxShadow: `rgba(0, 0, 0, 0.25) 0px 12px 15px 0px`,
//         overflow: 'hidden'

//     }
// };

const ProfileList = (props) => {
    const { id, school, field, grade, degree, startYear, endYear, description } = props;
    // const [modalIsOpen, setIsOpen] = React.useState(false);
    const [profile, setProfile] = useState([])




    useEffect(() => {
        Modal.setAppElement('body');
        setProfile(props.profile)
    }, [props.profile])
    const editProfile = () => {
    }
    const deleteProfile = async ({ target: { id } }) => {
        let newData = profile.filter(data_ => data_.id !== id)
        await localStorage.setItem("profile", JSON.stringify(newData))
        await props.getProfile()
    }
    return (
        <>
            <div className="col" key={id}>
                <div className="main-top">
                    <div className="main__logo">  <img src={eduLogo} alt="main__logo" /> </div>
                    <span className="main__icon-box">
                        <i className="fas fa-edit pointer" id={id} onClick={editProfile}></i>
                        <i className="fas fa-trash pointer" id={id} onClick={deleteProfile}></i>
                    </span>
                </div>
                <h5 className="main__title"> {school}  University</h5>
                <p className="main__degree">{degree} in {field}</p>
                <p className="main__date">{convertMonthYear(startYear)} - {convertMonthYear(endYear)}</p>
                <p className="main__grade">Grade: <b><i>{grade}</i> </b></p>
                <p className="main__desc">
                    {description}
                </p>

            </div>
        </>
    )
}


const mapStateToProps = state => {
    const { profile } = state.schoolData
    return {
        profile
    }
}

export default withRouter(connect(mapStateToProps, actions)(ProfileList));
