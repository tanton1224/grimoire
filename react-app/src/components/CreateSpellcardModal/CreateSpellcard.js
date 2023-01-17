import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from "react";
import { createCardThunk, getSpellsThunk } from "../../store/spellcards";
import './CreateSpellcard.css'
import EncyclopediaCard from "../Encyclopedia/EncyclopediaCard";

function CreateSpellcard({ onClick }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const [ name, setName ] = useState('')
    const [ imageUrl, setImageUrl ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ level, setLevel ] = useState('')
    const [ range, setRange ] = useState('')
    const [ verbal, setVerbal ] = useState(false)
    const [ somatic, setSomatic ] = useState(false)
    const [ material, setMaterial ] = useState('')
    const [ materialField, setMaterialField ] = useState(false)
    const [ ritual, setRitual ] = useState(false)
    const [ duration, setDuration ] = useState('')
    const [ concentration, setConcentration ] = useState(false)
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
            newErrors.description =  "Description character limit reached (2000)"
        }


        if (Object.values(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            setErrors({})
        }
    }, [name, castingTime, range, material, duration, description])

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

    useEffect(() => {
        if (!materialField) {
            setMaterial('')
        }
    }, [materialField])

    const handleSubmit = async (e) => {
        e.preventDefault()

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

            const success = await dispatch(createCardThunk(payload))

            if (success) {
                onClick()
                dispatch(getSpellsThunk())
                history.push('/profile/spellcards')
            }
        }

    }

    return (
        <div className="create-spellcard-container">
            <form className="create-spellcard-form" onSubmit={handleSubmit} >
                <div>
                    <div className="card-preview-title">{"Spellcard Preview (Click to Flip)"}</div>
                    <EncyclopediaCard spell={{image_url: imageUrl, name, school, level, casting_time: castingTime, range, verbal, somatic, material, duration, classes, description}}/>
                </div>
                <div className="create-spellcard-back">
                    <div className="spellcard-back-title">
                        <div>Create Your Spellcard</div>
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
                        placeholder="Spell Level, 0 for cantrip"
                        value={level}
                        onChange={e => setLevel(e.target.value)}
                        min="0"
                        max="9"
                        maxLength="1"
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
                        required
                    ></input>
                    : ''}
                    {errors.material && <div className="create-spell-error">{errors.material}</div>}
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
                        maxLength="25"
                        required
                    ></input>
                    {errors.duration && <div className="create-spell-error">{errors.duration}</div>}
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        maxLength="2000"
                        required
                    ></textarea>
                    {errors.description && <div className="create-spell-error">{errors.description}</div>}
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
                        {errors.classes && <div className="create-spell-error">{errors.classes}</div>}
                    </div>
                    <button className="create-spell-submit-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateSpellcard
