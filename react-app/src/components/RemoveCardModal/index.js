import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import RemoveCard from './RemoveCard'
import './RemoveCard.css'

function RemoveCardModal({ deck, index }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className='remove-card-button' onClick={() => setShowModal(true)}><i class="fa-solid fa-trash-can fa-2xl"></i></div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <RemoveCard onClick={() => setShowModal(false)} deck={deck} index={index} />
            </Modal>
        )}
        </>
    )
}

export default RemoveCardModal
