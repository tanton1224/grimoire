import { useDispatch } from "react-redux"
import { deleteCardThunk, getSpellsThunk } from "../../store/spellcards";


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
            <div onClick={handleDelete}>Delete</div>
            <div onClick={onClick}>Cancel</div>
        </div>
    )
}

export default DeleteSpellcard
