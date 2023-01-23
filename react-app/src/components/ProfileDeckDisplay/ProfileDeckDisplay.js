import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDecksThunk } from "../../store/decks";
import { getSpellsThunk } from "../../store/spellcards";
import RemoveCardModal from "../RemoveCardModal";
import AddCardField from "../AddCardField/AddCardField";
import './ProfileDeckDisplay.css'
import { useHistory } from "react-router-dom";
import EncyclopediaCard from "../Encyclopedia/EncyclopediaCard";


function ProfileDeckDisplay() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const decksObj = useSelector(state => state.decks);
    const basic = useSelector(state => state.spellcards?.encyclopedia);
    const homebrew = useSelector(state => state.spellcards?.homebrew);
    const [query, setQuery] = useState('')

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
    }, [user, history])

    useEffect(() => {
        dispatch(getDecksThunk())
        dispatch(getSpellsThunk())
    }, [dispatch])


    const userHasDecks = (decks, user) => {
        let hasDecks = false
        decks.forEach(deck => {
            if (deck.user_id === user?.id) {
                hasDecks = true
            }
        })
        return hasDecks
    };

    const filteredDecks = decks.filter(deck => {
        if (query === '') return deck;
        else if (deck.name.toLowerCase().includes(query.toLowerCase())) return deck;
        return null;
    })

    return (
        <div className="deck-display-container">
            <h1>Your Decks:</h1>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for a deck..."
            />
            {decks && spells && userHasDecks(decks, user) ? filteredDecks.map(deck => {
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
                        </div> : <div className="empty-cards-message">No cards yet! Go ahead and add some!</div>}
                    </div>
                ) : ''
            }) : <div className="empty-deck-display">No decks yet! Go ahead and create some!</div>}
        </div>
    )
}


export default ProfileDeckDisplay
