import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import EditSpellcard from './EditSpellcard'
import './EditSpellcard.css'

function EditSpellcardModal({ spell }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className='edit-spellcard-button' onClick={() => setShowModal(true)}>Edit</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <EditSpellcard onClick={() => setShowModal(false)} spell={spell} />
            </Modal>
        )}
        </>
    )
}

export default EditSpellcardModal
