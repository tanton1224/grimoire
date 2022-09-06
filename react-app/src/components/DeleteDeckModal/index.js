import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import DeleteDeck from './DeleteDeck'
import './DeleteDeck.css'

function DeleteDeckModal({ deck }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <button className='delete-deck-button' onClick={() => setShowModal(true)}>Delete deck</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DeleteDeck onClick={() => setShowModal(false)} deck={deck} />
            </Modal>
        )}
        </>
    )
}

export default DeleteDeckModal
