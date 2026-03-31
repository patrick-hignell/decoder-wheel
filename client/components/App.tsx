import { ChangeEvent, useEffect, useState } from 'react'
import { DiceIcon, OptionType } from '../../models/main'
import Dice from './Dice'
import Select, { SingleValue } from 'react-select'

function App() {
  const [key, setKey] = useState<OptionType>({
    label: '12D20',
    value: { dice: 'D20', number: 12 },
  })
  const [turns, setTurns] = useState<number>(0)
  const [message, setMessage] = useState<string>('')
  const [showOuter, setShowOuter] = useState<boolean>(true)
  const [showInner, setShowInner] = useState<boolean>(true)
  const [hideNotKey, setHideNotKey] = useState<boolean>(true)
  const outerWheel: DiceIcon[] = [
    { number: 1, dice: 'D4' },
    { number: 10, dice: 'D12' },
    { number: 5, dice: 'D10' },
    { number: 11, dice: 'D12' },
    { number: 6, dice: 'D10' },
    { number: 12, dice: 'D12' },
    { number: 2, dice: 'D4' },
    { number: 7, dice: 'D10' },
    { number: 1, dice: 'D12' },
    { number: 8, dice: 'D10' },
    { number: 2, dice: 'D12' },
    { number: 9, dice: 'D10' },
    { number: 3, dice: 'D12' },
    { number: 3, dice: 'D4' },
    { number: 4, dice: 'D12' },
    { number: 10, dice: 'D10' },
    { number: 5, dice: 'D12' },
    { number: 1, dice: 'D10' },
    { number: 6, dice: 'D12' },
    { number: 4, dice: 'D4' },
    { number: 2, dice: 'D10' },
    { number: 7, dice: 'D12' },
    { number: 3, dice: 'D10' },
    { number: 8, dice: 'D12' },
    { number: 4, dice: 'D10' },
    { number: 9, dice: 'D12' },
  ]

  const innerWheel: DiceIcon[] = [
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
    { number: 20, dice: 'D20' },
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
  ]

  const letterWheel = [
    { number: 'A', dice: 'Blank' },
    { number: 'B', dice: 'Blank' },
    { number: 'C', dice: 'Blank' },
    { number: 'D', dice: 'Blank' },
    { number: 'E', dice: 'Blank' },
    { number: 'F', dice: 'Blank' },
    { number: 'G', dice: 'Blank' },
    { number: 'H', dice: 'Blank' },
    { number: 'I', dice: 'Blank' },
    { number: 'J', dice: 'Blank' },
    { number: 'K', dice: 'Blank' },
    { number: 'L', dice: 'Blank' },
    { number: 'M', dice: 'Blank' },
    { number: 'N', dice: 'Blank' },
    { number: 'O', dice: 'Blank' },
    { number: 'P', dice: 'Blank' },
    { number: 'Q', dice: 'Blank' },
    { number: 'R', dice: 'Blank' },
    { number: 'S', dice: 'Blank' },
    { number: 'T', dice: 'Blank' },
    { number: 'U', dice: 'Blank' },
    { number: 'V', dice: 'Blank' },
    { number: 'W', dice: 'Blank' },
    { number: 'X', dice: 'Blank' },
    { number: 'Y', dice: 'Blank' },
    { number: 'Z', dice: 'Blank' },
  ]

  const outlineWheel = [{ number: '', dice: 'D20Outline' }]

  const keyOptions: OptionType[] = innerWheel.map((dice) => {
    return { value: dice, label: `${dice.number}${dice.dice}` }
  })

  const outerRadius = 670
  const letterRadius = 560
  const innerRadius = 450
  const innerOffset = 13.8461538462
  const innerTurns = 0

  useEffect(() => {
    setTurns(
      innerWheel.findIndex(
        (dice) =>
          dice.number == key.value.number && dice.dice == key.value.dice,
      ),
    )
  }, [key])

  function handleKeyChange(e: SingleValue<OptionType>) {
    if (e) setKey(e)
  }

  function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value.toUpperCase())
  }
  const handleShowOuter = (e: ChangeEvent<HTMLInputElement>) => {
    setShowOuter(e.target.checked)
  }

  const handleShowInner = (e: ChangeEvent<HTMLInputElement>) => {
    setShowInner(e.target.checked)
  }

  const handleHideNotKey = (e: ChangeEvent<HTMLInputElement>) => {
    setHideNotKey(e.target.checked)
  }

  return (
    <div>
      <div className="h-[50px]"></div>
      <div className="relative mx-auto h-[700px] w-[700px]">
        {showOuter &&
          outerWheel.map((dice, i) => (
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
        {showOuter &&
          innerWheel.map((dice, i) => (
            <div
              key={`${dice.number}${dice.dice}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: `rotate(${(i / innerWheel.length) * 360 + innerOffset * innerTurns}deg) translateY(-${innerRadius}px)`,
              }}
            >
              <Dice
                {...dice}
                hideNotKey={
                  dice.dice != key.value.dice || dice.number != key.value.number
                    ? hideNotKey
                    : false
                }
              />
            </div>
          ))}
        {showInner &&
          outlineWheel.map((dice, i) => (
            <div
              key={`${dice.number}${dice.dice}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: `rotate(${(i / innerWheel.length) * 360 + innerOffset * turns}deg) translateY(-${innerRadius}px)`,
              }}
            >
              <Dice {...dice} />
            </div>
          ))}
        {showInner &&
          letterWheel.map((dice, i) => (
            <div
              key={`${dice.number}${dice.dice}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: `rotate(${(i / letterWheel.length) * 360 + innerOffset * turns}deg) translateY(-${letterRadius}px)`,
              }}
            >
              <Dice {...dice} />
            </div>
          ))}
        {showOuter && <WheelOutline radius={outerRadius} padding={64} />}
        {showInner && <WheelOutline radius={letterRadius} padding={46} />}
        <WheelOutline radius={6} padding={2} />
        {/* <WheelOutline radius={innerRadius} /> */}
      </div>
      <div className="h-[900px]"></div>
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full justify-center gap-10">
          <p className="mb-4 ml-8 font-['Bellota'] text-6xl">
            Show outer wheel
          </p>
          <input
            className="h-12 w-12"
            type="checkbox"
            checked={showOuter}
            onChange={handleShowOuter}
          />
          <p className="mb-4 ml-8 font-['Bellota'] text-6xl">
            Show inner wheel
          </p>
          <input
            className="h-12 w-12"
            type="checkbox"
            checked={showInner}
            onChange={handleShowInner}
          />
          <p className="mb-4 ml-8 font-['Bellota'] text-6xl">
            Hide unused keys
          </p>
          <input
            className="h-12 w-12"
            type="checkbox"
            checked={hideNotKey}
            onChange={handleHideNotKey}
          />
        </div>
        <div className="h-[100px]"></div>
        <div className="flex w-full justify-center gap-10">
          <div className="flex w-[60rem] flex-col">
            <p className="mb-4 ml-8 font-['Bellota'] text-6xl">
              Select your key -
            </p>
            <Select
              className="ml-6 h-9 w-[40rem] rounded text-6xl"
              id="name"
              name="name"
              options={keyOptions}
              value={key}
              onChange={handleKeyChange}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderWidth: '1px',
                  borderColor: 'black',
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'black', // Set your desired color
                }),
              }}
            />
          </div>
          <div className="flex w-[60rem] flex-col">
            <p className="mb-4 font-['Bellota'] text-6xl">
              Enter your message here -
            </p>
            <textarea
              className="h-24 text-6xl outline outline-1 outline-black"
              onChange={handleMessageChange}
            ></textarea>
          </div>
        </div>
        <p className="mt-12 font-['Bellota'] text-8xl">Key Coded Message -</p>
        <div className="mt-12 flex h-56 w-11/12 items-center gap-3 p-6 outline outline-black">
          <Dice {...key.value} />
          <p className="font-['Bellota'] text-8xl">|</p>
          {message &&
            [...message].map((char, index) => {
              const foundIndex = letterWheel.findIndex(
                (dice) => dice.number === char,
              )
              const charIndex =
                foundIndex === -1
                  ? -1
                  : (foundIndex + turns) % letterWheel.length
              if (foundIndex !== -1) {
                return (
                  <Dice
                    {...outerWheel[charIndex]}
                    key={`codedMessage${index}`}
                  />
                )
              } else {
                return (
                  <p
                    className="font-['Bellota'] text-8xl"
                    key={`codedMessage${index}`}
                  >
                    {char}
                  </p>
                )
              }
            })}
        </div>
        <p className="mt-12 font-['Bellota'] text-8xl">All Variations -</p>
        {innerWheel.map((_, variantIndex) => (
          <div
            className="mt-12 flex h-56 w-11/12 items-center gap-3 p-6 outline outline-black"
            key={variantIndex}
          >
            <Dice {...innerWheel[variantIndex]} />
            <p className="font-['Bellota'] text-8xl">|</p>
            {message &&
              [...message].map((char, index) => {
                const foundIndex = letterWheel.findIndex(
                  (dice) => dice.number === char,
                )
                const charIndex =
                  foundIndex === -1
                    ? -1
                    : (foundIndex + variantIndex) % letterWheel.length
                if (foundIndex !== -1) {
                  return (
                    <Dice
                      {...outerWheel[charIndex]}
                      key={`codedMessage${index}`}
                    />
                  )
                } else {
                  return (
                    <p
                      className="font-['Bellota'] text-8xl"
                      key={`codedMessage${index}`}
                    >
                      {char}
                    </p>
                  )
                }
              })}
          </div>
        ))}
        <div className="h-[200px]"></div>
      </div>
    </div>
  )
}

function WheelOutline({
  radius,
  padding,
}: {
  radius: number
  padding: number
}) {
  const pivotX = 397.5 // half of container width (700px)
  const pivotY = 745 // full container height (top: 100%)
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
