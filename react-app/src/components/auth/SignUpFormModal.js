import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import SignUpForm from './SignUpForm'
import './auth.css'

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className='signup-button' onClick={() => setShowModal(true)}>Sign Up</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <SignUpForm onClick={() => setShowModal(false)} />
            </Modal>
        )}
        </>
    )
}

export default SignUpFormModal
