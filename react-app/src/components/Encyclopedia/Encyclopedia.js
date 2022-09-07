import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpellsThunk } from "../../store/spellcards";
import './Encyclopedia.css'
import EncyclopediaCard from "./EncyclopediaCard";

function Encyclopedia() {
    const dispatch = useDispatch();
    const encyclopedia = useSelector(state => state.spellcards?.encyclopedia)

    let spellcards;
    if (encyclopedia) {
        spellcards = Object.values(encyclopedia)
    }

    useEffect(() => {
        dispatch(getSpellsThunk())
    }, [dispatch])

    // const toggleFlip = (e) => {
    //     e.target.classList.toggle('is-flipped')
    // }


    return (
        <div className="encyclopedia-outer">
            <h1 style={{"color": "#25100B"}}>Compendium</h1>
            <h2>Standard D&D 5E Spells</h2>
            <div className="cards-container">
                {encyclopedia && spellcards.map(spell => {
                    return (
                        <EncyclopediaCard spell={spell}/>
                )})}
            </div>
        </div>
    )
}

export default Encyclopedia
