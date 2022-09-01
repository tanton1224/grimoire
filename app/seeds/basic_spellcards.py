from ..models import db, Spellcard

def seed_basic_spellcards():
    spell001 = Spellcard(
        name='Acid Arrow',
        description='''A shimmering green arrow streaks toward a target within range and
                    bursts in a spray of acid. Make a ranged spell attack against the target.
                    On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage
                    at the end of its next turn. On a miss, the arrow splashes the target with
                    acid for half as much of the initial damage and no damage at the end of
                    its next turn.\n
                    At Higher Levels: When you cast this spell using a spell slot of 3rd level
                    or higher, the damage (both initial and later) increases by 1d4 for each
                    slot level above 2nd.''',
        image_url='https://i.imgur.com/kbfadN4.png',
        level=2,
        range='90 feet',
        verbal=True,
        somatic=True,
        material="Powdered rhubarb leaf and an adder's stomach",
        ritual=False,
        duration='Instantaneous',
        concentration=False,
        casting_time='1 action',
        school='evocation',
        classes='wizard'
    )
    spell002 = Spellcard(
        name='Acid Splash',
        description='''You hurl a bubble of acid. Choose one creature within range, or choose
                    two creatures within range that are within 5 feet of each other. A target
                    must succeed on a Dexterity saving throw or take 1d6 acid damage.''',
        image_url='https://i.imgur.com/NO9n7Ps.png',
        level=0,
        range='60 feet',
        verbal=True,
        somatic=True,
        material="",
        ritual=False,
        duration='Instantaneous',
        concentration=False,
        casting_time='1 action',
        school='conjuration',
        classes='sorcerer,wizard'
    )
    spell003 = Spellcard(
        name='Aid',
        description="""Your spell bolsters your allies with toughness and resolve. Choose up
                    to three creatures within range. Each target’s hit point maximum and current
                    hit points increase by 5 for the duration.\n
                    At Higher Levels: When you cast this spell using a spell slot of 3rd level
                    or higher, a target’s hit points increase by an additional 5 for each slot
                    level above 2nd.""",
        image_url='https://i.imgur.com/JVXCmVa.png',
        level=2,
        range='30 feet',
        verbal=True,
        somatic=True,
        material="A tiny strip of white cloth",
        ritual=False,
        duration='8 hours',
        concentration=False,
        casting_time='1 action',
        school='abjuration',
        classes='cleric,paladin'
    )
    spell004 = Spellcard(
        name='Alarm',
        description="""You set an alarm against unwanted intrusion. Choose a door, a window, or
                    an area within range that is no larger than a 20-foot cube. Until the
                    spell ends, an alarm alerts you whenever a Tiny or larger creature touches
                    or enters the warded area. When you cast the spell, you can designate
                    creatures that won't set off the alarm. You also choose whether the alarm
                    is mental or audible.\n
                    A mental alarm alerts you with a ping in your mind if you are within 1
                    mile of the warded area. This ping awakens you if you are sleeping.
                    An audible alarm produces the sound of a hand bell for 10 seconds within
                    60 feet""",
        image_url='https://i.imgur.com/JVXCmVa.png',
        level=1,
        range='30 feet',
        verbal=True,
        somatic=True,
        material="A tiny bell and a piece of fine silver wire",
        ritual=True,
        duration='8 hours',
        concentration=False,
        casting_time='1 minute',
        school='abjuration',
        classes='ranger,wizard'
    )
    spell005 = Spellcard(
        name='Alter Self',
        description="""You assume a different form. When you cast the spell, choose one of
                    the following options, the effects of which last for the duration of the
                    spell. While the spell lasts, you can end one option as an action to gain
                    the benefits of a different one.\n
                    Aquatic Adaptation. You adapt your body to an aquatic environment,
                    sprouting gills and growing webbing between your fingers. You can breathe
                    underwater and gain a swimming speed equal to your walking speed.\n
                    Change Appearance. You transform your appearance. You decide what you look
                    like, including your height, weight, facial features, sound of your voice,
                    hair length, coloration, and distinguishing characteristics, if any. You
                    can make yourself appear as a member of another race, though none of your
                    statistics change. You also can’t appear as a creature of a different size
                    than you, and your basic shape stays the same; if you’re bipedal, you can’t
                    use this spell to become quadrupedal, for instance. At any time for the
                    duration of the spell, you can use your action to change your appearance
                    in this way again.\n
                    Natural Weapons. You grow claws, fangs, spines, horns, or a different
                    natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning,
                    piercing, or slashing damage, as appropriate to the natural weapon you
                    chose, and you are proficient with your unarmed strikes. Finally, the
                    natural weapon is magic and you have a +1 bonus to the attack and damage
                    rolls you make using it.
                    """,
        image_url='https://i.imgur.com/evIsNqj.png',
        level=2,
        range='Self',
        verbal=True,
        somatic=True,
        material="",
        ritual=False,
        duration='Concentration, Up to 1 hour',
        concentration=True,
        casting_time='1 action',
        school='transmutation',
        classes='sorcerer,wizard'
    )
    spell006 = Spellcard(
        name='Animal Friendship',
        description="""This spell lets you convince a beast that you mean it no harm. Choose
                    a beast that you can see within range. It must see and hear you. If the
                    beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the
                    beast must succeed on a Wisdom saving throw or be charmed by you for the
                    spell’s duration. If you or one of your companions harms the target, the
                    spells ends.\n
                    At Higher Levels: When you cast this spell using a spell slot of 2nd level
                    or higher, you can affect one additional beast for each slot level above
                    1st.""",
        image_url='https://i.imgur.com/CfDJy0N.png',
        level=1,
        range='30 feet',
        verbal=True,
        somatic=True,
        material="A morsel of food",
        ritual=False,
        duration='24 hours',
        concentration=False,
        casting_time='1 action',
        school='enchantment',
        classes='bard,druid,ranger'
    )
    spell007 = Spellcard(
        name='Animal Messenger',
        description="""By means of this spell, you use an animal to deliver a message. Choose
        a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You
        specify a location, which you must have visited, and a recipient who matches a general
        description, such as “a man or woman dressed in the uniform of the town guard” or “a
        red-haired dwarf wearing a pointed hat.” You also speak a message of up to twenty-five
        words. The target beast travels for the duration of the spell toward the specified
        location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles
        for other animals.\n
        At Higher Levels: If you cast this spell using a spell slot of 3rd level or higher,
        the Duration of the spell increases by 48 hours for each slot level above 2nd.""",
        image_url='https://i.imgur.com/CfDJy0N.png',
        level=2,
        range='30 feet',
        verbal=True,
        somatic=True,
        material="A morsel of food",
        ritual=True,
        duration='24 hours',
        concentration=False,
        casting_time='1 action',
        school='enchantment',
        classes='bard,druid,ranger'
    )
    spell008 = Spellcard(
        name='Animal Shapes',
        description="""Your magic turns others into beasts. Choose any number of willing creatures
        that you can see within range. You transform each target into the form of a Large or
        smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use
        your action to transform affected creatures into new forms.\n
        The transformation lasts for the duration for each target, or until the target drops
        to 0 hit points or dies. You can choose a different form for each target. A target’s
        game statistics are replaced by the statistics of the chosen beast, though the target
        retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes
        the hit points of its new form, and when it reverts to its normal form, it returns to
        the number of hit points it had before it transformed. If it reverts as a result of
        dropping to 0 hit points, any excess damage carries over to its normal form. As long
        as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it
        isn’t knocked unconscious. The creature is limited in the actions it can perform by
        the nature of its new form, and it can’t speak or cast spells.\n
        The target’s gear melds into the new form. The target can’t activate, wield, or
        otherwise benefit from any of its equipment.""",
        image_url='https://i.imgur.com/evIsNqj.png',
        level=8,
        range='30 feet',
        verbal=True,
        somatic=True,
        material="",
        ritual=False,
        duration='Concentration, Up to 24 hours',
        concentration=True,
        casting_time='1 action',
        school='transmutation',
        classes='druid'
    )
    spell009 = Spellcard(
        name='Animate Dead',
        description="""This spell creates an undead servant. Choose a pile of bones or a corpse
        of a Medium or Small humanoid within range. Your spell imbues the target with a foul
        mimicry of life, raising it as an undead creature. The target becomes a skeleton if you
        chose bones or a zombie if you chose a corpse (the GM has the creature’s game
        statistics). On each of your turns, you can use a bonus action to mentally command any
        creature you made with this spell if the creature is within 60 feet of you (if you
        control multiple creatures, you can command any or all of them at the same time, issuing
        the same command to each one). You decide what action the creature will take and where
        it will move during its next turn, or you can issue a general command, such as to guard a
        particular chamber or corridor. If you issue no commands, the creature only defends
        itself against hostile creatures. Once given an order, the creature continues to follow
        it until its task is complete. The creature is under your control for 24 hours, after
        which it stops obeying any command you’ve given it. To maintain control of the creature
        for another 24 hours, you must cast this spell on the creature again before the current
        24-hour period ends. This use of the spell reasserts your control over up to four
        creatures you have animated with this spell, rather than animating a new one.""",
        image_url='https://i.imgur.com/eTGz7Df.png',
        level=3,
        range='10 feet',
        verbal=True,
        somatic=True,
        material="A drop of blood, a piece of flesh, and a pinch of bone dust",
        ritual=False,
        duration='Instantaneous',
        concentration=False,
        casting_time='1 action',
        school='necromancy',
        classes='cleric,wizard'
    )
    spell010 = Spellcard(
        name='Animate Objects',
        description="""Objects come to life at your command. Choose up to ten nonmagical
        objects within range that are not being worn or carried. Medium targets count as two
        objects, Large targets count as four objects, Huge targets count as eight objects.
        You can’t animate any object larger than Huge. Each target animates and becomes a
        creature under your control until the spell ends or until reduced to 0 hit points.
        As a bonus action, you can mentally command any creature you made with this spell if
        the creature is within 500 feet of you (if you control multiple creatures, you can
        command any or all of them at the same time, issuing the same command to each one).
        You decide what action the creature will take and where it will move during its next
        turn, or you can issue a general command, such as to guard a particular chamber or
        corridor. If you issue no commands, the creature only defends itself against hostile
        creatures. Once given an order, the creature continues to follow it until its task is
        complete. Animated Object Statistics Size HP AC Attack Str Dex Tiny 20 18 +8 to hit,
        1d4 + 4 damage 4 18 Small 25 16 +6 to hit, 1d8 + 2 damage 6 14 Medium 40 13 +5 to hit,
        2d6 + 1 damage 10 12 Large 50 10 +6 to hit, 2d10 + 2 damage 14 10 Huge 80 10 +8 to
        hit, 2d12 + 4 damage 18 6 An animated object is a construct with AC, hit points,
        attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and
        its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if
        the object lacks legs or other appendages it can use for locomotion, it instead has a
        flying speed of 30 feet and can hover. If the object is securely attached to a surface
        or a larger object, such as a chain bolted to a wall, its speed is 0. It has
        blindsight with a radius of 30 feet and is blind beyond that distance. When the
        animated object drops to 0 hit points, it reverts to its original object form, and
        any remaining damage carries over to its original object form. If you command an
        object to attack, it can make a single melee attack against a creature within 5 feet
        of it. It makes a slam attack with an attack bonus and bludgeoning damage determined
        by its size. The GM might rule that a specific object inflicts slashing or piercing
        damage based on its form.\n
        At Higher Levels: If you cast this spell using a spell slot of 6th level or higher,
        you can animate two additional Objects for each slot level above 5th.""",
        image_url='https://i.imgur.com/evIsNqj.png',
        level=5,
        range='120 feet',
        verbal=True,
        somatic=True,
        material="",
        ritual=False,
        duration='Concentration, Up to 1 minute',
        concentration=True,
        casting_time='1 action',
        school='transmutation',
        classes='bard,sorcerer,wizard'
    )
    spell011 = Spellcard(
        name='Antilife Shell',
        description="""A shimmering barrier extends out from you in a 10-foot radius and moves
        with you, remaining centered on you and hedging out creatures other than undead and
        constructs. The barrier lasts for the duration.\n
        The barrier prevents an affected creature from passing or reaching through. An
        affected creature can cast spells or make attacks with ranged or reach weapons
        through the barrier.\n
        If you move so that an affected creature is forced to pass through the barrier,
        the spell ends.""",
        image_url='https://i.imgur.com/JVXCmVa.png',
        level=5,
        range='Self (10-foot radius)',
        verbal=True,
        somatic=True,
        material="",
        ritual=False,
        duration='Concentration, Up to 1 hour',
        concentration=True,
        casting_time='1 action',
        school='abjuration',
        classes='druid'
    )
    spell012 = Spellcard(
        name='Antimagic Field',
        description="""A 10-foot-radius invisible sphere of antimagic surrounds you. This area
        is divorced from the magical energy that suffuses the multiverse. Within the sphere,
        spells can’t be cast, summoned creatures disappear, and even magic items become
        mundane. Until the spell ends, the sphere moves with you, centered on you.
        Spells and other magical effects, except those created by an artifact or a deity,
        are suppressed in the sphere and can’t protrude into it. A slot expended to cast a
        suppressed spell is consumed. While an effect is suppressed, it doesn’t function, but
        the time it spends suppressed counts against its duration.\n
        Targeted Effects. Spells and other magical effects, such as magic missile and charm
        person, that target a creature or an object in the sphere have no effect on that
        target.\n
        Areas of Magic. The area of another spell or magical effect, such as fireball, can’t
        extend into the sphere. If the sphere overlaps an area of magic, the part of the area
        that is covered by the sphere is suppressed. For example, the flames created by a wall
        of fire are suppressed within the sphere, creating a gap in the wall if the overlap is
        large enough.\n
        Spells. Any active spell or other magical effect on a creature or an object in the
        sphere is suppressed while the creature or object is in it.\n
        Magic Items. The properties and powers of magic items are suppressed in the sphere.
        For example, a +1 longsword in the sphere functions as a nonmagical longsword.
        A magic weapon’s properties and powers are suppressed if it is used against a target
        in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of
        magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or
        throw a magic spear at a target outside the sphere), the magic of the item ceases to
        be suppressed as soon as it exits.\n
        Magical Travel. Teleportation and planar travel fail to work in the sphere, whether
        the sphere is the destination or the departure point for such magical travel. A portal
        to another location, world, or plane of existence, as well as an opening to an
        extradimensional space such as that created by the rope trick spell, temporarily
        closes while in the sphere.\n
        Creatures and Objects. A creature or object summoned or created by magic temporarily
        winks out of existence in the sphere. Such a creature instantly reappears once the
        space the creature occupied is no longer within the sphere.\n
        Dispel Magic. Spells and magical effects such as dispel magic have no effect on the
        sphere. Likewise, the spheres created by different antimagic field spells don’t
        nullify each other.""",
        image_url='https://i.imgur.com/JVXCmVa.png',
        level=8,
        range='Self (10-foot radius sphere)',
        verbal=True,
        somatic=True,
        material="A pinch of iron or iron fillings",
        ritual=False,
        duration='Concentration, Up to 1 hour',
        concentration=True,
        casting_time='1 action',
        school='abjuration',
        classes='cleric,wizard'
    )
    spell013 = Spellcard(
        name='Antipathy Sympathy',
        description="""This spell attracts or repels creatures of your choice. You target
        something within range, either a Huge or smaller object or creature or an area that is
        no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as
        red dragons, goblins, or vampires. You invest the target with an aura that either
        attracts or repels the specified creatures for the duration. Choose antipathy or
        sympathy as the aura’s effect.\n
        Antipathy. The enchantment causes creatures of the kind you designated to feel an
        intense urge to leave the area and avoid the target. When such a creature can see
        the target or comes within 60 feet of it, the creature must succeed on a Wisdom
        saving throw or become frightened. The creature remains frightened while it can see
        the target or is within 60 feet of it. While frightened by the target, the creature
        must use its movement to move to the nearest safe spot from which it can’t see the
        target. If the creature moves more than 60 feet from the target and can’t see it, the
        creature is no longer frightened, but the creature becomes frightened again if it
        regains sight of the target or moves within 60 feet of it.\n
        Sympathy. The enchantment causes the specified creatures to feel an intense urge to
        approach the target while within 60 feet of it or able to see it. When such a
        creature can see the target or comes within 60 feet of it, the creature must succeed
        on a Wisdom saving throw or use its movement on each of its turns to enter the area
        or move within reach of the target. When the creature has done so, it can’t willingly
        move away from the target.\n
        If the target damages or otherwise harms an affected creature, the affected creature
        can make a Wisdom saving throw to end the effect, as described below.
        Ending the Effect. If an affected creature ends its turn while not within 60 feet of
        the target or able to see it, the creature makes a Wisdom saving throw. On a
        successful save, the creature is no longer affected by the target and recognizes the
        feeling of repugnance or attraction as magical. In addition, a creature affected by
        the spell is allowed another Wisdom saving throw every 24 hours while the spell
        persists.\n
        A creature that successfully saves against this effect is immune to it for 1 minute,
        after which time it can be affected again.""",
        image_url='https://i.imgur.com/CfDJy0N.png',
        level=8,
        range='60 feet',
        verbal=True,
        somatic=True,
        material="""Either a lump of alum soaked in vinegar for the antipathy effect or a drop
        of honey for the sympathy effect""",
        ritual=False,
        duration='10 days',
        concentration=False,
        casting_time='1 hour',
        school='enchantment',
        classes='druid,wizard'
    )
    spell014 = Spellcard(
        name='Arcane Eye',
        description="""You create an invisible, magical eye within range that hovers in the
        air for the duration.\n
        You mentally receive visual information from the eye, which has normal vision and
        darkvision out to 30 feet. The eye can look in every direction.\n
        As an action, you can move the eye up to 30 feet in any direction. There is no limit
        to how far away from you the eye can move, but it can’t enter another plane of
        existence.\n
        A solid barrier blocks the eye’s movement, but the eye can pass through an opening
        as small as 1 inch in diameter.""",
        image_url='https://i.imgur.com/aufqUdc.png',
        level=4,
        range='30 feet',
        verbal=True,
        somatic=True,
        material="A bit of bat fur",
        ritual=False,
        duration='Concentration, Up to 1 hour',
        concentration=True,
        casting_time='1 action',
        school='divination',
        classes='wizard'
    )
    spell015 = Spellcard(
        name='Arcane Hand',
        description="""You create a Large hand of shimmering, translucent force in an
        unoccupied space that you can see within range. The hand lasts for the spell’s
        duration, and it moves at your command, mimicking the movements of your own hand.
        The hand is an object that has AC 20 and hit points equal to your hit point maximum.
        If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a
        Dexterity of 10 (+0). The hand doesn’t fill its space.\n
        When you cast the spell and as a bonus action on your subsequent turns, you can move
        the hand up to 60 feet and then cause one of the following effects with it.\n
        Clenched Fist. The hand strikes one creature or object within 5 feet of it. Make a
        melee spell attack for the hand using your game statistics. On a hit, the target takes
        4d8 force damage.\n
        Forceful Hand. The hand attempts to push a creature within 5 feet of it in a direction
        you choose. Make a check with the hand’s Strength contested by the Strength
        (Athletics) check of the target. If the target is Medium or smaller, you have
        advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus
        a number of feet equal to five times your spellcasting ability modifier. The hand
        moves with the target to remain within 5 feet of it.\n
        Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet
        of it. You use the hand’s Strength score to resolve the grapple. If the target is
        Medium or smaller, you have advantage on the check. While the hand is grappling the
        target, you can use a bonus action to have the hand crush it. When you do so, the
        target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.\n
        Interposing Hand. The hand interposes itself between you and a creature you choose
        until you give the hand a different command. The hand moves to stay between you and
        the target, providing you with half cover against the target. The target can’t move
        through the hand’s space if its Strength score is less than or equal to the hand’s
        Strength score. If its Strength score is higher than the hand’s Strength score, the
        target can move toward you through the hand’s space, but that space is difficult
        terrain for the target.\n
        At Higher Levels. When you cast this spell using a spell slot of 6th level or higher,
        the damage from the clenched fist option increases by 2d8 and the damage from the
        grasping hand increases by 2d6 for each slot level above 5th.""",
        image_url='https://i.imgur.com/kbfadN4.png',
        level=5,
        range='120 feet',
        verbal=True,
        somatic=True,
        material="An eggshell and a snakeskin glove",
        ritual=False,
        duration='Concentration, Up to 1 minute',
        concentration=True,
        casting_time='1 action',
        school='evocation',
        classes='wizard'
    )
    spell016 = Spellcard(
        name='Arcane Lock',
        description="""You touch a closed door, window, gate, chest, or other entryway, and
        it becomes locked for the duration. You and the creatures you designate when you
        cast this spell can open the object normally. You can also set a password that, when
        spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise,
        it is impassable until it is broken or the spell is dispelled or suppressed. Casting
        knock on the object suppresses arcane lock for 10 minutes.\n
        While affected by this spell, the object is more difficult to break or force open;
        the DC to break it or pick any locks on it increases by 10.""",
        image_url='https://i.imgur.com/JVXCmVa.png',
        level=2,
        range='Touch',
        verbal=True,
        somatic=True,
        material="Gold dust worth at least 25 gp, which the spell consumes",
        ritual=False,
        duration='Until dispelled',
        concentration=False,
        casting_time='1 action',
        school='abjuration',
        classes='wizard'
    )
    spell017 = Spellcard(
        name='Arcane Sword',
        description="""You create a sword-shaped plane of force that hovers within range.
        It lasts for the duration.\n
        When the sword appears, you make a melee spell attack against a target of your choice
        within 5 feet of the sword. On a hit, the target takes 3d10 force damage. Until the
        spell ends, you can use a bonus action on each of your turns to move the sword up to
        20 feet to a spot you can see and repeat this attack against the same target or a
        different one.""",
        image_url='https://i.imgur.com/kbfadN4.png',
        level=7,
        range='60 feet',
        verbal=True,
        somatic=True,
        material="""A miniature platinum sword with a grip and pommel of copper and zinc, worth
        250 gp""",
        ritual=False,
        duration='Concentration, Up to 1 minute',
        concentration=True,
        casting_time='1 action',
        school='evocation',
        classes='bard,wizard'
    )
    spell018 = Spellcard(
        name="Arcanist's Magic Aura",
        description="""You place an illusion on a creature or an object you touch so that
        divination spells reveal false information about it. The target can be a willing
        creature or an object that isn’t being carried or worn by another creature.
        When you cast the spell, choose one or both of the following effects. The effect
        lasts for the duration. If you cast this spell on the same creature or object every
        day for 30 days, placing the same effect on it each time, the illusion lasts until it
        is dispelled.\n
        False Aura. You change the way the target appears to spells and magical effects, such
        as detect magic, that detect magical auras. You can make a nonmagical object appear
        magical, a magical object appear nonmagical, or change the object’s magical aura so
        that it appears to belong to a specific school of magic that you choose. When you use
        this effect on an object, you can make the false magic apparent to any creature that
        handles the item.\n
        Mask. You change the way the target appears to spells and magical effects that detect
        creature types, such as a paladin’s Divine Sense or the trigger of a symbol spell.
        You choose a creature type and other spells and magical effects treat the target as
        if it were a creature of that type or of that alignment.""",
        image_url='https://i.imgur.com/gRAAL0F.png',
        level=2,
        range='Touch',
        verbal=True,
        somatic=True,
        material="A small square of silk",
        ritual=False,
        duration='24 hours',
        concentration=False,
        casting_time='1 action',
        school='illusion',
        classes='wizard'
    )
    spell019 = Spellcard(
        name='Astral Projection',
        description="""You and up to eight willing creatures within range project your astral
        bodies into the Astral Plane (the spell fails and the casting is wasted if you are
        already on that plane). The material body you leave behind is unconscious and in a
        state of suspended animation; it doesn’t need food or air and doesn’t age.\n
        Your astral body resembles your mortal form in almost every way, replicating your
        game statistics and possessions. The principal difference is the addition of a
        silvery cord that extends from between your shoulder blades and trails behind you,
        fading to invisibility after 1 foot. This cord is your tether to your material body.
        As long as the tether remains intact, you can find your way home. If the cord is
        cut—something that can happen only when an effect specifically states that it
        does—your soul and body are separated, killing you instantly.\n
        Your astral form can freely travel through the Astral Plane and can pass through
        portals there leading to any other plane. If you enter a new plane or return to the
        plane you were on when casting this spell, your body and possessions are transported
        along the silver cord, allowing you to re-enter your body as you enter the new plane.
        Your astral form is a separate incarnation. Any damage or other effects that apply to
        it have no effect on your physical body, nor do they persist when you return to it.
        The spell ends for you and your companions when you use your action to dismiss it.
        When the spell ends, the affected creature returns to its physical body, and it awakens.
        The spell might also end early for you or one of your companions. A successful dispel
        magic spell used against an astral or physical body ends the spell for that creature.\n
        If a creature’s original body or its astral form drops to 0 hit points, the spell ends
        for that creature. If the spell ends and the silver cord is intact, the cord pulls the
        creature’s astral form back to its body, ending its state of suspended animation.\n
        If you are returned to your body prematurely, your companions remain in their astral
        forms and must find their own way back to their bodies, usually by dropping to 0 hit
        points.""",
        image_url='https://i.imgur.com/eTGz7Df.png',
        level=9,
        range='10 feet',
        verbal=True,
        somatic=True,
        material="""For each creature you affect with this spell, you must provide one jacinth
        worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp,
        all of which the spell consumes""",
        ritual=False,
        duration='Special',
        concentration=False,
        casting_time='1 hour',
        school='necromancy',
        classes='cleric,warlock,wizard'
    )
    spell020 = Spellcard(
        name='Augury',
        description="""By casting gem-inlaid sticks, rolling dragon bones, laying out ornate
        cards, or employing some other divining tool, you receive an omen from an otherworldly
        entity about the results of a specific course of action that you plan to take within
        the next 30 minutes. The GM chooses from the following possible omens:\n
        Weal, for good results\n
        Woe, for bad results\n
        Weal and woe, for both good and bad results\n
        Nothing, for results that aren’t especially good or bad\n
        The spell doesn’t take into account any possible circumstances that might change the
        outcome, such as the casting of additional spells or the loss or gain of a companion.
        If you cast the spell two or more times before completing your next long rest, there
        is a cumulative 25 percent chance for each casting after the first that you get a
        random reading. The GM makes this roll in secret.""",
        image_url='https://i.imgur.com/aufqUdc.png',
        level=2,
        range='Self',
        verbal=True,
        somatic=True,
        material="Specially marked sticks, bones, or similar tokens worth at least 25 gp",
        ritual=True,
        duration='Instantaneous',
        concentration=False,
        casting_time='1 minute',
        school='divination',
        classes='cleric'
    )
    spell021 = Spellcard(
        name='Awaken',
        description="""After spending the casting time tracing magical pathways within a
        precious gemstone, you touch a Huge or smaller beast or plant. The target must have
        either no Intelligence score or an Intelligence of 3 or less. The target gains an
        Intelligence of 10. The target also gains the ability to speak one language you know.
        If the target is a plant, it gains the ability to move its limbs, roots, vines,
        creepers, and so forth, and it gains senses similar to a human’s. Your GM chooses
        statistics appropriate for the awakened plant, such as the statistics for the awakened
        shrub or the awakened tree.\n
        The awakened beast or plant is charmed by you for 30 days or until you or your
        companions do anything harmful to it. When the charmed condition ends, the awakened
        creature chooses whether to remain friendly to you, based on how you treated it
        while it was charmed.""",
        image_url='https://i.imgur.com/evIsNqj.png',
        level=5,
        range='Touch',
        verbal=True,
        somatic=True,
        material="An agate worth at least 1,000 gp, which the spell consumes",
        ritual=False,
        duration='Instantaneous',
        concentration=False,
        casting_time='8 hours',
        school='transmutation',
        classes='bard,druid'
    )




    spell363 = Spellcard(
        name='Spellsteal',
        description="""If a creature is casting a 1st level spell, you may use your reaction
        to redirect and siphon the spell. Any material components required for the spell are
        consumed from the creature casting it and that creature loses a spell slot like
        normal. If you have stolen a spell, you can cast it on your next turn without
        requiring materials, without having known the spell, and without using a spell slot.
        If you do not cast the spell by the end of your next turn, the spell fails with no
        effects.\n
        At Higher Levels. The level of spells that can be stolen increases by 1 for every
        level of spell slot above 4th used.""",
        image_url='https://i.imgur.com/JVXCmVa.png',
        level=3,
        range='60 feet',
        verbal=True,
        somatic=True,
        material="",
        ritual=False,
        duration='Instantaneous',
        concentration=False,
        casting_time='1 reaction',
        school='abjuration',
        classes='bard,cleric,druid,paladin,sorcerer,warlock,wizard',
        homebrew=True
    )



    db.session.add(spell001)
    db.session.add(spell002)
    db.session.add(spell003)
    db.session.add(spell004)
    db.session.add(spell005)
    db.session.add(spell006)
    db.session.add(spell007)
    db.session.add(spell008)
    db.session.add(spell009)
    db.session.add(spell010)
    db.session.add(spell011)
    db.session.add(spell012)
    db.session.add(spell013)
    db.session.add(spell014)
    db.session.add(spell015)
    db.session.add(spell016)
    db.session.add(spell017)
    db.session.add(spell018)
    db.session.add(spell019)
    db.session.add(spell020)
    db.session.add(spell021)

    db.session.add(spell363)

    db.session.commit()
