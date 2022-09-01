import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select"
import { updateDeckThunk } from "../../store/decks";

function AddCardField({ deck }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const basic = useSelector(state => state.spellcards?.encyclopedia);
    const homebrew = useSelector(state => state.spellcards?.homebrew);
    const [ showDropdown, setShowDropdown ] = useState(false);
    const [ chosenCard, setChosenCard ] = useState('')


    let spells;
    if (basic && homebrew) {
        spells = Object.values({...basic, ...homebrew});
    }

    useEffect(() => {
        if (!showDropdown) return;

        const closeDropdown = () => {
        setShowDropdown(false);
        };

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener("click", closeDropdown);
    }, [showDropdown])


    let options = spells.map(spell => {
        return { value: spell, label: spell.name}
    })


    const handleAdd = async (e) => {
        e.preventDefault()

        let spellcards;
        if (deck.spellcards === '') {
            spellcards = [`${chosenCard.value.id}`]
        } else {
            deck.spellcards.push(`${chosenCard.value.id}`)
            spellcards = deck.spellcards.join(',')
        }

        const payload = {
            user_id: deck.user_id,
            name: deck.name,
            spellcards,
        }

        const success = await dispatch(updateDeckThunk(payload, deck.id))

        if (success) {
            history.push(`/decks/${deck.id}`)
            setChosenCard('')
        }
    }

    return (
        <form className="add-card-form" onSubmit={handleAdd}>
        <Select
            id="add-card-form"
            value={chosenCard}
            placeholder="Select a card to add..."
            onChange={value => setChosenCard(value)}
            options={options}
            className="add-card-select"
            required
        />
        <button type="submit">Submit</button>
        </form>

    )
}


export default AddCardField
