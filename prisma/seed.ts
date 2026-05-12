import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Users
  const hash = (pw: string) => bcrypt.hashSync(pw, 10)

  const demo = await prisma.user.create({
    data: { username: 'Demo', email: 'demo@aa.io', hashedPassword: hash('password') },
  })
  const marnie = await prisma.user.create({
    data: { username: 'marnie', email: 'marnie@aa.io', hashedPassword: hash('password') },
  })
  const bobbie = await prisma.user.create({
    data: { username: 'bobbie', email: 'bobbie@aa.io', hashedPassword: hash('password') },
  })

  // Encyclopedia spells
  await prisma.spellcard.createMany({
    data: [
      {
        name: 'Acid Arrow',
        description: `A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.\n\nAt Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.`,
        imageUrl: 'https://i.imgur.com/32tLmkQ.jpg',
        level: 2, range: '90 feet', verbal: true, somatic: true,
        material: "Powdered rhubarb leaf and an adder's stomach",
        ritual: false, duration: 'Instantaneous', concentration: false,
        castingTime: '1 action', school: 'evocation', classes: 'wizard',
        homebrew: false,
      },
      {
        name: 'Acid Splash',
        description: `You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.`,
        imageUrl: 'https://i.imgur.com/Q5mfQyT.jpg',
        level: 0, range: '60 feet', verbal: true, somatic: true, material: '',
        ritual: false, duration: 'Instantaneous', concentration: false,
        castingTime: '1 action', school: 'conjuration', classes: 'sorcerer,wizard',
        homebrew: false,
      },
      {
        name: 'Aid',
        description: `Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.\n\nAt Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.`,
        imageUrl: 'https://i.imgur.com/1uStoTv.jpg',
        level: 2, range: '30 feet', verbal: true, somatic: true,
        material: 'A tiny strip of white cloth',
        ritual: false, duration: '8 hours', concentration: false,
        castingTime: '1 action', school: 'abjuration', classes: 'cleric,paladin',
        homebrew: false,
      },
      {
        name: 'Alarm',
        description: `You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.\n\nA mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.`,
        imageUrl: 'https://i.imgur.com/1uStoTv.jpg',
        level: 1, range: '30 feet', verbal: true, somatic: true,
        material: 'A tiny bell and a piece of fine silver wire',
        ritual: true, duration: '8 hours', concentration: false,
        castingTime: '1 minute', school: 'abjuration', classes: 'ranger,wizard',
        homebrew: false,
      },
      {
        name: 'Alter Self',
        description: `You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.\n\nAquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.\n\nChange Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any.\n\nNatural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage.`,
        imageUrl: 'https://i.imgur.com/zC3rsjS.jpg',
        level: 2, range: 'Self', verbal: true, somatic: true, material: '',
        ritual: false, duration: 'Up to 1 hour', concentration: true,
        castingTime: '1 action', school: 'transmutation', classes: 'sorcerer,wizard',
        homebrew: false,
      },
      {
        name: 'Animal Friendship',
        description: `This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration.\n\nAt Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.`,
        imageUrl: 'https://i.imgur.com/pM9dasx.jpg',
        level: 1, range: '30 feet', verbal: true, somatic: true,
        material: 'A morsel of food',
        ritual: false, duration: '24 hours', concentration: false,
        castingTime: '1 action', school: 'enchantment', classes: 'bard,druid,ranger',
        homebrew: false,
      },
      {
        name: 'Animal Messenger',
        description: `By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description. You also speak a message of up to twenty-five words.\n\nAt Higher Levels: If you cast this spell using a spell slot of 3rd level or higher, the Duration of the spell increases by 48 hours for each slot level above 2nd.`,
        imageUrl: 'https://i.imgur.com/pM9dasx.jpg',
        level: 2, range: '30 feet', verbal: true, somatic: true,
        material: 'A morsel of food',
        ritual: true, duration: '24 hours', concentration: false,
        castingTime: '1 action', school: 'enchantment', classes: 'bard,druid,ranger',
        homebrew: false,
      },
      {
        name: 'Animal Shapes',
        description: `Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms.\n\nThe transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies.`,
        imageUrl: 'https://i.imgur.com/zC3rsjS.jpg',
        level: 8, range: '30 feet', verbal: true, somatic: true, material: '',
        ritual: false, duration: 'Up to 24 hours', concentration: true,
        castingTime: '1 action', school: 'transmutation', classes: 'druid',
        homebrew: false,
      },
      {
        name: 'Animate Dead',
        description: `This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature.\n\nThe creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends.`,
        imageUrl: 'https://i.imgur.com/B5zPdZI.jpg',
        level: 3, range: '10 feet', verbal: true, somatic: true,
        material: 'A drop of blood, a piece of flesh, and a pinch of bone dust',
        ritual: false, duration: 'Instantaneous', concentration: false,
        castingTime: '1 action', school: 'necromancy', classes: 'cleric,wizard',
        homebrew: false,
      },
      {
        name: 'Animate Objects',
        description: `Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.\n\nAt Higher Levels: If you cast this spell using a spell slot of 6th level or higher, you can animate two additional Objects for each slot level above 5th.`,
        imageUrl: 'https://i.imgur.com/zC3rsjS.jpg',
        level: 5, range: '120 feet', verbal: true, somatic: true, material: '',
        ritual: false, duration: 'Up to 1 minute', concentration: true,
        castingTime: '1 action', school: 'transmutation', classes: 'bard,sorcerer,wizard',
        homebrew: false,
      },
      {
        name: 'Antilife Shell',
        description: `A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs. The barrier lasts for the duration.\n\nThe barrier prevents an affected creature from passing or reaching through. If you move so that an affected creature is forced to pass through the barrier, the spell ends.`,
        imageUrl: 'https://i.imgur.com/1uStoTv.jpg',
        level: 5, range: 'Self (10-foot radius)', verbal: true, somatic: true, material: '',
        ritual: false, duration: 'Up to 1 hour', concentration: true,
        castingTime: '1 action', school: 'abjuration', classes: 'druid',
        homebrew: false,
      },
      {
        name: 'Antimagic Field',
        description: `A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can't be cast, summoned creatures disappear, and even magic items become mundane. Until the spell ends, the sphere moves with you, centered on you.\n\nSpells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can't protrude into it.`,
        imageUrl: 'https://i.imgur.com/1uStoTv.jpg',
        level: 8, range: 'Self (10-foot radius sphere)', verbal: true, somatic: true,
        material: 'A pinch of iron or iron fillings',
        ritual: false, duration: 'Up to 1 hour', concentration: true,
        castingTime: '1 action', school: 'abjuration', classes: 'cleric,wizard',
        homebrew: false,
      },
      {
        name: 'Antipathy Sympathy',
        description: `This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature. You invest the target with an aura that either attracts or repels the specified creatures for the duration.\n\nAntipathy. The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target.\n\nSympathy. The enchantment causes the specified creatures to feel an intense urge to approach the target.`,
        imageUrl: 'https://i.imgur.com/pM9dasx.jpg',
        level: 8, range: '60 feet', verbal: true, somatic: true,
        material: 'Either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect',
        ritual: false, duration: '10 days', concentration: false,
        castingTime: '1 hour', school: 'enchantment', classes: 'druid,wizard',
        homebrew: false,
      },
      {
        name: 'Arcane Eye',
        description: `You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.\n\nAs an action, you can move the eye up to 30 feet in any direction. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.`,
        imageUrl: 'https://i.imgur.com/nIh7v2W.jpg',
        level: 4, range: '30 feet', verbal: true, somatic: true,
        material: 'A bit of bat fur',
        ritual: false, duration: 'Up to 1 hour', concentration: true,
        castingTime: '1 action', school: 'divination', classes: 'wizard',
        homebrew: false,
      },
      {
        name: 'Arcane Hand',
        description: `You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell's duration, and it moves at your command, mimicking the movements of your own hand.\n\nClenched Fist. The hand strikes one creature or object within 5 feet of it. On a hit, the target takes 4d8 force damage.\n\nAt Higher Levels. When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 for each slot level above 5th.`,
        imageUrl: 'https://i.imgur.com/32tLmkQ.jpg',
        level: 5, range: '120 feet', verbal: true, somatic: true,
        material: 'An eggshell and a snakeskin glove',
        ritual: false, duration: 'Up to 1 minute', concentration: true,
        castingTime: '1 action', school: 'evocation', classes: 'wizard',
        homebrew: false,
      },
      {
        name: 'Arcane Lock',
        description: `You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute.\n\nWhile affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.`,
        imageUrl: 'https://i.imgur.com/1uStoTv.jpg',
        level: 2, range: 'Touch', verbal: true, somatic: true,
        material: 'Gold dust worth at least 25 gp, which the spell consumes',
        ritual: false, duration: 'Until dispelled', concentration: false,
        castingTime: '1 action', school: 'abjuration', classes: 'wizard',
        homebrew: false,
      },
      {
        name: 'Arcane Sword',
        description: `You create a sword-shaped plane of force that hovers within range. It lasts for the duration. When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack.`,
        imageUrl: 'https://i.imgur.com/32tLmkQ.jpg',
        level: 7, range: '60 feet', verbal: true, somatic: true,
        material: 'A miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp',
        ritual: false, duration: 'Up to 1 minute', concentration: true,
        castingTime: '1 action', school: 'evocation', classes: 'bard,wizard',
        homebrew: false,
      },
      {
        name: "Arcanist's Magic Aura",
        description: `You place an illusion on a creature or an object you touch so that divination spells reveal false information about it.\n\nFalse Aura. You change the way the target appears to spells and magical effects that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object's magical aura.\n\nMask. You change the way the target appears to spells and magical effects that detect creature types.`,
        imageUrl: 'https://i.imgur.com/d7xP8Lx.jpg',
        level: 2, range: 'Touch', verbal: true, somatic: true,
        material: 'A small square of silk',
        ritual: false, duration: '24 hours', concentration: false,
        castingTime: '1 action', school: 'illusion', classes: 'wizard',
        homebrew: false,
      },
      {
        name: 'Astral Projection',
        description: `You and up to eight willing creatures within range project your astral bodies into the Astral Plane. The material body you leave behind is unconscious and in a state of suspended animation; it doesn't need food or air and doesn't age.\n\nYour astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. The spell ends for you and your companions when you use your action to dismiss it.`,
        imageUrl: 'https://i.imgur.com/B5zPdZI.jpg',
        level: 9, range: '10 feet', verbal: true, somatic: true,
        material: 'For each creature you affect, one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes',
        ritual: false, duration: 'Special', concentration: false,
        castingTime: '1 hour', school: 'necromancy', classes: 'cleric,warlock,wizard',
        homebrew: false,
      },
      {
        name: 'Augury',
        description: `By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes.\n\nThe GM chooses from: Weal (good results), Woe (bad results), Weal and woe (both), or Nothing (results that aren't especially good or bad).`,
        imageUrl: 'https://i.imgur.com/nIh7v2W.jpg',
        level: 2, range: 'Self', verbal: true, somatic: true,
        material: 'Specially marked sticks, bones, or similar tokens worth at least 25 gp',
        ritual: true, duration: 'Instantaneous', concentration: false,
        castingTime: '1 minute', school: 'divination', classes: 'cleric',
        homebrew: false,
      },
      {
        name: 'Awaken',
        description: `After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10 and the ability to speak one language you know.\n\nThe awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it.`,
        imageUrl: 'https://i.imgur.com/zC3rsjS.jpg',
        level: 5, range: 'Touch', verbal: true, somatic: true,
        material: 'An agate worth at least 1,000 gp, which the spell consumes',
        ritual: false, duration: 'Instantaneous', concentration: false,
        castingTime: '8 hours', school: 'transmutation', classes: 'bard,druid',
        homebrew: false,
      },
    ],
  })

  // Demo homebrew spell (belongs to demo user)
  await prisma.spellcard.create({
    data: {
      name: 'Spellsteal',
      description: `If a creature is casting a 1st level spell, you may use your reaction to redirect and siphon the spell. Any material components required for the spell are consumed from the creature casting it and that creature loses a spell slot like normal. If you have stolen a spell, you can cast it on your next turn without requiring materials, without having known the spell, and without using a spell slot.\n\nAt Higher Levels. The level of spells that can be stolen increases by 1 for every level of spell slot above 4th used.`,
      imageUrl: 'https://i.imgur.com/1uStoTv.jpg',
      level: 3, range: '60 feet', verbal: true, somatic: true, material: '',
      ritual: false, duration: 'Instantaneous', concentration: false,
      castingTime: '1 reaction', school: 'abjuration',
      classes: 'bard,cleric,druid,paladin,sorcerer,warlock,wizard',
      homebrew: true,
      userId: demo.id,
    },
  })

  // Demo decks
  await prisma.deck.createMany({
    data: [
      { userId: demo.id,   name: 'Ryze Level 5 Sorcerer',    spellcards: '1,2,3,4,5' },
      { userId: marnie.id, name: 'Gandalf Level 15 Wizard',  spellcards: '6,7,8,9,10' },
      { userId: bobbie.id, name: 'Radagast Level 12 Wizard', spellcards: '11,12,13,14,15' },
    ],
  })

  console.log('Seed complete.')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
