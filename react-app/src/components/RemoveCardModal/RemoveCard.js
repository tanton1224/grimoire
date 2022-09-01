import { useDispatch } from "react-redux"

function RemoveCard({ onClick, deck }) {
    const dispatch = useDispatch();


    const handleRemoval = async () => {

    }

    return (
        <div className="remove-card-container">
            <h3>Remove this card from your deck?</h3>
            <div>Yes</div>
            <div onClick={onClick}>No</div>
        </div>
    )
}


export default RemoveCard;
