'use client'

import { useState } from 'react'
import { Spellcard } from '@/types'

interface Props {
  spell: Partial<Spellcard> & { name?: string }
}

export default function EncyclopediaCard({ spell }: Props) {
  const [isFlipped, setIsFlipped] = useState(false)

  const classes = Array.isArray(spell.classes)
    ? spell.classes
    : typeof spell.classes === 'string'
      ? (spell.classes as string).split(',').filter(Boolean)
      : []

  return (
    <div className="flip-card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front */}
        <div
          className="flip-card-front"
          style={{
            backgroundImage: spell.imageUrl
              ? `url(${spell.imageUrl})`
              : 'url(https://i.imgur.com/cwzMc1f.jpg)',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex-1" />
          <div className="flex flex-col items-center w-full py-2 bg-black/40">
            <div className="text-white text-[20px] text-center max-w-[250px] break-words font-semibold">
              {spell.name}
            </div>
            <div className="text-white text-[14px]">
              {spell.school
                ? spell.school.charAt(0).toUpperCase() + spell.school.slice(1).toLowerCase()
                : ''}{' '}
              {spell.level !== undefined ? (spell.level === 0 ? 'Cantrip' : `Level ${spell.level}`) : ''}
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <div className="w-full h-full p-[10px] flex flex-col gap-2">
            <div className="flex flex-col max-h-[35%] overflow-y-auto pt-[10px] px-[5px] gap-1 text-black text-sm">
              {spell.castingTime && (
                <div><span className="font-bold">Casting time: </span>{spell.castingTime}</div>
              )}
              {spell.range && (
                <div><span className="font-bold">Range: </span>{spell.range}</div>
              )}
              <div>
                <span className="font-bold">Components: </span>
                {spell.verbal ? 'V' : ''}{spell.somatic ? ' S' : ''}{spell.material ? ` M (${spell.material})` : ''}
              </div>
              {spell.duration && (
                <div>
                  <span className="font-bold">Duration: </span>
                  {spell.concentration ? `Concentration, ${spell.duration}` : spell.duration}
                </div>
              )}
              {classes.length > 0 && (
                <div><span className="font-bold">Classes: </span>{classes.join(', ')}</div>
              )}
            </div>
            <div className="flex-1 overflow-y-auto px-[5px] mb-[10px] border-t border-dashed border-black text-sm text-black break-words whitespace-pre-line pt-2">
              {spell.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
