export default function Footer() {
  return (
    <div className="w-full h-[90px] flex flex-col items-center justify-evenly bg-grimoire-gold border-t-2 border-black text-grimoire-dark">
      <div>Enjoying the website? So impressed you want to hire the engineer immediately? Here&apos;s all the info you need for that!</div>
      <div className="w-[300px] flex justify-between">
        <a href="https://www.linkedin.com/in/thomasanton1224/" target="_blank" rel="noreferrer" className="text-grimoire-dark no-underline">LinkedIn</a>
        <a href="https://github.com/tanton1224" target="_blank" rel="noreferrer" className="text-grimoire-dark no-underline">Github</a>
        <a href="mailto:thomasanton1224@gmail.com" target="_blank" rel="noreferrer" className="text-grimoire-dark no-underline">Email</a>
      </div>
    </div>
  )
}
