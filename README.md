A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Street1, Street2, Street3, Store, and Alley.
- **2+ scenes *not* based on `AdventureScene`**: Intro, Loading_Screen, and Outro.
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: The gotoScene method was used when clicking on an arrow and makes a sound before transitioning into the next scene.
    - Enhancement 2: The showMessage method was used to give descriptions of the characters, objects, and creatures used in each of the scenes.

Experience requirements:
- **4+ locations in the game world**: The loactions for the game are: First Street, Second Street, Third Street, Store, and Alley Behind the Store.
- **2+ interactive objects in most scenes**: You can interact with the characters and objects by just clicking them to reveal a funny or useful message and by clicking an item or character, a "ding" sound will be played.
- **Many objects have `pointerover` messages**: When hovering over the characters or objects, the right hand box will display a message related to the character or object. 
- **Many objects have `pointerdown` effects**: Upon clicking certain objects, you can obtain items for your inventory that can be useful later in the game. 
- **Some objects are themselves animated**: Upon defeating the Garr monster, it will disappear and when you pick up the gas tank left behind by the monster it will disappear as well. 

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)
**For the sprite and audio assets, the sprites were made in pixilart.com by me Jorge Gonzalez and the audio was made in beepbox.co also made by me. As for the background images, these were made using an AI Art Generator app called StaryAI with prompts "Alley behing a store", "Inside of a store with a door at the end leading to an alley", "Inside of a store", and "Random street".**

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me (Jorge Gonzalez).
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me (Jorge Gonzalez).