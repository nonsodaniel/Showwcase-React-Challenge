import React, { useEffect } from 'react'
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
        // border: '1px transparent',
        transform: 'translate(-50%, -50%)',
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 12px 15px 0px`,
        overflow: 'hidden'

    }
};


const ProfileHeader = () => {
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
        Modal.setAppElement('body');
    })
    return (
        <>
            <header>
                <p class="">Hi there! Welcome to your education showcase.</p>
                <input type="submit" value="Add new Education" class="btn solid" onClick={openModal} />
            </header>

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
        </>
    )
}

export default ProfileHeader
