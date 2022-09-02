import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { createDeckThunk } from "../../store/decks";


function CreateDeckForm({ onClick }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const [ name, setName ] = useState('')

    const handleSubmit = async () => {
        const payload = {
            user_id: user.id,
            name,
        }

        const deck = await dispatch(createDeckThunk(payload))

        if (deck) {
            history.push(`/profile/decks`)
            onClick()
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
                ></input>
                <button type="submit">Create</button>
            </form>
            <div onClick={onClick}>Cancel</div>
        </div>
    )
}

export default CreateDeckForm
