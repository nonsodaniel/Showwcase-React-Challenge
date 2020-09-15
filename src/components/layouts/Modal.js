import React, { useState, useEffect } from 'react'
import countries from '../../store/jsons/country.json'
const AddModal = (props) => {
    const [country, setCountry] = useState('')
    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [field, setField] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')
    const [description, setDescription] = useState('')

    const closeModal = () => {
        props.closeModal()
    }
    const fetchCountries = () => {
        setCountry(countries)
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <div className="modal-container">
            <div className="modal-header">
                <div className="h5">Add Institution</div>
                <span onClick={closeModal}>
                    <i className="fas fa-times-circle modal__cancel"></i></span>
            </div>
            <div className="modal-body">
                <div className="modal__logo pointer">
                    <img src="" alt="" />
                    <input type="file" name="" id="" />
                </div>
                <form className="modal-form">
                    <div className="form-group">
                        <label htmlFor="country__name">Country</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Havard university"
                                onChange={({ target }) => setSchool(target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__name">School</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Havard university"
                                onChange={({ target }) => setSchool(target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__degree">Degree</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Bachelor's" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="school__degree">Field of Study</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Computer Science" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="start__year">Start Year</label>
                            <div className="input-field input-field-modal spaced">
                                <i className="fas fa-user"></i>
                                <input type="month" id="start__year" placeholder="Your name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="end__year">Start Year</label>
                            <div className="input-field input-field-modal">
                                <i className="fas fa-user"></i>
                                <input type="month" id="end__year" placeholder="Your name" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__grade">Grade</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" id="school__grade" placeholder="Your name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__description">Description</label>
                        <div className="input-field input-field-modal">
                            <textarea name="" id="school__description" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <input type="submit" value="Enter" className="btn solid" />
            </div>
        </div>
    )
}

export default AddModal
