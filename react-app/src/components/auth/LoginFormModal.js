import React, { useState } from 'react'
import { Modal } from '../../context/Modal'
import LoginForm from './LoginForm'
import './auth.css'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <div className='login-button' onClick={() => setShowModal(true)}>Login</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <LoginForm onClick={() => setShowModal(false)} />
            </Modal>
        )}
        </>
    )
}

export default LoginFormModal
