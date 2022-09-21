import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from "react";
import { createCardThunk, getSpellsThunk, updateCardThunk } from "../../store/spellcards";
import EncyclopediaCard from "../Encyclopedia/EncyclopediaCard";
import './EditSpellcard.css'

function EditSpellcard({ onClick, spell }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const [ name, setName ] = useState(spell.name)
    const [ imageUrl, setImageUrl ] = useState(spell.imageUrl)
    const [ description, setDescription ] = useState(spell.description)
    const [ level, setLevel ] = useState(spell.level)
    const [ range, setRange ] = useState(spell.range)
    const [ verbal, setVerbal ] = useState(spell.verbal)
    const [ somatic, setSomatic ] = useState(spell.somatic)
    const [ material, setMaterial ] = useState(spell.material)
    const [ materialField, setMaterialField ] = useState(material === '' ? false : true)
    const [ ritual, setRitual ] = useState(spell.ritual)
    const [ duration, setDuration ] = useState(spell.duration)
    const [ concentration, setConcentration ] = useState(spell.concentration)
    const [ castingTime, setCastingTime ] = useState(spell.casting_time)
    const [ school, setSchool ] = useState(spell.school)
    const [ bard, setBard ] = useState(spell.classes.includes('Bard'))
    const [ cleric, setCleric ] = useState(spell.classes.includes('Cleric'))
    const [ druid, setDruid ] = useState(spell.classes.includes('Druid'))
    const [ paladin, setPaladin ] = useState(spell.classes.includes('Paladin'))
    const [ sorcerer, setSorcerer ] = useState(spell.classes.includes('Sorcerer'))
    const [ warlock, setWarlock ] = useState(spell.classes.includes('Warlock'))
    const [ wizard, setWizard ] = useState(spell.classes.includes('Wizard'))

    const [ classes, setClasses ] = useState([])
    const [ errors, setErrors ] = useState({})

    useEffect(() => {
        if (school === "abjuration") {
            setImageUrl("https://i.imgur.com/1uStoTv.jpg")
        }
        if (school === 'conjuration') {
            setImageUrl("https://i.imgur.com/Q5mfQyT.jpg")
        }
        if (school === 'divination') {
            setImageUrl("https://i.imgur.com/nIh7v2W.jpg")
        }
        if (school === 'enchantment') {
            setImageUrl("https://i.imgur.com/pM9dasx.jpg")
        }
        if (school === 'evocation') {
            setImageUrl("https://i.imgur.com/32tLmkQ.jpg")
        }
        if (school === 'illusion') {
            setImageUrl("https://i.imgur.com/d7xP8Lx.jpg")
        }
        if (school === 'necromancy') {
            setImageUrl("https://i.imgur.com/B5zPdZI.jpg")
        }
        if (school === 'transmutation') {
            setImageUrl("https://i.imgur.com/zC3rsjS.jpg")
        }
    }, [school])

    useEffect(() => {
        const newErrors = {}

        if (name.length >= 30) {
            newErrors.name = "Spell name character limit reached (30)"
        }
        if (castingTime.length >= 25) {
            newErrors.castingTime = "Casting Time character limit reached (25)"
        }
        if (range.length >= 25) {
            newErrors.range = "Range character limit reached (25)"
        }
        if (material.length >= 200) {
            newErrors.material = "Material character limit reached (200)"
        }
        if (duration.length >= 25) {
            newErrors.duration = "Duration character limit reached (25)"
        }
        if (description.length >= 2000) {
            newErrors.description = "Description character limit reached (2000)"
        }


        if (Object.values(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            setErrors({})
        }
    }, [name, castingTime, range, material, duration, description, verbal])

    useEffect(() => {
        let newClasses = []

        if (bard) {
            newClasses.push('Bard')
        }
        if (cleric) {
            newClasses.push('Cleric')
        }
        if (druid) {
            newClasses.push('Druid')
        }
        if (paladin) {
            newClasses.push('Paladin')
        }
        if (sorcerer) {
            newClasses.push('Sorcerer')
        }
        if (warlock) {
            newClasses.push('Warlock')
        }
        if (wizard) {
            newClasses.push('Wizard')
        }

        setClasses(newClasses)

    }, [bard, cleric, druid, paladin, sorcerer, warlock, wizard])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}

        if (bard) {
            classes.push('Bard')
        }
        if (cleric) {
            classes.push('Cleric')
        }
        if (druid) {
            classes.push('Druid')
        }
        if (paladin) {
            classes.push('Paladin')
        }
        if (sorcerer) {
            classes.push('Sorcerer')
        }
        if (warlock) {
            classes.push('Warlock')
        }
        if (wizard) {
            classes.push('Wizard')
        }

        if (!bard && !cleric && !druid && !paladin && !sorcerer && !warlock && !wizard) {
            newErrors.class = "Please select at least one class"
        }


        if (Object.values(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            e.preventDefault()
            setErrors({})

            let setClasses = new Set(classes)

            const payload = {
                name,
                description,
                image_url: imageUrl,
                level: Number(level),
                range,
                verbal,
                somatic,
                material,
                ritual,
                duration,
                concentration,
                casting_time: castingTime,
                school,
                classes: Array.from(setClasses).join(','),
                homebrew: true,
                user_id: user.id
            }

            const success = await dispatch(updateCardThunk(payload, spell.id))

            if (success) {
                onClick()
                dispatch(getSpellsThunk())
                history.push('/profile/spellcards')
            }
        }

    }

    const toTitleCase = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }

    return (
        <div className="create-spellcard-container">
            <form className="create-spellcard-form" onSubmit={handleSubmit}>
                <div>
                    <div className="card-preview-title">{"Spellcard Preview (Click to Flip!)"}</div>
                    <EncyclopediaCard spell={{image_url: imageUrl, name, school, level, casting_time: castingTime, range, verbal, somatic, material, duration, classes}} />
                </div>
                <div className="create-spellcard-back">
                    <div className="spellcard-back-title">
                        <div>Edit Your Spellcard</div>
                    </div>
                    <input
                        type="text"
                        placeholder="Spell Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        maxLength="30"
                        required
                    ></input>
                    {errors.name && <div className="create-spell-error">{errors.name}</div>}
                    <select value={school} placeholder="Spell School" onChange={e => setSchool(e.target.value)} required >
                        <option value="" disabled={true}>Select Spell School</option>
                        <option value="abjuration">Abjuration</option>
                        <option value="conjuration">Conjuration</option>
                        <option value="divination">Divination</option>
                        <option value="enchantment">Enchantment</option>
                        <option value="evocation">Evocation</option>
                        <option value="illusion">Illusion</option>
                        <option value="necromancy">Necromancy</option>
                        <option value="transmutation">Transmutation</option>
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
                        maxLength="25"
                        required
                    ></input>
                    {errors.castingTime && <div className="create-spell-error">{errors.castingTime}</div>}
                    <input
                        type="text"
                        placeholder="Range"
                        value={range}
                        onChange={e => setRange(e.target.value)}
                        maxLength="25"
                        required
                    ></input>
                    {errors.range && <div className="create-spell-error">{errors.range}</div>}
                    <div className="components-container create-category">Components:
                        {verbal ? <label style={{"font-weight": "normal"}}> V
                            <input
                                type="checkbox"
                                value={verbal}
                                onChange={e => setVerbal(!verbal)}
                                checked
                            ></input>
                        </label>
                        : <label style={{"font-weight": "normal"}}> V
                            <input
                                type="checkbox"
                                value={verbal}
                                onChange={e => setVerbal(!verbal)}
                            ></input>
                        </label>}
                        {somatic ? <label style={{"font-weight": "normal"}}> S
                            <input
                                type="checkbox"
                                value={somatic}
                                onChange={e => setSomatic(!somatic)}
                                checked
                            ></input>
                        </label>
                        : <label style={{"font-weight": "normal"}}> S
                            <input
                                type="checkbox"
                                value={somatic}
                                onChange={e => setSomatic(!somatic)}
                            ></input>
                        </label>}
                        {materialField ? <label style={{"font-weight": "normal"}}> M
                            <input
                                type="checkbox"
                                value={materialField}
                                onChange={e => setMaterialField(!materialField)}
                                checked
                            ></input>
                        </label>
                        : <label style={{"font-weight": "normal"}}> M
                            <input
                                type="checkbox"
                                value={materialField}
                                onChange={e => setMaterialField(!materialField)}
                            ></input>
                        </label>}
                    </div>
                    {materialField ? <input
                        type="text"
                        placeholder="Material components"
                        value={material}
                        onChange={e => setMaterial(e.target.value)}
                        maxLength="2000"
                        required
                    ></input>
                    : ''}
                    {errors.material && <div className="create-spell-error">{errors.material}</div>}
                    <div className="ritual-concentration-container">
                        {ritual ? <label className="create-category">Ritual:
                            <input
                                type="checkbox"
                                value={ritual}
                                onChange={e => setRitual(!ritual)}
                                checked
                            ></input>
                        </label>
                        : <label className="create-category">Ritual:
                            <input
                                type="checkbox"
                                value={ritual}
                                onChange={e => setRitual(!ritual)}
                            ></input>
                        </label>}
                        {concentration ? <label className="create-category">Concentration:
                            <input
                                type="checkbox"
                                value={concentration}
                                onChange={e => setConcentration(!concentration)}
                                checked
                            ></input>
                        </label>
                        : <label className="create-category">Concentration:
                            <input
                                type="checkbox"
                                value={concentration}
                                onChange={e => setConcentration(!concentration)}
                            ></input>
                        </label>}
                    </div>
                    <input
                        type="text"
                        placeholder="Duration"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        maxLength="25"
                        required
                    ></input>
                    {errors.duration && <div className="create-spell-error">{errors.duration}</div>}
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        maxLength="500"
                    ></textarea>
                    {errors.description && <div className="create-spell-error">{errors.description}</div>}
                    <div className="class-selector-container">
                        <div className="create-category">Classes: </div>
                        <div className="class-selector-options">
                            {bard ? <label>Bard:
                                <input
                                    type="checkbox"
                                    value={bard}
                                    onChange={e => setBard(!bard)}
                                    checked
                                ></input>
                            </label>
                            : <label>Bard:
                                <input
                                    type="checkbox"
                                    value={bard}
                                    onChange={e => setBard(!bard)}
                                ></input>
                            </label>}
                            {cleric ? <label>Cleric:
                                <input
                                    type="checkbox"
                                    value={cleric}
                                    onChange={e => setCleric(!cleric)}
                                    checked
                                ></input>
                            </label>
                            : <label>Cleric:
                                <input
                                    type="checkbox"
                                    value={cleric}
                                    onChange={e => setCleric(!cleric)}
                                ></input>
                            </label>}
                            {druid ? <label>Druid:
                                <input
                                    type="checkbox"
                                    value={druid}
                                    onChange={e => setDruid(!druid)}
                                    checked
                                ></input>
                            </label>
                            : <label>Druid:
                                <input
                                    type="checkbox"
                                    value={druid}
                                    onChange={e => setDruid(!druid)}
                                ></input>
                            </label>}
                            {paladin ? <label>Paladin:
                                <input
                                    type="checkbox"
                                    value={paladin}
                                    onChange={e => setPaladin(!paladin)}
                                    checked
                                ></input>
                            </label>
                            : <label>Paladin:
                                <input
                                    type="checkbox"
                                    value={druid}
                                    onChange={e => setDruid(!druid)}
                                ></input>
                            </label>}
                            {sorcerer ? <label>Sorcerer:
                                <input
                                    type="checkbox"
                                    value={sorcerer}
                                    onChange={e => setSorcerer(!sorcerer)}
                                    checked
                                ></input>
                            </label>
                            : <label>Sorcerer:
                                <input
                                    type="checkbox"
                                    value={sorcerer}
                                    onChange={e => setSorcerer(!sorcerer)}
                                ></input>
                            </label>}
                            {warlock ? <label>Warlock:
                                <input
                                    type="checkbox"
                                    value={warlock}
                                    onChange={e => setWarlock(!warlock)}
                                    checked
                                ></input>
                            </label>
                            : <label>Warlock:
                                <input
                                    type="checkbox"
                                    value={warlock}
                                    onChange={e => setWarlock(!warlock)}
                                ></input>
                            </label>}
                            {wizard ? <label>Wizard:
                                <input
                                    type="checkbox"
                                    value={wizard}
                                    onChange={e => setWizard(!wizard)}
                                    checked
                                ></input>
                            </label> : <label>Wizard:
                                <input
                                    type="checkbox"
                                    value={wizard}
                                    onChange={e => setWizard(!wizard)}
                                ></input>
                            </label>}
                        </div>
                        {errors.classes && <div className="create-spell-error">{errors.classes}</div>}
                    </div>
                    <button className="create-spell-submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditSpellcard
