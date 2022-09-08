import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSpellsThunk } from "../../store/spellcards";
import DeleteSpellcardModal from "../DeleteSpellcardModal";
import EditSpellcardModal from "../EditSpellcardModal";
import EncyclopediaCard from "../Encyclopedia/EncyclopediaCard";
import './ProfileCardsDisplay.css'


function ProfileCardsDisplay() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const homebrew = useSelector(state => state.spellcards?.homebrew);
    let cards;
    if (homebrew) {
        cards = Object.values(homebrew).reverse()
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
            <h1>Your Homebrew Spells:</h1>
            <div className="profile-cards-container">
            {cards && cards.map(spell => {
                return user?.id === spell.user_id ? (
                    <div className="spellcard-container">
                        <div className="spellcard-options">
                            <EditSpellcardModal spell={spell}/>
                            <DeleteSpellcardModal spell={spell}/>
                        </div>
                        <EncyclopediaCard spell={spell} />
                    </div>
                ) : ''
            })}
            </div>
        </div>
    )
}


export default ProfileCardsDisplay
