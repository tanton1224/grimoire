import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDecksThunk } from "../../store/decks";
import { getSpellsThunk } from "../../store/spellcards";
import RemoveCardModal from "../RemoveCardModal";
import AddCardField from "../AddCardField/AddCardField";
import './ProfileDeckDisplay.css'
import DeleteDeckModal from "../DeleteDeckModal";


function ProfileDeckDisplay() {
    const dispatch = useDispatch();
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
        decks = Object.values(decksObj);
    }

    useEffect(() => {
        dispatch(getDecksThunk())
        dispatch(getSpellsThunk())
    }, [dispatch])

    const toTitleCase = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }

    return (
        <div className="deck-display-container">
            {decks && spells && decks.map(deck => {
                return user.id === deck.user_id ? (
                    <div className="deck-display">
                        <div className="deck-header">
                            <h3>{deck.name}</h3>
                            <DeleteDeckModal deck={deck} />
                            <AddCardField deck={deck} />
                            <h3>{`${deck.spellcards.length} cards`}</h3>
                        </div>
                        {deck.spellcards !== '' ? <div className="deck-card-display">
                            {deck.spellcards.map((cardId, index) => {
                                let spell = spells[cardId];
                                return (
                                    <div className="deck-card-container">
                                        <div className="flip-card-container">
                                            <div className="flip-card">
                                                <div className="flip-card-front">
                                                    <div className="card-header">
                                                        <h3>{spell.name}</h3>
                                                        <h3>{toTitleCase(spell.school)} {spell.level}</h3>
                                                    </div>
                                                    <div className="flip-card-image-container">
                                                        <img src={spell.image_url} alt="spell image" />
                                                    </div>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div className="spell-info-container">
                                                        <div className="spell-info"><span className="info-span">Casting time: </span>{spell.casting_time}</div>
                                                        <div className="spell-info"><span className="info-span">Range: </span>{spell.range}</div>
                                                        <div className="spell-info"><span className="info-span">Components: </span>{spell.verbal ? 'V' : ''} {spell.somatic ? 'S' : ''} {spell.material ? `M (${spell.material})` : ''}</div>
                                                        <div className="spell-info"><span className="info-span">Duration: </span>{spell.duration}</div>
                                                        <div className="spell-info"><span className="info-span">Classes: </span>{spell.classes.join(', ')}</div>
                                                    </div>
                                                    <div className="spell-description">
                                                        {spell.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
