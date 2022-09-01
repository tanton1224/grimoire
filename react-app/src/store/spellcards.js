const GET_SPELLS = 'spellcards/GET_SPELLS'

const getSpells = (spells) => ({
    type: GET_SPELLS,
    spells
})


export const getSpellsThunk = () => async dispatch => {
    const res = await fetch('/api/spellcards')

    if (res.ok) {
        const spells = await res.json()
        dispatch(getSpells(spells))
        return spells
    }
}


export default function reducer(state = {}, action) {
    let newState = {}
    switch (action.type) {
        case GET_SPELLS:
            newState.encyclopedia = {}
            newState.homebrew = {}
            action.spells.encyclopedia.forEach(spell => newState.encyclopedia[spell.id] = spell)
            action.spells.homebrew.forEach(spell => newState.homebrew[spell.id] = spell)
            return newState
        default:
            return state
    }
}
