import React from 'react'
import { convertMonthYear } from '../utils/dateFunctions'
import eduLogo from '../assets/edulogo.png'

const ProfileDetails = (props) => {
    return (

        <div class="main-wrap">
            <div class="main-content">
                {
                    props.data && props.data.length > 0 ? (
                        props.data.map(o => {
                            console.log(o)
                            let { id, school, field, grade, degree, startYear, endYear, description } = o
                            return (
                                <div class="col" key={id}>
                                    <div className="main-top">
                                        <div className="main__logo">  <img src={eduLogo} alt="" /> </div>
                                        <span className="main__icon-box">
                                            <i class="fas fa-edit pointer"></i>
                                            <i class="fas fa-trash pointer"></i>
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
                        })
                    ) : (<h1>Hello</h1>)
                }

            </div>

        </div>

    )
}

export default ProfileDetails
