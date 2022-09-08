import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSpellsThunk } from "../../store/spellcards";
import DeleteSpellcardModal from "../DeleteSpellcardModal";
import EditSpellcardModal from "../EditSpellcardModal";
import EncyclopediaCard from "../Encyclopedia/EncyclopediaCard";


function ProfileCardsDisplay() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const homebrew = useSelector(state => state.spellcards?.homebrew);
    let cards;
    if (homebrew) {
        cards = Object.values(homebrew)
    }

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
    })

    useEffect(() => {
        dispatch(getSpellsThunk())
    }, [dispatch])

    const toTitleCase = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }

    return (
        <div className="profile-cards-display">
            <h1>Your Homebrew Cards:</h1>
            <div className="profile-cards-container">
            {cards && cards.map(spell => {
                return user?.id === spell.user_id ? (
                    <div>
                    <EncyclopediaCard spell={spell} />
                    <EditSpellcardModal spell={spell}/>
                    <DeleteSpellcardModal spell={spell}/>
                    </div>
                ) : ''
            })}
            </div>
        </div>
    )
}


export default ProfileCardsDisplay
