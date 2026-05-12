import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <main className="w-full flex flex-col items-center">
        {/* Hero */}
        <div
          className="flex flex-col w-full h-[600px] bg-cover bg-center justify-start items-center pt-[30px] border-b-[3px] border-black"
          style={{
            backgroundImage:
              'url("https://images.squarespace-cdn.com/content/v1/5f8a7f6ce7e6c83bd00002f4/1604782480312-TOREECY0FP29FKHWA9R4/hero_dmgscreen_0.jpg")',
          }}
        >
          <h1 className="text-4xl font-bold text-grimoire-dark">
            Welcome to{' '}
            <span className="font-gothic text-grimoire-gold text-[50px]">Grimoire</span>
            <span className="font-gothic text-[40px] text-grimoire-dark">!</span>
          </h1>
          <p className="text-black text-[20px] font-bold mt-2">
            Grimoire is a deck-building application for any DnD player or GM to organize their
            characters&apos; spell lists!
          </p>
        </div>

        {/* Features */}
        <div className="bg-grimoire-dark w-full flex flex-col items-center px-[200px] py-[50px] text-grimoire-gold min-h-[600px]">
          <div className="font-cloister text-[40px] mb-[25px]">Current Features:</div>
          <div className="flex justify-between w-[500px] mb-6">
            <img
              className="p-[10px] bg-grimoire-gold rounded-full"
              alt="decks"
              src="https://static.thenounproject.com/png/20461-200.png"
              width={80}
              height={80}
            />
            <img
              className="p-[10px] bg-grimoire-gold rounded-full"
              alt="spellcards"
              src="https://static.thenounproject.com/png/4767-200.png"
              width={80}
              height={80}
            />
          </div>
          <div className="flex justify-between w-[500px]">
            <ul className="w-[250px] text-[25px] flex flex-col">
              Decks
              <li className="text-[15px]">Create your own decks of spellcards!</li>
              <li className="text-[15px]">View your created decks conveniently from your profile tab</li>
              <li className="text-[15px]">Populate the decks with spells from Dungeons and Dragons 5E</li>
              <li className="text-[15px]">Remove and add cards to and from your deck freely</li>
              <li className="text-[15px]">Freely delete decks as needed</li>
            </ul>
            <ul className="w-[250px] text-[25px] flex flex-col">
              Spellcards
              <li className="text-[15px]">Create your own homebrew spells to add to your decks</li>
              <li className="text-[15px]">View your created spellcards from your profile tab</li>
              <li className="text-[15px]">Make a mistake? Update your card&apos;s info at any time</li>
              <li className="text-[15px]">Delete a spellcard if no longer needed</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
