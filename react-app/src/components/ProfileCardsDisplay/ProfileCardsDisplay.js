import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSpellsThunk } from "../../store/spellcards";
import EditSpellcardModal from "../EditSpellcardModal";


function ProfileCardsDisplay() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const homebrew = useSelector(state => state.spellcards?.homebrew);
    let cards;
    if (homebrew) {
        cards = Object.values(homebrew)
    }

    useEffect(() => {
        if (!user) {
            history.push('/login')
        }
    }, [])

    useEffect(() => {
        dispatch(getSpellsThunk())
    }, [dispatch])

    const toTitleCase = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }

    return (
        <div className="profile-cards-display">
            <h1>Your Homebrew Cards:</h1>
            <div className="profile-cards-container">
            {cards && cards.map(spell => {
                return user?.id === spell.user_id ? (
                    <div>
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
                    <EditSpellcardModal spell={spell}/>
                    </div>
                ) : ''
            })}
            </div>
        </div>
    )
}


export default ProfileCardsDisplay
