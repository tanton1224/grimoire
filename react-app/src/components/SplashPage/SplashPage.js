import './SplashPage.css'

function SplashPage() {

    return (
        <div className="splash-container">
            <div className="splash-header-container">
                <h1>Welcome to <span className='title-font'>Grimoire</span><span style={{"font-family": "Gothic G Regular", "font-size": "40px"}}>!</span></h1>
                <div className='splash-description'>Grimoire is a deck-building application for any DnD player or GM to organize their characters' spell lists!</div>
            </div>
            <div className='showcase-features-container'>
                <div className='showcase-features-title'>Current Features:</div>
                <div className='feature-images-container'>
                    <img className="feature-image" src="https://static.thenounproject.com/png/20461-200.png" />
                    <img className="feature-image" src="https://static.thenounproject.com/png/4767-200.png" />
                </div>
                <div className='feature-desc-container'>
                    <ul>Decks
                        <li>Create your own decks of spellcards!</li>
                        <li>View your created decks conveniently from your profile tab's link</li>
                        <li>Populate the decks with spells from Dungeons and Dragons 5E</li>
                        <li>Remove and add cards to and from your deck freely</li>
                        <li>Freely delete decks as needed</li>
                    </ul>
                    <ul>Spellcards
                        <li>Create your own homebrew spells to add to your decks</li>
                        <li>View your created spellcards from your profile tab's link</li>
                        <li>Make a mistake? Update your card's info at any time</li>
                        <li>Delete a spellcard if no longer needed</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SplashPage;
