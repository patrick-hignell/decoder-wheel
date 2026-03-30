import { DiceIcon } from "../../models/main"
import Dice from "./Dice"


function App() {
  const outerWheel: DiceIcon[] = [
{number: 1, dice: 'D4' },
{number: 10, dice: 'D12' },
{number: 5, dice: 'D10' },
{number: 11, dice: 'D12'},
{number: 6, dice: 'D10' },
{number: 12, dice: 'D12'},
{number: 2, dice: 'D4' },
{number: 7, dice: 'D10' }, 
{number: 1, dice: 'D12'},
{number: 8, dice: 'D10' },
{number: 2, dice: 'D12'},
{number: 9, dice: 'D10' }, 
{number: 3, dice: 'D12' },
{number: 3, dice: 'D4' },
{number: 4, dice: 'D12' },
{number: 10, dice: 'D10' },
{number: 5, dice: 'D12'},
{number: 1, dice: 'D10' },
{number: 6, dice: 'D12' },
{number: 4, dice: 'D4' },
{number: 2, dice: 'D10' },
{number: 7, dice: 'D12'},
{number: 3, dice: 'D10' },
{number: 8, dice: 'D12'},
{number: 4, dice: 'D10' },
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
    { number: 5, dice: 'D6' },
    { number: 1, dice: 'D20' }, 
    { number: 2, dice: 'D20' },
    { number: 3, dice: 'D20' }, 
    { number: 4, dice: 'D20' },
    { number: 6, dice: 'D6' },
    { number: 5, dice: 'D20' },
    { number: 6, dice: 'D20' },
    { number: 7, dice: 'D20' },
    { number: 1, dice: 'D6' },
    { number: 8, dice: 'D20' },
    { number: 9, dice: 'D20' },
    { number: 10, dice: 'D20' }, 
    { number: 2, dice: 'D6' },
    { number: 11, dice: 'D20' }, 
    { number: 12, dice: 'D20' },
    { number: 13, dice: 'D20' }, 
    { number: 14, dice: 'D20' },
    { number: 3, dice: 'D6' },
    { number: 15, dice: 'D20' },
    { number: 16, dice: 'D20' }, 
    { number: 17, dice: 'D20' },
    { number: 4, dice: 'D6' },
    { number: 18, dice: 'D20' },
    { number: 19, dice: 'D20' },
    { number: 20, dice: 'D20' }
  ]

//   [
//     { number: 5, dice: 'D6' },
// {number: "L", dice:'Blank'},
//     { number: 1, dice: 'D20' }, 
// {number: "M", dice:'Blank'},
//     { number: 2, dice: 'D20' },
// {number: "N", dice:'Blank'},
//     { number: 3, dice: 'D20' }, 
// {number: "O", dice:'Blank'},
//     { number: 4, dice: 'D20' },
// {number: "P", dice:'Blank'},
//     { number: 6, dice: 'D6' },
// {number: "Q", dice:'Blank'},
//     { number: 5, dice: 'D20' },
// {number: "R", dice:'Blank'},
//     { number: 6, dice: 'D20' },
// {number: "S", dice:'Blank'},
//     { number: 7, dice: 'D20' },
// {number: "T", dice:'Blank'},
//     { number: 1, dice: 'D6' },
// {number: "U", dice:'Blank'},
//     { number: 8, dice: 'D20' },
// {number: "V", dice:'Blank'},
//     { number: 9, dice: 'D20' },
// {number: "W", dice:'Blank'},
//     { number: 10, dice: 'D20' }, 
// {number: "X", dice:'Blank'},
//     { number: 2, dice: 'D6' },
// {number: "Y", dice:'Blank'},
//     { number: 11, dice: 'D20' }, 
// {number: "Z", dice:'Blank'},
//     { number: 12, dice: 'D20' },
// {number: "A", dice:'Blank'},
//     { number: 13, dice: 'D20' }, 
// {number: "B", dice:'Blank'},
//     { number: 14, dice: 'D20' },
// {number: "C", dice:'Blank'},
//     { number: 3, dice: 'D6' },
// {number: "D", dice:'Blank'},
//     { number: 15, dice: 'D20' },
// {number: "E", dice:'Blank'},
//     { number: 16, dice: 'D20' }, 
// {number: "F", dice:'Blank'},
//     { number: 17, dice: 'D20' },
// {number: "G", dice:'Blank'},
//     { number: 4, dice: 'D6' },
// {number: "H", dice:'Blank'},
//     { number: 18, dice: 'D20' },
// {number: "I", dice:'Blank'},
//     { number: 19, dice: 'D20' },
// {number: "J", dice:'Blank'},
//     { number: 20, dice: 'D20' },
// {number: "K", dice:'Blank'}
//   ]

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
  
  const letterWheel = [
{number: "L", dice:'Blank'},
{number: "M", dice:'Blank'},
{number: "N", dice:'Blank'},
{number: "O", dice:'Blank'},
{number: "P", dice:'Blank'},
{number: "Q", dice:'Blank'},
{number: "R", dice:'Blank'},
{number: "S", dice:'Blank'},
{number: "T", dice:'Blank'},
{number: "U", dice:'Blank'},
{number: "V", dice:'Blank'},
{number: "W", dice:'Blank'},
{number: "X", dice:'Blank'},
{number: "Y", dice:'Blank'},
{number: "Z", dice:'Blank'},
{number: "A", dice:'Blank'}, 
{number: "B", dice:'Blank'},
{number: "C", dice:'Blank'},
{number: "D", dice:'Blank'},
{number: "E", dice:'Blank'},
{number: "F", dice:'Blank'},
{number: "G", dice:'Blank'},
{number: "H", dice:'Blank'},
{number: "I", dice:'Blank'},
{number: "J", dice:'Blank'},
{number: "K", dice:'Blank'}
  ]

  const outlineWheel = [
    {number:"", dice:"D20Outline"}
  ]

  const outerRadius = 670
  const letterRadius = 560
  const innerRadius = 450
  const innerOffset = 13.8461538462
  const innerTurns = 13
  const letterTurns = 14
  const outlineTurns = 3

  const showInner = true
  const showOuter = true

  return (
      <div>
        <h1 className="text-3xl font-bold underline">
          Decoder Wheel!!!
      </h1>
      <div className="relative w-[700px] h-[700px] mx-auto">
      {showOuter && outerWheel.map((dice, i) => (
        <div
          key={`${dice.number}${dice.dice}`}
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: `rotate(${(i / outerWheel.length) * 360}deg) translateY(-${outerRadius}px)`,
          }}
        >
          <Dice {...dice} />
        </div>
      ))}
        {showOuter && innerWheel.map((dice, i) => (
        <div
          key={`${dice.number}${dice.dice}`}
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: `rotate(${(i / innerWheel.length) * 360 + (innerOffset*innerTurns)}deg) translateY(-${innerRadius}px)`,
          }}
        >
          <Dice {...dice} />
        </div>
        ))}
        {showInner && outlineWheel.map((dice, i) => (
        <div
          key={`${dice.number}${dice.dice}`}
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: `rotate(${(i / innerWheel.length) * 360 + (innerOffset*outlineTurns)}deg) translateY(-${innerRadius}px)`,
          }}
        >
          <Dice {...dice} />
        </div>
        ))}
        {showInner && letterWheel.map((dice, i) => (
        <div
          key={`${dice.number}${dice.dice}`}
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: `rotate(${(i / letterWheel.length) * 360+ (innerOffset*letterTurns)}deg) translateY(-${letterRadius}px)`,
          }}
        >
          <Dice {...dice} />
        </div>
      ))}
        {/* <img className="w-10 h-[40rem]"src="/images/ArrowVertical.png" alt="arrow"
        style={{
            position: 'absolute',
            top: '15%',
            left: '54%',
          }}/> */}
        {showOuter && <WheelOutline radius={outerRadius} padding={64} />}
        {showInner && <WheelOutline radius={letterRadius} padding={46} />}
        <WheelOutline radius={6} padding={2} />
  {/* <WheelOutline radius={innerRadius} /> */}
    </div>
      {/* {outerWheel.map((dice) => (
        <Dice {...dice}  key={`${dice.number}${dice.dice}`} />
      ))}
      {innerWheel.map((dice) => (
        <Dice {...dice}  key={`${dice.number}${dice.dice}`} />
      ))} */}
      {/* <div className="rounded-full outline outline-black w-[700px] h-[700px]"
      style={{
            position: 'absolute',
            top: '38%',
            left: '38%',
          }}></div> */}
      <div className="h-[1000px]"></div>
      </div>
  )
}

function WheelOutline({ radius, padding}: { radius: number, padding: number }) {
  const pivotX = 397.5  // half of container width (700px)
  const pivotY = 745  // full container height (top: 100%)
  radius += padding

  return (
    <div
      style={{
        position: 'absolute',
        top: `${pivotY - radius}px`,
        left: `${pivotX - radius}px`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        borderRadius: '50%',
        border: '5px solid black',
        pointerEvents: 'none',
      }}
    />
  )
}

export default App
