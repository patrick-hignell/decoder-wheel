interface Props {
  number: number | string
  dice: string
  hideNotKey?: boolean
}

function Dice({ number, dice, hideNotKey }: Props) {
  if (hideNotKey) {
    dice = 'Blank'
    number = ''
  }
  return (
    <div className="grid place-items-center [grid-template-areas:'overlap']">
      {dice == 'D4' && (
        <img
          className="-mt-1 ml-1 h-20 [grid-area:overlap]"
          src={`/images/${dice}.png`}
          alt={`${dice}`}
        />
      )}
      {dice == 'D6' && (
        <img
          className="mb-3 mr-3 h-20 [grid-area:overlap]"
          src={`/images/${dice}.png`}
          alt={`${dice}`}
        />
      )}
      {dice == 'D10' && (
        <img
          className="mt-2 h-24 [grid-area:overlap]"
          src={`/images/${dice}.png`}
          alt={`${dice}`}
        />
      )}
      {dice == 'D12' && (
        <img
          className="h-24 [grid-area:overlap]"
          src={`/images/${dice}.png`}
          alt={`${dice}`}
        />
      )}
      {dice == 'D20' && (
        <img
          className="-mt-3 h-24 [grid-area:overlap]"
          src={`/images/${dice}.png`}
          alt={`${dice}`}
        />
      )}
      {dice == 'D20Outline' && (
        <img
          className="-ml-2 -mt-[0.9rem] h-[6.75rem] [grid-area:overlap]"
          src={`/images/${dice}.2.png`}
          alt={`${dice}`}
        />
      )}
      {dice == 'Blank' && (
        <img
          className="-mt-3 h-24 [grid-area:overlap]"
          src={`/images/${dice}.png`}
          alt={`${dice}`}
        />
      )}

      {dice == 'D4' && (
        <p className="mt-4 font-['Bellota'] text-4xl text-white [grid-area:overlap]">
          {number}
        </p>
      )}
      {dice == 'D6' && (
        <p className="mr-5 font-['Bellota'] text-4xl text-white [grid-area:overlap]">
          {number}
        </p>
      )}
      {dice == 'D10' && (
        <p className="-mt-3 font-['Bellota'] text-4xl text-white [grid-area:overlap]">
          {number}
        </p>
      )}
      {dice == 'D12' && (
        <p className="font-['Bellota'] text-4xl text-white [grid-area:overlap]">
          {number}
        </p>
      )}
      {dice == 'D20' && (
        <p className="font-['Bellota'] text-3xl text-white [grid-area:overlap]">
          {number}
        </p>
      )}
      {dice == 'Blank' && (
        <p className="font-['Bellota'] text-7xl text-black [grid-area:overlap]">
          {number}
        </p>
      )}
    </div>
  )
}

export default Dice
