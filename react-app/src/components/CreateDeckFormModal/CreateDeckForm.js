import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { createDeckThunk } from "../../store/decks";
import './CreateDeckForm.css'


function CreateDeckForm({ onClick }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const [ name, setName ] = useState('')
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const newErrors = {}

        if (name.length >= 50) {
            newErrors.name = "Name character limit reached (50)"
        }

        if (Object.values(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            setErrors({})
        }
    }, [name])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            user_id: user.id,
            name,
        }

        const deck = await dispatch(createDeckThunk(payload))

        if (deck) {
            onClick()
            history.push(`/profile/decks`)
        }
    }

    return (
        <div className="create-deck-form-container">
            <h2>Create new deck?</h2>
            <form className="create-deck-form" onSubmit={handleSubmit} >
                <label for>Deck Name: </label>
                <input
                    type="text"
                    placeholder="Name goes here!"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    maxLength="50"
                ></input>
                {errors.name && <div>{errors.name}</div>}
                <button type="submit">Create</button>
            </form>
            <div className="delete-card-option bottom-option" onClick={onClick}>Cancel</div>
        </div>
    )
}

export default CreateDeckForm
