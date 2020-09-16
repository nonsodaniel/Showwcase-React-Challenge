import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../store/actions'
import countries from '../../store/jsons/country.json'
import { generateId } from '../utils/idGenerator'
const AddModal = (props) => {
    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [grade, setGrade] = useState('')
    const [field, setField] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')
    const [description, setDescription] = useState('')
    const [countryName, setCountryName] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const { getSchools } = props;

    const closeModal = () => {
        props.closeModal()
    }

    const handleCountry = (selectedOption) => {
        setCountryName(selectedOption)
        setSchoolName('')
    };
    const handleSchool = (selectedOption) => {
        setSchoolName(selectedOption)
        console.log(selectedOption)
    };

    const handlSave = async (e) => {
        e.preventDefault()
        let postObj = {
            id: generateId(), schoolLocation: countryName,
            school: schoolName.value, website: schoolName.website,
            degree, field, startYear, endYear, grade, description
        }
        saveProfile(postObj)
    }

    const saveProfile = async (postObj) => {
        const response = await JSON.parse(localStorage.getItem('profile'))
        if (response && response.length > 0) {
            let newData = [...response, postObj]
            localStorage.setItem('profile', JSON.stringify(newData))
            await props.getProfile()
            closeModal()
        } else {
            localStorage.setItem('profile', JSON.stringify([postObj]))
            await props.getProfile()
            closeModal()
        }
    }


    useEffect(() => {
        getSchools(countryName.value)
    }, [countryName, getSchools])

    useEffect(() => {
        setSchool(props.schools)
    }, [props.schools, props.loading])

    let countryList = [];
    countries.forEach((value) => {
        countryList.push({ value: value.name, label: value.name });
    });


    let schoolList = [];
    if (school && school.length > 0) {
        school.forEach((value) => {
            schoolList.push({ value: value.name, label: value.name, website: value.web_pages[0] });
        });
    }

    const style = {
        control: (base, state) => ({
            ...base,
            border: state.isFocused ? 0 : 0,
            background: '#f0f0f0',
            fontSize: '.9rem',
            // This line disable the blue border
            boxShadow: state.isFocused ? 0 : 0,
            "&:hover": {
                border: state.isFocused ? 0 : 0
            }
        })
    };
    const schoolIcon = !countryName && schoolList.length === 0 ?
        (<i class="fas fa-university"></i>) :
        countryName && schoolList.length === 0 ?
            (<i class="fas fa-spinner fa-pulse"></i>) :
            countryName && schoolList.length > 0 ?
                (<i class="fas fa-university"></i>) : null


    return (
        <div className="modal-container">
            <div className="modal-header">
                <div className="h5">Add Institution</div>
                <span onClick={closeModal}>
                    <i className="fas fa-times-circle modal__cancel"></i></span>
            </div>
            <div className="modal-body">
                <div className="modal__logo pointer">
                    <label htmlFor="dp" className="pointer">
                        <img src="" alt="" />
                        <input type="file" id="dp" className="v-hidden" />
                    </label>
                </div>
                <form className="modal-form" onSubmit={handlSave}>
                    <div className="form-group">
                        <label htmlFor="country__name">Country</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <Select
                                value={countryName}
                                onChange={handleCountry}
                                options={countryList}
                                className="mySelect"
                                placeholder="Country"
                                theme={{
                                    borderRadius: 0,
                                    spacing: { controlHeight: 55, baseUnit: 5 },
                                }}
                                styles={style}
                            />

                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__name">School</label>
                        <div className="input-field input-field-modal">
                            {
                                schoolIcon
                            }
                            <Select
                                value={schoolName}
                                onChange={handleSchool}
                                options={schoolList}
                                className="mySelect"
                                placeholder="My School"
                                isDisabled={schoolList.length > 0 ? false : true}
                                theme={{
                                    borderRadius: 0,
                                    spacing: { controlHeight: 55, baseUnit: 5 },
                                }}
                                styles={style}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__degree">Degree</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Bachelor's"
                                onChange={({ target }) => setDegree(target.value)}
                                required={false}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="school__degree">Field of Study</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Computer Science"
                                onChange={({ target }) => setField(target.value)}
                                required={false}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="start__year">Start Year</label>
                            <div className="input-field input-field-modal spaced">
                                <i className="fas fa-user"></i>
                                <input type="month" id="start__year" placeholder="Start Year"
                                    onChange={(e) => setStartYear(e.target.value)} required={false}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="end__year">End Year</label>
                            <div className="input-field input-field-modal">
                                <i className="fas fa-user"></i>
                                <input type="month" id="end__year" placeholder="End year"
                                    onChange={(e) => setEndYear(e.target.value)} required={false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__grade">Grade</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" id="school__grade" value={grade} placeholder="Your grade"
                                onChange={(e) => setGrade(e.target.value)} required={false}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__description">Description</label>
                        <div className="input-field input-field-modal">
                            <textarea name="" id="school__description" className="school__description"
                                cols="30" rows="10"
                                placeholder='Description....'
                                onChange={({ target }) => setDescription(target.value)}
                                required={false}
                            ></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <input type="submit" value="Enter" className="btn solid" />
                    </div>
                </form>
            </div>

        </div>
    )
}


const mapStateToProps = state => {
    console.log("state", state)
    const { schools, loading } = state.schoolData
    return {
        schools, loading
    }
}

export default withRouter(connect(mapStateToProps, actions)(AddModal));