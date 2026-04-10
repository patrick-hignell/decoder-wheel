## [Decoder Wheel](https://github.com/patrick-hignell/decoder-wheel)
I wanted to create a decoder wheel which I could then print out and use in puzzles with friends. I used Typescript and React to create a web page. I chose to use D&D dice as symbols for the wheel, placed them in an array and then placed them in a circle by mapping the array, rotating each item and translating them by the radius using absolute position.

The inner or outer wheel can then be hidden so that they can be printed out separately to make a physical copy.

The user can select a key and enter a message which will then be coded according to the selected key. There is a list at the bottom of every possible variation of the code, displaying which key would be requried for each variation.

<details open>
<summary><em>Screenshot</em></summary>

![Event Planner screenshot](https://github.com/patrick-hignell/patrick-hignell/blob/main/public/images/DecoderWheelScreenshot.png?raw=true)

</details>

<details>
<summary><em>Next Steps</em></summary>
  
- Add options for the user to change the order of the symbols
  
- Add options for uploading custom symbols/ using letters or numbers

- Add printing options
</details>
