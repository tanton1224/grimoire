import { useDispatch } from "react-redux"
import { updateDeckThunk } from "../../store/decks";
import { useHistory } from 'react-router-dom'

function RemoveCard({ onClick, deck, index }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRemoval = async () => {
        deck.spellcards.splice(index, 1)

        let spellcards;
        if (deck.spellcards.length === 0) {
            spellcards = deck.spellcards
        } else {
            spellcards = deck.spellcards.join(',')
        }

        const payload = {
            user_id: deck.user_id,
            name: deck.name,
            spellcards,
        }

        const success = await dispatch(updateDeckThunk(payload, deck.id))

        if (success) {
            history.push(`/decks/${deck.id}`)
            onClick()
        }
    }

    return (
        <div className="remove-card-container">
            <h3>Remove this card from your deck?</h3>
            <div onClick={handleRemoval}>Yes</div>
            <div onClick={onClick}>No</div>
        </div>
    )
}


export default RemoveCard;
