# Pesten Assignment
# Prerequisites
- node.js (required for yarn)
- Yarn installed

# Installation guide
## Node.js
1. Download the appropiate installer at Nodejs.org
2. Run the installer
3. Follow the prompt
4. Restart the Computer

## Yarn
1. Make sure that node.js is installed
2. Download the appropiate installer at yarnpkg.com
3. Run the installer
4. Follow the prompt

# Startup
## Changte player names
To change the names of the 4 players, the source code needs to be edited:
1. Open App.js with your favorite text editor
2. At the line that says: "//change when using different names" 4 names are present ("Jan","Wilbert","Robin","Stijn")
3. Edit these names if you want other names to be displayed. Make sure 4 names remain, since methods are not made robust.

## Open the application
1. In the repository (pesten), open the CMD and do "yarn start". the application will now run

# Other tools used
- React: for creating the UI
- JSX: for more intuitive language within React
- W3.css: for a nicer design and layout of the UI

# Design philospohy
## Model-View-Controller
The back-end of the assignment is structured according to MVC.
The Model consists mostly of the gamestate. This gamestate has a deck, a discard pile and the 4 players. Each of these components can have a card, thus a card component is added as well. Each component has some basic methods to allow simple manipulation via the controller.

The Controller is a single object that can manipulate the gamestate in various ways. Via the controller, the gameflow can be controlled. Note that the methods within the controller are not necessary, since the gamestate can be accessed directly via the controller

The View consists of 3 view components: The board, the hand and a card. The board is where the UI is structured. It uses the hand to show the cards a player has. A card is used to display a single card object.

## Template design pattern
Within the model, there are 3 components that store a collection of cards. All three components need to be able to add or remove cards from their collection. As a result, a cord collection template was created.

## Strategy design pattern
A player has a strategy function variable that has an array of playable cards as input. By default, the strategy is set to pick the first card from the array, but other developers may want to try different strategies (e.g. pick the card with the lowest value). It is therefore allowed to set the strategy of a player. (Normally, this would be done via the constructor instead of via a method, according to the pattern)

## Overall look
The players are positioned similar to how a standard card game is played with 4 player around a table. Each card only shows what its suite and value is. Unlike traditional cards, these cards are always oriented in the same way and thus simply showing the value and suite once is more than enough. Finally, each player has some indicator (via colors) as to whether he/she has only 1 card or not or if it is his/her turn.
The design for the middle was hard to come up with. One thing that surely needed to be present is the card on top of the discard pile. Furthermore, it may be nice to know how many cards are on the deck and on the discard pile (also nice to know when testing).

## Interaction
Since it was not required to make it interactive, the user cannot choose which card will be played. Still, to give the user some sort of control over the UI and easily inspect the UI, a single button is added to make the game flow turn by turn.

## Non-required additions
- When the deck is empty and someone needs to get a card, the discard pile (excpet for the top card) will be inserted into the deck and the deck will be shuffled
- The cards of the players are sorted
- The game is (minimally) interactive
- A custom strategy can be set to a player

## Robustness
Though some methods do have preconditions, it is assumed that these are met. Due to the fact that this code will probably not be used again, methods are not made robust.
Furthermore, since the parameters of a method can be of any type, but normally require a specific type, the input type is left out as a precondition within the documentation. 

# Testing
Due to a short amount of available time, the decision was made to go against Test Driven Development (TDD). Since top priority is making the assignment itself, the code was first written, while at the same time an Acceptance Test was done by the developer.
