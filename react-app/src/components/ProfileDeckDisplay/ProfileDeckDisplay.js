import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDecksThunk } from "../../store/decks";
import { getSpellsThunk } from "../../store/spellcards";
import RemoveCardModal from "../RemoveCardModal";
import AddCardField from "../AddCardField/AddCardField";
import './ProfileDeckDisplay.css'
import DeleteDeckModal from "../DeleteDeckModal";
import { useHistory } from "react-router-dom";
import EncyclopediaCard from "../Encyclopedia/EncyclopediaCard";


function ProfileDeckDisplay() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const decksObj = useSelector(state => state.decks);
    const basic = useSelector(state => state.spellcards?.encyclopedia);
    const homebrew = useSelector(state => state.spellcards?.homebrew);
    let spells;
    let decks;
    if (basic && homebrew) {
        spells = {...basic, ...homebrew};
    }
    if (decksObj) {
        decks = Object.values(decksObj).reverse();
    }

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
    })

    useEffect(() => {
        dispatch(getDecksThunk())
        dispatch(getSpellsThunk())
    }, [dispatch])

    const toTitleCase = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }

    return (
        <div className="deck-display-container">
            <h1>Your Decks:</h1>
            {decks && spells && decks.map(deck => {
                return user?.id === deck.user_id ? (
                    <div className="deck-display">
                        <div className="deck-header">
                            <div className="deck-header-info">
                                <h2>{deck.name}</h2>
                                <h3>{`${deck.spellcards.length} cards`}</h3>
                            </div>
                            <AddCardField deck={deck} />
                        </div>
                        {deck.spellcards !== '' ? <div className="deck-card-display">
                            {deck.spellcards.map((cardId, index) => {
                                let spell = spells[cardId];
                                return (
                                    <div className="deck-card-container">
                                        <EncyclopediaCard spell={spell} />
                                        <RemoveCardModal deck={deck} index={index} spell={spell} />
                                    </div>
                                )
                            })}
                        </div> : <div>No cards yet! Go ahead and add some!</div>}
                    </div>
                ) : ''
            })}
        </div>
    )
}


export default ProfileDeckDisplay
