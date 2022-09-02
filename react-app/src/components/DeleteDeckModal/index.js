import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from '../../context/Modal'
import DeleteDeck from './DeleteDeck'
import './DeleteDeck.css'

function DeleteDeckModal({ deck }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className='delete-deck-button' onClick={() => setShowModal(true)}>Delete</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DeleteDeck onClick={() => setShowModal(false)} deck={deck} />
            </Modal>
        )}
        </>
    )
}

export default DeleteDeckModal
