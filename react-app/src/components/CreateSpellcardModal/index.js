import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import CreateSpellcard from './CreateSpellcard'
import './CreateSpellcard.css'

function CreateSpellcardModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className='create-spellcard-button' onClick={() => setShowModal(true)}>Create New Spell</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <CreateSpellcard onClick={() => setShowModal(false)} />
            </Modal>
        )}
        </>
    )
}

export default CreateSpellcardModal
