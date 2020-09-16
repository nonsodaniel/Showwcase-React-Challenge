import React from 'react'

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
                                <div class="col">
                                    <h5 class="main__title">{degree} {field} @  University</h5>
                                    <p class="main__date">August 2019 - Present</p>
                                    <ul class="main__ul">
                                        <li>Not all those who wander are losts</li>
                                        <li>Not all those who wander are losts</li>
                                        <li>Not all those who wander are losts</li>
                                    </ul>
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
