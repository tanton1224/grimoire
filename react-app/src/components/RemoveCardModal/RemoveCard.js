import { useDispatch } from "react-redux"
import { updateDeckThunk } from "../../store/decks";

function RemoveCard({ onClick, deck, index }) {
    const dispatch = useDispatch();

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
            onClick()
        }
    }

    return (
        <div className="remove-card-container">
            <h3>Remove this card from your deck?</h3>
            <div className="delete-options">
                <div className="delete-card-option delete" onClick={handleRemoval}>Yes</div>
                <div className="delete-card-option bottom-option" onClick={onClick}>No</div>
            </div>
        </div>
    )
}


export default RemoveCard;
