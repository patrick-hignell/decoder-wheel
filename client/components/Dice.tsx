interface Props {
  number: number | string
  dice: string
  hideNotKey?: boolean
}


function Dice({ number, dice, hideNotKey }: Props) {
  if (hideNotKey) {
    dice = "Blank"
    number = ""
  }
  return (
  <div className="grid place-items-center [grid-template-areas:'overlap']" >
      
      {dice == "D4" && <img className="[grid-area:overlap] h-20 ml-1 -mt-1" src={`/images/${dice}.png`} alt={`${dice}`} />}
      {dice == "D6" && <img className="[grid-area:overlap] h-20 -mt-2 ml-3" src={`/images/${dice}.png`} alt={`${dice}`} />}
      {dice == "D10" && <img className="[grid-area:overlap] h-24 mt-2" src={`/images/${dice}.png`} alt={`${dice}`} />}
      {dice == "D12" && <img className="[grid-area:overlap] h-24" src={`/images/${dice}.png`} alt={`${dice}`} />}
      {dice == "D20" && <img className="[grid-area:overlap] h-24 -mt-3" src={`/images/${dice}.png`} alt={`${dice}`} />}
      {dice == "D20Outline" && <img className="[grid-area:overlap] h-[6.75rem] -mt-[0.9rem] -ml-2" src={`/images/${dice}.2.png`} alt={`${dice}`} />}
      {dice == "Blank" && <img className="[grid-area:overlap] h-24 -mt-3" src={`/images/${dice}.png`} alt={`${dice}`} />}

      {dice == "D4" && <p className="[grid-area:overlap] font-['Bellota'] text-4xl mt-4 text-white">{number}</p>}
      {dice == "D6" && <p className="[grid-area:overlap] font-['Bellota'] text-4xl text-white">{number}</p>}
      {dice == "D10" && <p className="[grid-area:overlap] font-['Bellota'] text-4xl text-white -mt-3">{number}</p>}
      {dice == "D12" && <p className="[grid-area:overlap] font-['Bellota'] text-4xl text-white">{number}</p>}
      {dice == "D20" && <p className="[grid-area:overlap] font-['Bellota'] text-3xl text-white">{number}</p>}
      {dice == "Blank" && <p className="[grid-area:overlap] font-['Bellota'] text-7xl text-black">{number}</p>}
      
    </div>
  )
}

export default Dice