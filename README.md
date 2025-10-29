### SVG Piano — Neumorphic Clickable Keys, Vanilla JS MP3 Mapping

Live Site URL: https://antonina-kachusova.github.io/SVG-Piano-Neumorphic-Clickable-Keys-Vanilla-JS-MP3-Mapping/

A tiny interactive piano built with pure HTML, SVG, CSS and vanilla JavaScript. Click any key to hear a note; each press briefly “depresses” the key with a neumorphic effect.

## Technologies Used / how it works

- *SVG keys*: every piano key is an individual `<path>` inside one SVG; each path is wrapped in an anchor `<a>` so the whole key is clickable. 

- *Indexing keys in JS*: I collect all `<path>` nodes (.white-keys and .black-keys) into one array, assign 
a `dataset.index`to each, and use that index to decide which sound to play on click. 
(e.g., `e.target.dataset.index`). 
- *Audio playback*: on each click I create `new Audio`(`./audio/key-${keyPlayNow}.mp3`), pause any currently playing audio, then play the selected file. 
- *Pressed-state feedback*: on click I add the class active `.classList.add("active")`, then remove it after a short timeout (`setTimeout(...)`), creating a quick visual “dip” as if the key is pressed. 

- *Neumorphism styling*: the 3D soft-shadow look is made with `filter: drop-shadow()` and small `transforms` on the SVG paths. Separate hover/active styles for white and black keys simulate highlight/shadow changes. 

- *Favicon*: a tiny inline SVG note emoji is used as a favicon via a data URL. 


## Features

- SVG-based interactive piano keys
- Audio feedback for each key
- Neumorphic 3D animation on key press
- Responsive styling with pure CSS
- Minimal and clean UI with smooth transitions

## Tech stack

- HTML + SVG for structure

- CSS for neumorphic styling and pressed animations

- JavaScript (no frameworks) for events, dataset indexing, and audio playback

## Developer Notes

- Since the piano keys are SVG `<path>` elements, traditional button styles like `padding`, `border-radius`, etc., don't apply — therefore, the 3D effect is achieved with `drop-shadow()` and `transform`.
- No `data-` attributes are defined in the HTML. Instead, each key gets assigned a dynamic `dataset.index` via JavaScript.
- The audio files are named sequentially and loaded dynamically based on the key index.

## Demo

![SVG Piano — Neumorphic Clickable Keys, Vanilla JS MP3 Mapping — Demo](demo/demo.gif)

## Project Structure
- index.html
- styles.css
- app.js
- audio/key-1.mp3
- images/piano.svg
- demo/demo.gif

## How to Run
1. Open `index.html` in any modern browser.
2. Click the keys to play notes.
3. Optionally, host the project with Live Server or similar tools.


