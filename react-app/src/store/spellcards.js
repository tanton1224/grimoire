const GET_SPELLS = 'spellcards/GET_SPELLS'
const DELETE_SPELL = 'spellcards/DELETE_SPELL'
const UPDATE_SPELL = 'spellcards/UPDATE_SPELL'
const CREATE_SPELL = 'spellcards/CREATE_SPELL'

const getSpells = (spells) => ({
    type: GET_SPELLS,
    spells
})

const createSpell = (spell) => ({
    type: CREATE_SPELL,
    spell
})

const deleteSpell = (spellId) => ({
    type: DELETE_SPELL,
    spellId
})

const updateSpell = (spell) => ({
    type: UPDATE_SPELL,
    spell
})


export const getSpellsThunk = () => async dispatch => {
    const res = await fetch('/api/spellcards')

    if (res.ok) {
        const spells = await res.json()
        dispatch(getSpells(spells))
        return spells
    }
}

export const createCardThunk = (payload) => async dispatch => {
    const res = await fetch('/api/spellcards', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const spell = await res.json()
        dispatch(createSpell(spell))
        return spell
    }
}

export const updateCardThunk = (payload, spellcardId) => async dispatch => {
    const res = await fetch(`/api/spellcards/${spellcardId}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const spell = await res.json()
        console.log(spell, "-- -- -- spell -- -- --")
        dispatch(updateSpell(spell))
        return spell
    }
}

export const deleteCardThunk = (spellcardId) => async dispatch => {
    const res = await fetch(`/api/spellcards/${spellcardId}`, { method: 'DELETE' })

    if (res.ok) {
        dispatch(deleteSpell(spellcardId))
    }
}


export default function reducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_SPELLS: {
            newState = {};
            newState.encyclopedia = {};
            newState.homebrew = {};
            action.spells.encyclopedia.forEach(spell => newState.encyclopedia[spell.id] = spell)
            action.spells.homebrew.forEach(spell => newState.homebrew[spell.id] = spell)
            return newState
        }
        case CREATE_SPELL || UPDATE_SPELL: {
            newState = {...state};
            newState.homebrew[action.spell.id] = action.spell
            return newState
        }
        case DELETE_SPELL: {
            newState = {...state}
            delete newState.homebrew[action.spellId]
            return newState
        }
        default:
            return state
    }
}
