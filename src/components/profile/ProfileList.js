import React from 'react'
import { convertMonthYear } from '../utils/dateFunctions'
import eduLogo from '../assets/edulogo.png'

const ProfileList = ({ id, school, field, grade, degree, startYear, endYear, description }) => {
    const editProfile = () => {
    }
    const deleteProfile = () => {
    }
    return (
        <div class="col" key={id}>
            <div className="main-top">
                <div className="main__logo">  <img src={eduLogo} alt="" /> </div>
                <span className="main__icon-box">
                    <i class="fas fa-edit pointer" onClick={editProfile}></i>
                    <i class="fas fa-trash pointer" onClick={deleteProfile}></i>
                </span>
            </div>
            <h5 class="main__title"> {school}  University</h5>
            <p class="main__degree">{degree} in {field}</p>
            <p class="main__date">{convertMonthYear(startYear)} - {convertMonthYear(endYear)}</p>
            <p class="main__grade">Grade: <b><i>{grade}</i> </b></p>
            <p className="main__desc">
                {description}
            </p>
        </div>
    )
}

export default ProfileList
