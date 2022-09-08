import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import DeleteSpellcard from './DeleteSpellcard'
import './DeleteSpellcard.css'

function DeleteSpellcardModal({ spell }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className='delete-spellcard-button' onClick={() => setShowModal(true)}>Delete</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DeleteSpellcard onClick={() => setShowModal(false)} spell={spell} />
            </Modal>
        )}
        </>
    )
}

export default DeleteSpellcardModal
