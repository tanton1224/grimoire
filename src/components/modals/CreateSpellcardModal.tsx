'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Modal from '@/components/Modal'
import EncyclopediaCard from '@/components/EncyclopediaCard'
import { useStore } from '@/store/useStore'

const SCHOOL_IMAGES: Record<string, string> = {
  abjuration:   'https://i.imgur.com/1uStoTv.jpg',
  conjuration:  'https://i.imgur.com/Q5mfQyT.jpg',
  divination:   'https://i.imgur.com/nIh7v2W.jpg',
  enchantment:  'https://i.imgur.com/pM9dasx.jpg',
  evocation:    'https://i.imgur.com/32tLmkQ.jpg',
  illusion:     'https://i.imgur.com/d7xP8Lx.jpg',
  necromancy:   'https://i.imgur.com/B5zPdZI.jpg',
  transmutation:'https://i.imgur.com/zC3rsjS.jpg',
}

const CLASS_LIST = ['Bard', 'Cleric', 'Druid', 'Paladin', 'Sorcerer', 'Warlock', 'Wizard']

export default function CreateSpellcardModal() {
  const router = useRouter()
  const { data: session } = useSession()
  const upsertSpellcard = useStore((s) => s.upsertSpellcard)
  const [showModal, setShowModal] = useState(false)

  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')
  const [level, setLevel] = useState<string>('')
  const [range, setRange] = useState('')
  const [verbal, setVerbal] = useState(false)
  const [somatic, setSomatic] = useState(false)
  const [material, setMaterial] = useState('')
  const [materialField, setMaterialField] = useState(false)
  const [ritual, setRitual] = useState(false)
  const [duration, setDuration] = useState('')
  const [concentration, setConcentration] = useState(false)
  const [castingTime, setCastingTime] = useState('')
  const [school, setSchool] = useState('')
  const [selectedClasses, setSelectedClasses] = useState<Set<string>>(new Set())
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (SCHOOL_IMAGES[school]) setImageUrl(SCHOOL_IMAGES[school])
  }, [school])

  useEffect(() => {
    const errs: Record<string, string> = {}
    if (name.length >= 30) errs.name = 'Spell name character limit reached (30)'
    if (castingTime.length >= 25) errs.castingTime = 'Casting Time character limit reached (25)'
    if (range.length >= 25) errs.range = 'Range character limit reached (25)'
    if (material.length >= 200) errs.material = 'Material character limit reached (200)'
    if (duration.length >= 25) errs.duration = 'Duration character limit reached (25)'
    if (description.length >= 2000) errs.description = 'Description character limit reached (2000)'
    setErrors(errs)
  }, [name, castingTime, range, material, duration, description])

  useEffect(() => {
    if (!materialField) setMaterial('')
  }, [materialField])

  const toggleClass = (cls: string) => {
    setSelectedClasses((prev) => {
      const next = new Set(prev)
      next.has(cls) ? next.delete(cls) : next.add(cls)
      return next
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedClasses.size === 0) {
      setErrors((prev) => ({ ...prev, classes: 'Please select at least one class' }))
      return
    }
    if (!session?.user?.id) return

    const payload = {
      name, description, imageUrl, level: Number(level), range,
      verbal, somatic, material, ritual, duration, concentration,
      castingTime, school,
      classes: Array.from(selectedClasses).map((c) => c.toLowerCase()),
    }

    const res = await fetch('/api/spellcards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      const spell = await res.json()
      upsertSpellcard(spell)
      setShowModal(false)
      router.push('/profile/spellcards')
    }
  }

  const preview = {
    imageUrl, name, school, level: Number(level),
    castingTime, range, verbal, somatic, material, duration,
    classes: Array.from(selectedClasses),
    description,
  }

  const inputClass = 'p-2 rounded border border-grimoire-dark font-bonum text-sm w-full'
  const labelClass = 'font-bold text-sm text-grimoire-dark'

  return (
    <>
      <div className="px-3 text-grimoire-gold cursor-pointer" onClick={() => setShowModal(true)}>
        Create New Spell
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex gap-6 p-6 bg-grimoire-gold max-h-[90vh] overflow-y-auto max-w-[900px]">
            {/* Preview */}
            <div className="flex flex-col items-center">
              <div className="text-grimoire-dark font-bold mb-2 text-sm">Spellcard Preview (Click to Flip)</div>
              <EncyclopediaCard spell={preview} />
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 min-w-[280px]">
              <div className="text-grimoire-dark text-xl font-bold mb-2">Create Your Spellcard</div>
              <input type="text" placeholder="Spell Name" value={name} onChange={(e) => setName(e.target.value)} maxLength={30} required className={inputClass} />
              {errors.name && <div className="text-red-600 text-xs">{errors.name}</div>}
              <select value={school} onChange={(e) => setSchool(e.target.value)} required className={inputClass}>
                <option value="" disabled>Spell School</option>
                {Object.keys(SCHOOL_IMAGES).map((s) => (
                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
              <input type="number" placeholder="Spell Level (0 for cantrip)" value={level} onChange={(e) => setLevel(e.target.value)} min={0} max={9} required className={inputClass} />
              <input type="text" placeholder="Casting Time" value={castingTime} onChange={(e) => setCastingTime(e.target.value)} maxLength={25} required className={inputClass} />
              {errors.castingTime && <div className="text-red-600 text-xs">{errors.castingTime}</div>}
              <input type="text" placeholder="Range" value={range} onChange={(e) => setRange(e.target.value)} maxLength={25} required className={inputClass} />
              {errors.range && <div className="text-red-600 text-xs">{errors.range}</div>}
              <div className="flex gap-4 items-center">
                <span className={labelClass}>Components:</span>
                {(['V', 'S', 'M'] as const).map((c) => (
                  <label key={c} className="flex items-center gap-1 text-sm text-grimoire-dark">
                    {c}
                    <input type="checkbox"
                      checked={c === 'V' ? verbal : c === 'S' ? somatic : materialField}
                      onChange={() => c === 'V' ? setVerbal(!verbal) : c === 'S' ? setSomatic(!somatic) : setMaterialField(!materialField)}
                    />
                  </label>
                ))}
              </div>
              {materialField && (
                <input type="text" placeholder="Material components" value={material} onChange={(e) => setMaterial(e.target.value)} maxLength={200} required className={inputClass} />
              )}
              {errors.material && <div className="text-red-600 text-xs">{errors.material}</div>}
              <div className="flex gap-4">
                <label className="flex items-center gap-1 text-sm text-grimoire-dark font-bold">
                  Ritual: <input type="checkbox" checked={ritual} onChange={() => setRitual(!ritual)} />
                </label>
                <label className="flex items-center gap-1 text-sm text-grimoire-dark font-bold">
                  Concentration: <input type="checkbox" checked={concentration} onChange={() => setConcentration(!concentration)} />
                </label>
              </div>
              <input type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} maxLength={25} required className={inputClass} />
              {errors.duration && <div className="text-red-600 text-xs">{errors.duration}</div>}
              <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} maxLength={2000} required className={`${inputClass} h-24 resize-y`} />
              {errors.description && <div className="text-red-600 text-xs">{errors.description}</div>}
              <div>
                <div className={`${labelClass} mb-1`}>Classes:</div>
                <div className="flex flex-wrap gap-2">
                  {CLASS_LIST.map((cls) => (
                    <label key={cls} className="flex items-center gap-1 text-sm text-grimoire-dark">
                      {cls}:
                      <input type="checkbox" checked={selectedClasses.has(cls)} onChange={() => toggleClass(cls)} />
                    </label>
                  ))}
                </div>
                {errors.classes && <div className="text-red-600 text-xs mt-1">{errors.classes}</div>}
              </div>
              <button type="submit" className="mt-2 bg-grimoire-dark text-grimoire-gold py-2 rounded cursor-pointer hover:bg-grimoire-hover font-bonum">
                Submit
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>
  )
}
