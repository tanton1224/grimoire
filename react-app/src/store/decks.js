const GET_DECKS = 'decks/GET_DECKS'
const DELETE_DECK = 'decks/DELETE_DECK'
const UPDATE_DECK = 'decks/UPDATE_DECK'
const CREATE_DECK = 'decks/CREATE_DECK'

const getDecks = (decks) => ({
    type: GET_DECKS,
    decks
})

const createDeck = (deck) => ({
    type: CREATE_DECK,
    deck
})

const deleteDeck = (deckId) => ({
    type: DELETE_DECK,
    deckId
})

const updateDeck = (deck) => ({
    type: UPDATE_DECK,
    deck
})


export const getDecksThunk = () => async dispatch => {
    const res = await fetch('/api/decks')

    if (res.ok) {
        const decks = await res.json()
        dispatch(getDecks(decks))
        return decks
    }
}

export const createDeckThunk = (payload) => async dispatch => {
    const res = await fetch('/api/decks', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const deck = await res.json()
        dispatch(createDeck(deck))
        return deck
    }
}

export const updateDeckThunk = (payload, deckId) => async dispatch => {
    const res = await fetch(`/api/decks/${deckId}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const deck = await res.json()
        dispatch(updateDeck(deck))
        return deck
    }
}

export const deleteDeckThunk = (deckId) => async dispatch => {
    const res = await fetch(`/api/decks/${deckId}`, { method: 'DELETE' })

    if (res.ok) {
        dispatch(deleteDeck(deckId))
    }
}

export default function reducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_DECKS: {
            newState = {}
            action.decks.decks.forEach(deck => newState[deck.id] = deck)
            return newState
        }
        case CREATE_DECK: {
            newState = {...state}
            newState[action.deck.id] = action.deck
            return newState
        }
        case DELETE_DECK: {
            newState = {...state}
            delete newState[action.deckId]
            return newState
        }
        case UPDATE_DECK: {
            newState = {...state}
            newState[action.deck.id] = action.deck
            return newState
        }
        default:
            return state
    }
}
