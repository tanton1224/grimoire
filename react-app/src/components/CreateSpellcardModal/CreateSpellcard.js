import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from "react";

function CreateSpellcard() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [ name, setName ] = useState('')
    const [ imageUrl, setImageUrl ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ level, setLevel ] = useState('')
    const [ range, setRange ] = useState('')
    const [ verbal, setVerbal ] = useState(false)
    const [ somatic, setSomatic ] = useState(false)
    const [ material, setMaterial ] = useState('')
    const [ materialField, setMaterialField ] = useState(false)
    const [ ritual, setRitual ] = useState('')
    const [ duration, setDuration ] = useState('')
    const [ concentration, setConcentration ] = useState('')
    const [ castingTime, setCastingTime ] = useState('')
    const [ school, setSchool ] = useState('')
    const [ bard, setBard ] = useState(false)
    const [ cleric, setCleric ] = useState(false)
    const [ druid, setDruid ] = useState(false)
    const [ paladin, setPaladin ] = useState(false)
    const [ sorcerer, setSorcerer ] = useState(false)
    const [ warlock, setWarlock ] = useState(false)
    const [ wizard, setWizard ] = useState(false)
    const [ classes, setClasses ] = useState([])
    const [ errors, setErrors ] = useState({})

    useEffect(() => {
        if (school === "abjuration") {
            setImageUrl("https://i.imgur.com/JVXCmVa.png")
        }
        if (school === 'conjuration') {
            setImageUrl("https://i.imgur.com/NO9n7Ps.png")
        }
        if (school === 'divination') {
            setImageUrl("https://i.imgur.com/aufqUdc.png")
        }
        if (school === 'enchantment') {
            setImageUrl("https://i.imgur.com/CfDJy0N.png")
        }
        if (school === 'evocation') {
            setImageUrl("https://i.imgur.com/kbfadN4.png")
        }
        if (school === 'illusion') {
            setImageUrl("https://i.imgur.com/gRAAL0F.png")
        }
        if (school === 'necromancy') {
            setImageUrl("https://i.imgur.com/eTGz7Df.png")
        }
        if (school === 'transmutation') {
            setImageUrl("https://i.imgur.com/evIsNqj.png")
        }
    }, [school])

    useEffect(() => {
        const newErrors = {}
        if (name.length >= 50) {
            newErrors.name = "Spell name character limit reached (50)"
        }
        if (Object.values(newErrors).length > 0) {
            setErrors(newErrors)
        }
    }, [name])

    const handleSubmit = () => {
        const newErrors = {}

        if (bard) {
            classes.push('bard')
        }
        if (cleric) {
            classes.push('cleric')
        }
        if (druid) {
            classes.push('druid')
        }
        if (paladin) {
            classes.push('paladin')
        }
        if (sorcerer) {
            classes.push('sorcerer')
        }
        if (warlock) {
            classes.push('warlock')
        }
        if (wizard) {
            classes.push('wizard')
        }

        if (!bard && !cleric && !druid && !paladin && !sorcerer && !warlock && !wizard) {
            newErrors.class = "Please select at least one class"
        }




        if (Object.values(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            setErrors({})
            // handle submission
        }

    }


    return (
        <div className="create-spellcard-container">
            <form className="create-spellcard-form" handleSubmit={handleSubmit} >
                <div className="create-spellcard-front">
                    <div className="spell-school-image-container">
                        <img src={imageUrl} alt="Choose your spell school to see card preview!" />
                    </div>
                </div>
                <div className="create-spellcard-back">
                    <div className="spellcard-back-title">
                        <h3>Create Your Spellcard</h3>
                    </div>
                    <input
                        type="text"
                        placeholder="Spell Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        maxLength="50"
                        required
                    ></input>
                    {errors.name && <div className="create-spell-error">{errors.name}</div>}
                    <select value={school} placeholder="Spell School" onChange={e => setSchool(e.target.value)} required >
                        <option value="" disabled={true}>Spell School</option>
                        <option value={"abjuration"}>Abjuration</option>
                        <option value={"conjuration"}>Conjuration</option>
                        <option value={"divination"}>Divination</option>
                        <option value={"enchantment"}>Enchantment</option>
                        <option value={"evocation"}>Evocation</option>
                        <option value={"illusion"}>Illusion</option>
                        <option value={"necromancy"}>Necromancy</option>
                        <option value={"transmutation"}>Transmutation</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Spell Level"
                        value={level}
                        onChange={e => setLevel(e.target.value)}
                        min="0"
                        max="9"
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="Casting Time"
                        value={castingTime}
                        onChange={e => setCastingTime(e.target.value)}
                        maxLength="50"
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="Range"
                        value={range}
                        onChange={e => setRange(e.target.value)}
                        maxLength="50"
                        required
                    ></input>
                    <div className="components-container create-category">Components:
                        <label style={{"font-weight": "normal"}}> V
                            <input
                                type="checkbox"
                                value={verbal}
                                onChange={e => setVerbal(!verbal)}
                            ></input>
                        </label>
                        <label style={{"font-weight": "normal"}}> S
                            <input
                                type="checkbox"
                                value={somatic}
                                onChange={e => setSomatic(!somatic)}
                            ></input>
                        </label>
                        <label style={{"font-weight": "normal"}}> M
                            <input
                                type="checkbox"
                                value={materialField}
                                onChange={e => setMaterialField(!materialField)}
                            ></input>
                        </label>
                    </div>
                    {materialField ? <input
                        type="text"
                        placeholder="Material components"
                        value={material}
                        onChange={e => setMaterial(e.target.value)}
                        maxLength="200"
                    ></input>: ''}
                    <div className="ritual-concentration-container">
                        <label className="create-category">Ritual:
                            <input
                                type="checkbox"
                                value={ritual}
                                onChange={e => setRitual(!ritual)}
                            ></input>
                        </label>
                        <label className="create-category">Concentration:
                            <input
                                type="checkbox"
                                value={concentration}
                                onChange={e => setConcentration(!concentration)}
                            ></input>
                        </label>
                    </div>
                    <input
                        type="text"
                        placeholder="Duration"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        maxLength="50"
                    ></input>
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        maxLength="500"
                    ></textarea>
                    <div className="class-selector-container">
                        <div className="create-category">Classes: </div>
                        <div className="class-selector-options">
                            <label>Bard:
                                <input
                                    type="checkbox"
                                    value={bard}
                                    onChange={e => setBard(!bard)}
                                ></input>
                            </label>
                            <label>Cleric:
                                <input
                                    type="checkbox"
                                    value={cleric}
                                    onChange={e => setCleric(!cleric)}
                                ></input>
                            </label>
                            <label>Druid:
                                <input
                                    type="checkbox"
                                    value={druid}
                                    onChange={e => setDruid(!druid)}
                                ></input>
                            </label>
                            <label>Paladin:
                                <input
                                    type="checkbox"
                                    value={paladin}
                                    onChange={e => setPaladin(!paladin)}
                                ></input>
                            </label>
                            <label>Sorcerer:
                                <input
                                    type="checkbox"
                                    value={sorcerer}
                                    onChange={e => setSorcerer(!sorcerer)}
                                ></input>
                            </label>
                            <label>Warlock:
                                <input
                                    type="checkbox"
                                    value={warlock}
                                    onChange={e => setWarlock(!warlock)}
                                ></input>
                            </label>
                            <label>Wizard:
                                <input
                                    type="checkbox"
                                    value={wizard}
                                    onChange={e => setWizard(!wizard)}
                                ></input>
                            </label>
                        </div>
                    </div>
                    <button className="create-spell-submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateSpellcard
