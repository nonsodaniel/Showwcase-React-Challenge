import React from 'react'

const Main = () => {
    const [schools, setSchools] = useState([])

    const fetchSchools = async () => {
        await props.getSchools()
        setSchools(props.schools)
    }

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
        fetchSchools()
        Modal.setAppElement('body');
    }, [])
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
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
        </div>
    )
}

export default Main
