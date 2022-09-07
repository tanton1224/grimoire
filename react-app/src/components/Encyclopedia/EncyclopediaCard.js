import { useState } from "react"

function EncyclopediaCard({ spell }) {
    const [ isFlipped, setIsFlipped ] = useState(false)

    const toTitleCase = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }

    return (
        <div className="flip-card-container">
            <div className={`flip-card ${isFlipped ? 'is-flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
                <div className={"flip-card-front"} style={{"backgroundImage": spell.image_url ? `url(${spell.image_url})` : "url(https://i.imgur.com/cwzMc1f.jpg)", "backgroundSize": "cover"}}>
                    <div className="card-spacer" style={{"color": "E8E1C4"}}>
                        .
                    </div>
                    <div className="card-header">
                        <div style={{"font-size": "20px"}}>{spell.name}</div>
                        <div style={{"font-size": "14px"}}>{spell.school ? toTitleCase(spell.school) : ''} {spell.level}</div>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="card-back-content">
                        <div className="spell-info-container">
                            <div className="spell-info"><span className="info-span">Casting time: </span>{spell.casting_time}</div>
                            <div className="spell-info"><span className="info-span">Range: </span>{spell.range}</div>
                            <div className="spell-info"><span className="info-span">Components: </span>{spell.verbal ? 'V' : ''} {spell.somatic ? 'S' : ''} {spell.material ? `M (${spell.material})` : ''}</div>
                            <div className="spell-info"><span className="info-span">Duration: </span>{spell.concentration ? `Concentration, ${spell.duration}` : spell.duration}</div>
                            <div className="spell-info"><span className="info-span">Classes: </span>{spell.classes.join(', ')}</div>
                        </div>
                        <div className="spell-description">
                            {spell.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EncyclopediaCard;
