from ..models import db, Spellcard

def seed_basic_spellcards():
    spell001 = Spellcard(
        name='Acid Arrow',
        description='''A shimmering green arrow streaks toward a target within range and
                    bursts in a spray of acid. Make a ranged spell attack against the target.
                    On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage
                    at the end of its next turn. On a miss, the arrow splashes the target with
                    acid for half as much of the initial damage and no damage at the end of
                    its next turn.
                    At Higher Levels: When you cast this spell using a spell slot of 3rd level
                    or higher, the damage (both initial and later) increases by 1d4 for each
                    slot level above 2nd.''',
        image_url='https://i.pinimg.com/736x/27/51/46/2751467cbd18824a2dffd6f001a48578.jpg',
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
        image_url='https://static.wikia.nocookie.net/elderscrolls/images/2/2c/SkillConjuration.png',
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
                    hit points increase by 5 for the duration.
                    At Higher Levels: When you cast this spell using a spell slot of 3rd level
                    or higher, a target’s hit points increase by an additional 5 for each slot
                    level above 2nd.""",
        image_url='https://ih1.redbubble.net/image.1012509077.4054/st,small,507x507-pad,600x600,f8f8f8.jpg',
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
                    is mental or audible.
                    A mental alarm alerts you with a ping in your mind if you are within 1
                    mile of the warded area. This ping awakens you if you are sleeping.
                    An audible alarm produces the sound of a hand bell for 10 seconds within
                    60 feet""",
        image_url='https://cdnb.artstation.com/p/assets/images/images/009/031/171/medium/richard-thomas-paints.jpg?1516736560',
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
                    the benefits of a different one.
                    Aquatic Adaptation. You adapt your body to an aquatic environment,
                    sprouting gills and growing webbing between your fingers. You can breathe
                    underwater and gain a swimming speed equal to your walking speed.
                    Change Appearance. You transform your appearance. You decide what you look
                    like, including your height, weight, facial features, sound of your voice,
                    hair length, coloration, and distinguishing characteristics, if any. You
                    can make yourself appear as a member of another race, though none of your
                    statistics change. You also can’t appear as a creature of a different size
                    than you, and your basic shape stays the same; if you’re bipedal, you can’t
                    use this spell to become quadrupedal, for instance. At any time for the
                    duration of the spell, you can use your action to change your appearance
                    in this way again.
                    Natural Weapons. You grow claws, fangs, spines, horns, or a different
                    natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning,
                    piercing, or slashing damage, as appropriate to the natural weapon you
                    chose, and you are proficient with your unarmed strikes. Finally, the
                    natural weapon is magic and you have a +1 bonus to the attack and damage
                    rolls you make using it.
                    """,
        image_url='https://cdnb.artstation.com/p/assets/images/images/009/031/171/medium/richard-thomas-paints.jpg?1516736560',
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
                    spells ends.
                    At Higher Levels: When you cast this spell using a spell slot of 2nd level
                    or higher, you can affect one additional beast for each slot level above
                    1st.""",
        image_url='https://cdnb.artstation.com/p/assets/images/images/009/031/171/medium/richard-thomas-paints.jpg?1516736560',
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
        for other animals.
        At Higher Levels: If you cast this spell using a spell slot of 3rd level or higher,
        the Duration of the spell increases by 48 hours for each slot level above 2nd.""",
        image_url='https://cdnb.artstation.com/p/assets/images/images/009/031/171/medium/richard-thomas-paints.jpg?1516736560',
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
        your action to transform affected creatures into new forms.
        The transformation lasts for the duration for each target, or until the target drops
        to 0 hit points or dies. You can choose a different form for each target. A target’s
        game statistics are replaced by the statistics of the chosen beast, though the target
        retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes
        the hit points of its new form, and when it reverts to its normal form, it returns to
        the number of hit points it had before it transformed. If it reverts as a result of
        dropping to 0 hit points, any excess damage carries over to its normal form. As long
        as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it
        isn’t knocked unconscious. The creature is limited in the actions it can perform by
        the nature of its new form, and it can’t speak or cast spells.
        The target’s gear melds into the new form. The target can’t activate, wield, or
        otherwise benefit from any of its equipment.""",
        image_url='https://cdnb.artstation.com/p/assets/images/images/009/031/171/medium/richard-thomas-paints.jpg?1516736560',
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
        image_url='https://cdnb.artstation.com/p/assets/images/images/009/031/171/medium/richard-thomas-paints.jpg?1516736560',
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
        damage based on its form.
        At Higher Levels: If you cast this spell using a spell slot of 6th level or higher,
        you can animate two additional Objects for each slot level above 5th.""",
        image_url='https://cdnb.artstation.com/p/assets/images/images/009/031/171/medium/richard-thomas-paints.jpg?1516736560',
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

    db.session.commit()
