import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import CreateDeckForm from './CreateDeckForm'
import './CreateDeckForm.css'

function CreateDeckFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className='create-deck-button' onClick={() => setShowModal(true)}>Create New Deck</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <CreateDeckForm onClick={() => setShowModal(false)} />
            </Modal>
        )}
        </>
    )
}

export default CreateDeckFormModal
