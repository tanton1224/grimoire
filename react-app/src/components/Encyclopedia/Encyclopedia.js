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
        <div className="encyclopedia-container">
            {encyclopedia && spellcards.map(spell => {
                return (
                    <EncyclopediaCard spell={spell}/>
            )})}
        </div>
    )
}

export default Encyclopedia
