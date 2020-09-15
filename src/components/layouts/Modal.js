import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import countries from '../../store/jsons/country.json'
const AddModal = (props) => {
    const [country, setCountry] = useState('')
    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [grade, setGrade] = useState('')
    const [field, setField] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')
    const [description, setDescription] = useState('')
    const [countryName, setCountryName] = useState('')


    const closeModal = () => {
        props.closeModal()
    }
    const fetchCountries = () => {
        setCountry(countries)
    }
    const handleCountry = (selectedOption) => {
        setCountryName(selectedOption)
    };
    const handlSave = () => {
        alert()
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    let countryList = [];
    countries.forEach((value, i) => {
        countryList.push({ value: value.name, label: value.name });
    });

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
                            />

                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__name">School</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Havard university" value={school}
                                onChange={({ target }) => setSchool(target.value)} required={true}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__degree">Degree</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Bachelor's"
                                onChange={({ target }) => setDegree(target.value)}
                                required={true}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="school__degree">Field of Study</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Computer Science"
                                onChange={({ target }) => setField(target.value)}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="start__year">Start Year</label>
                            <div className="input-field input-field-modal spaced">
                                <i className="fas fa-user"></i>
                                <input type="month" id="start__year" placeholder="Start Year"
                                    onChange={(e) => setStartYear(e.target.value)} required={true}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="end__year">End Year</label>
                            <div className="input-field input-field-modal">
                                <i className="fas fa-user"></i>
                                <input type="month" id="end__year" placeholder="End year"
                                    onChange={(e) => setEndYear(e.target.value)} required={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__grade">Grade</label>
                        <div className="input-field input-field-modal">
                            <i className="fas fa-user"></i>
                            <input type="text" id="school__grade" value={grade} placeholder="Your grade"
                                onChange={(e) => setGrade(e.target.value)} required={true}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="school__description">Description</label>
                        <div className="input-field input-field-modal">
                            <textarea name="" id="school__description" cols="30" rows="10"
                                placeholder='Description....'
                                onChange={({ target }) => setDescription(target.value)}
                                required={true}
                                required={true}
                            ></textarea>
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
