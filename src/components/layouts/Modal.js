import React from 'react'

const AddModal = (props) => {
    console.log("fuck", props)
    const closeModal = () => {
        props.closeModal()
    }
    return (
        <div class="modal-container">
            <div class="modal-header">
                <div class="h5">Add Institution</div>
                <span onClick={closeModal}><i class="fas fa-user"></i></span>
            </div>
            <div class="modal-body">
                <div class="logo"><img src="" alt="" /></div>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="school__name">School</label>
                        <div class="input-field input-field-modal">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Havard university" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="school__degree">Degree</label>
                        <div class="input-field input-field-modal">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Bachelor's" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="school__degree">Field of Study</label>
                        <div class="input-field input-field-modal">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Computer Science" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label for="start__year">Start Year</label>
                            <div class="input-field input-field-modal spaced">
                                <i class="fas fa-user"></i>
                                <input type="month" id="start__year" placeholder="Your name" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="end__year">Start Year</label>
                            <div class="input-field input-field-modal">
                                <i class="fas fa-user"></i>
                                <input type="month" id="end__year" placeholder="Your name" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="school__grade">Grade</label>
                        <div class="input-field input-field-modal">
                            <i class="fas fa-user"></i>
                            <input type="text" id="school__grade" placeholder="Your name" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="school__description">Description</label>
                        <div class="input-field input-field-modal">
                            <textarea name="" id="school__description" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <input type="submit" value="Enter" class="btn solid" />
            </div>
        </div>
    )
}

export default AddModal
