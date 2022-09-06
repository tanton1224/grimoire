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
            <div onClick={handleDelete}>Delete</div>
            <div onClick={onClick}>Cancel</div>
        </div>
    )
}


export default DeleteDeck;
