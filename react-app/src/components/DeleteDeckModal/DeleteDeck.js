import { useDispatch } from "react-redux";
import { deleteDeckThunk } from "../../store/decks";

function DeleteDeck({ onClick, deck}) {
    const dispatch = useDispatch();


    const handleDelete = async () => {
        dispatch(deleteDeckThunk(deck.id))
        onClick()
    }

    return (
        <div className="delete-deck-container">
            <h3>Permanently delete deck?</h3>
            <div>This cannot be undone.</div>
            <div className="delete-options">
                <div className="delete-card-option delete" onClick={handleDelete}>Delete</div>
                <div className="delete-card-option bottom-option" onClick={onClick}>Cancel</div>
            </div>
        </div>
    )
}


export default DeleteDeck;
