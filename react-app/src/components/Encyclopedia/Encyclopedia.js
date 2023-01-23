import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpellsThunk } from "../../store/spellcards";
import './Encyclopedia.css'
import EncyclopediaCard from "./EncyclopediaCard";

function Encyclopedia() {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('')
    const encyclopedia = useSelector(state => state.spellcards?.encyclopedia)

    let spellcards;
    if (encyclopedia) {
        spellcards = Object.values(encyclopedia)
    }

    useEffect(() => {
        dispatch(getSpellsThunk())
    }, [dispatch])

    const filteredSpells = spellcards?.filter(spell => {
        if (query === '') return spell;
        else if (spell.name.toLowerCase().includes(query.toLowerCase())) return spell;
        return null
    })

    return (
        <div className="encyclopedia-outer">
            <h1>Encyclopedia</h1>
            <h2>Standard D&D 5E Spells</h2>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search for a spell..."
                />
            <div className="cards-container">
                {encyclopedia && filteredSpells.map(spell => {
                    return (
                        <EncyclopediaCard spell={spell}/>
                )})}
            </div>
        </div>
    )
}

export default Encyclopedia
