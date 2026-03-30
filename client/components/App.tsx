import { DiceIcon } from "../../models/main"
import Dice from "./Dice"


function App() {
  const outerWheel: DiceIcon[] = [
    { number: 1, dice: 'D4' },
    { number: 10, dice: 'D12' },
    { number: 5, dice: 'D10' },
{number: 11, dice: 'D12'},
    { number: 6, dice: 'D10' },
{number: 12, dice: 'D12'},
    { number: 2, dice: 'D4' },
    { number: 7, dice: 'D10' }, 
{number: 1, dice: 'D12'},
    { number: 8, dice: 'D10' },
{number: 2, dice: 'D12'},
    { number: 9, dice: 'D10' }, 
    { number: 3, dice: 'D12' },
    { number: 3, dice: 'D4' },
{ number: 4, dice: 'D12' },
    { number: 10, dice: 'D10' },
{number: 5, dice: 'D12'},
    { number: 1, dice: 'D10' },
    { number: 6, dice: 'D12' },
    { number: 4, dice: 'D4' },
    { number: 2, dice: 'D10' },
    {number: 7, dice: 'D12'},
    { number: 3, dice: 'D10' },
        {number: 8, dice: 'D12'},
    { number: 4, dice: 'D10' },
{number: 9, dice: 'D12'}
  ]
//   [
// {number: 1, dice: 'D4'},
// {number: 2, dice: 'D4'},
// {number: 3, dice: 'D4'},
// {number: 4, dice: 'D4'},
// {number: 1, dice: 'D10'},
// {number: 2, dice: 'D10'},
// {number: 3, dice: 'D10'}, 
// {number: 4, dice: 'D10'},
// {number: 5, dice: 'D10'}, 
// {number: 6, dice: 'D10'},
// {number: 7, dice: 'D10'},
// {number: 8, dice: 'D10'},
// {number: 9, dice: 'D10'},
// {number: 10, dice: 'D10'}, 
// {number: 1, dice: 'D12'},
// {number: 2, dice: 'D12'},
// {number: 3, dice: 'D12'},
// {number: 4, dice: 'D12'},
// {number: 5, dice: 'D12'},
// {number: 6, dice: 'D12'},
// {number: 7, dice: 'D12'},
// {number: 8, dice: 'D12'},
// {number: 9, dice: 'D12'},
// {number: 10, dice: 'D12'},
// {number: 11, dice: 'D12'}, 
// {number: 12, dice: 'D12'}
//   ]
  const innerWheel: DiceIcon[] = [
{number: 4, dice: 'D6'},
{number: 1, dice: 'D20'}, 
{number: 2, dice: 'D20'},
{number: 3, dice: 'D20'}, 
    { number: 4, dice: 'D20' },
{number: 5, dice: 'D6'},
    { number: 5, dice: 'D20' },
{number: 6, dice: 'D20'},
    { number: 7, dice: 'D20' },
{number: 6, dice: 'D6'},
    { number: 8, dice: 'D20' },
{number: 9, dice: 'D20'},
{number: 10, dice: 'D20'}, 
    { number: 1, dice: 'D6' },
{ number: 11, dice: 'D20' }, 
    { number: 12, dice: 'D20' },
{number: 13, dice: 'D20'}, 
    { number: 14, dice: 'D20' },
{number: 2, dice: 'D6'},
    { number: 15, dice: 'D20' },
{number: 16, dice: 'D20'}, 
    { number: 17, dice: 'D20' },
{number: 3, dice: 'D6'},
    { number: 18, dice: 'D20' },
    { number: 19, dice: 'D20' },
{number: 20, dice: 'D20'}
  ]

//   [
// {number: 1, dice: 'D6'},
// {number: 2, dice: 'D6'},
// {number: 3, dice: 'D6'},
// {number: 4, dice: 'D6'},
// {number: 5, dice: 'D6'},
// {number: 6, dice: 'D6'},
// {number: 1, dice: 'D20'}, 
// {number: 2, dice: 'D20'},
// {number: 3, dice: 'D20'}, 
// {number: 4, dice: 'D20'},
// {number: 5, dice: 'D20'},
// {number: 6, dice: 'D20'},
// {number: 7, dice: 'D20'},
// {number: 8, dice: 'D20'},
// {number: 9, dice: 'D20'},
// {number: 10, dice: 'D20'}, 
// {number: 11, dice: 'D20'}, 
// {number: 12, dice: 'D20'},
// {number: 13, dice: 'D20'}, 
// {number: 14, dice: 'D20'},
// {number: 15, dice: 'D20'},
// {number: 16, dice: 'D20'}, 
// {number: 17, dice: 'D20'},
// {number: 18, dice: 'D20'},
// {number: 19, dice: 'D20'},
// {number: 20, dice: 'D20'}
//   ]
  
  const radius = 500

  return (
      <div>
        <h1 className="text-3xl font-bold underline">
          Decoder Wheel!!!
      </h1>
      <div className="relative w-[700px] h-[700px] mx-auto">
      {outerWheel.map((dice, i) => (
        <div
          key={`${dice.number}${dice.dice}`}
          style={{
            position: 'absolute',
            top: '75%',
            left: '50%',
            transform: `rotate(${(i / outerWheel.length) * 360}deg) translateY(-${radius}px)`,
          }}
        >
          <Dice {...dice} />
        </div>
      ))}
        {innerWheel.map((dice, i) => (
        <div
          key={`${dice.number}${dice.dice}`}
          style={{
            position: 'absolute',
            top: '250%',
            left: '50%',
            transform: `rotate(${(i / innerWheel.length) * 360}deg) translateY(-${radius}px)`,
          }}
        >
          <Dice {...dice} />
        </div>
      ))}
    </div>
      {/* {outerWheel.map((dice) => (
        <Dice {...dice}  key={`${dice.number}${dice.dice}`} />
      ))}
      {innerWheel.map((dice) => (
        <Dice {...dice}  key={`${dice.number}${dice.dice}`} />
      ))} */}
      </div>
  )
}

export default App
