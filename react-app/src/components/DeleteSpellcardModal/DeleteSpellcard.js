import { useDispatch } from "react-redux"
import { deleteCardThunk, getSpellsThunk } from "../../store/spellcards";
import './DeleteSpellcard.css'


function DeleteSpellcard({onClick, spell}) {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        dispatch(deleteCardThunk(spell.id))
        dispatch(getSpellsThunk())
        onClick()
    }

    return (
        <div className="delete-spellcard-container">
            <h3>Permanently delete spellcard?</h3>
            <div>This cannot be undone.</div>
            <div className="delete-options">
                <div className="delete-card-option delete" onClick={handleDelete}>Delete</div>
                <div className="delete-card-option bottom-option" onClick={onClick}>Cancel</div>
            </div>
        </div>
    )
}

export default DeleteSpellcard
