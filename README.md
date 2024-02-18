# react-tic-tac-toe Test task
This project is a test task. The task is to create a tic-tac-toe game using the React library and the Javascript language.
The project needs to implement:
- 3x3 game board
- implement the standard logic of the tic-tac-toe game.
- implement the mechanism of displaying whose turn it is.
- implement the winning logic && display the winner.
- implement reset game logic && reset button.

Steps to install:
- clone project to your local machine.
- run "`npm install`" command in the terminal in the root folder of the project.
- run "`npm start`" command, and open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

# Document any significant decisions, patterns, or components used in the development of the game.
- I created this application using the classic React architecture. 
- To implement the logic for checking winning combinations, an array was created in a constants.js file to store the winning combinations. Then, we iterate through the array using a loop to determine whether any of these combinations exist on the game board.
- I used the "styled-components" library to create component styles.

# If you referred to any external resources or had to use code snippets, please provide proper attribution in the comments and explain why and how you used them.
- I used [useful-nth-child-recipies](https://css-tricks.com/useful-nth-child-recipies/) website to see how to select the first and last 3 elements in CSS. (`&:nth-child(-n + 3)` && `&:nth-last-child(-n + 3)`.
- I used [Styled Component](https://styled-components.com/docs/basics/) website to see the style of writing keyframes in "styled-components" library