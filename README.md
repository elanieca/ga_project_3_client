
# THE DIARY LIBRARY APP

![screenshot_homepage.png ](./src/images/screenshot_homepage.png "")
## Project Description
The Diary Library is a **Full-Stack** multi-pages web application which allows users to log their latest books. 
Other key features include the ability to **register** & **login**. Users are also able select their **favorites** books which are shown on a dedicated page. Users can see the **latest posts** from all users as well.
The back-end was developed using Express in Node.js whilst React was used to build the front-end. The data is stored on a MongoDB database.

## Deployment Link
 [https://the-diary-library-app.netlify.app/welcome/](https://the-diary-library-app.netlify.app/welcome/ "The Diary Library App")

### API Repository Link
 [ https://github.com/thomalex001/ga_project_3_api]( https://github.com/thomalex001/ga_project_3_api/ "The Diary Library API Repository Link")


## Getting Started/Code Installation
Ensure that you have cloned or downloaded both front-end and back-end repositories onto your machine and follow these steps:
1. In the  CLI, run `npm` and then `npm i` on the root level to install dependencies for the backend.
2. In the CLI, open a new tab, and navigate to frontend cd frontend and run the same commands `npm` and `npm i` to install dependencies.
2. Then run the command `npm start` on both terminals.
3. Run the command `npm start` in both tabs to run program in your local environment.


### Dependencies
* MongoDB
* Express
* Cloudinary
* MUI (React components library)
* SASS
* Axios packages
* CORS packages

## Timeframe 
This project was developed with two of my fellow classmates: [Melanie Sophie Speckens ](https://github.com/elanieca)and [Imogen Farr ](https://github.com/imogen-farr). As a group, we dedicated full day of planning using a detailed wireframe. Constant communication on our Trello board, Zoom and Slack was essential and version control on Git-Hub ensured a linear workflow which simulated a realistic work environment. GitHub/Zoom/Slack and Visual Studio Code.

## Technologies Used
* Excalidraw (wireframe)
* HTML/SASS/JavaScript
* React
* Visual Studio Code
* Postman
* Git/GitHub
* Axios packages
* CORS packages
* MUI (React components library)
* Google Fonts
* Zoom
* Slack
* MongoDB Cloud (deployment database)
* Netlify (deployment front-end)
* Heroku (deployment back-end)


## Brief/Technical Requirements

- **Build a full-stack application** by making our own backend and front-end
- **Use a Express with Node.js API** using Node.js framework to serve our data from a MongoDB database
- **Consume an API with a separate front-end** built with React
- **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
- **Be deployed online** publicly accessible.

## Planning
![screenshot_wireframe.png](./src/assets/screenshot_wireframe.png"")

* Used Excalidraw to build a wireframe and design the basic layout of the app.
  * The wireframe shows 9 pages, 3 of which are accessible wihout logging in: Welcome, Register, Login,
  * Once the User is logged in, he has access to: Homepage, Latest Posts, Book Index, Favorite Books, Book Show, Add A Book.
  * A navigation bar is used to navigate between each main pages.

## Build/Code Process

### Day One

* Installation
  * Created a new repository on GitHub and cloned it locally. (Alex/Joel)
  * Initial setup ot the React application using MacOs terminal. (Alex/Joel)
  * Installed Axios Packages and Bulma library. (Alex/Joel)

* Excalidraw  
  * Created a wireframe with each pages/components required for the app. (Alex/Joel)
  * API research (Alex/Joel)

### Characters List:
![screenshot_index.png](./src/images/screenshot_index.png"")
  * Created the `api.js` with the code (below) to fetch the required data based on our wireframe. (Alex/Joel)
  ```javascript
  import axios from 'axios';

  const BASE_URL = 'https://rickandmortyapi.com/api/character';
  const EPISODE_URL = 'https://rickandmortyapi.com/api/episode';

  export const getAllEpisodes = (pageNumber) =>
    axios.get(`${EPISODE_URL}/?page=${pageNumber}`);

  export const getAllCharacters = (pageNumber) =>
    axios.get(`${BASE_URL}/?page=${pageNumber}`);

  export const getCharacterBio = (characterId) =>
  axios.get(`${BASE_URL}/${characterId}`);

  ```
  * Created the NavBar (Joel)
  * Created Home and Characters List buttons on the NavBar. (Joel)
  * Created Characters List page and fetched data from API. (Alex)
  * As our API was only showing 20 characters per page, we created pagination to 
show all characters. (Joel)

### Day Two

### Characters Bio:
![screenshot_characters.png](./src/images/screenshot_characters.png "")

  * Created Characters Bio page and fetched data from API. (Alex)
  * Maniuplated data to show a different icon for Characters Status depending on result. (Alex)
    * for example, if the Character's Status is "Alive", ✅ icon appears, however if he is "Dead" the icon ☠️ is showed.

### Episodes List:
![screenshot_episodes.png](./src/images/screenshot_episodes.png "")

  * Created Episodes List Page. As we did not have images of each episodes, we decided
  to show random images of characters who appeared in that specific episode, see code below  (Alex/Joel)
  ```javascript
  import axios from 'axios';
  import { useState, useEffect } from 'react';

  const randomCharacter =
    characters[Math.ceil(Math.random() * characters.length)];

  useEffect(() => {
    axios.get(randomCharacter).then((res) => {
      console.log({ res });
      setDisplayCharacter(res.data.image);
    });
  }, []); 
  ```

  * Manipulated data to show the number of episodes each characters appeared on.(Alex)
  * Added syling to Navbar and Homepage. (Joel)
  * Added styling to Characters List and Bio. (Alex)
  * Deployed the project onto Netflify (Alex/Joel)


## Challenges
* Using Git/GitHub for the first time as a tool to collaborate slowed us down at the start however with some practice, we speeded up the process and reduced the amount of merging conflicts considerably.
* Using a CSS library for the first time also slowed down the styling of our app as we had
to read the documentation.

## Wins
* This was our first project involving back-end programming and fetching and API, the process was highly enjoyable and our communication really helped getting things done in time.
* The use of CSS library made our styling simpler even though we lost valuable time in the process of reading the documentation.

## Key Learning/Takeways
* Pair-Programming 
* API fetching
* Use of Bulma (CSS library) for the first time 

## Bugs
![screenshot_card_error.png](./src/images/screenshot_card_error.png "")

* In the Episodes List page above, when an image does not load, the image `alt` is showed, however, what should show is a generic image such as the example below for Characters Card.

![screenshot_card.png](./src/images/screenshot_card.png "")


## Future Improvements
* Adding a condition in which second image is loaded onto a card if the fist image link is invalid.
* Adding a search function to the Navbar


## THANKS FOR READING!













DAY ONE

Mell, Imogen, Alex
Created Wireframe with excalidraw 
LINK TO EXCALIDRAW
Created book-diary-api
Created repository with boilerplate api request, changed eslint/prettier settings
Created gitignore file and added “node module”, “.env”, “DS_store”

Installed dependencies:

    "dev": "npx nodemon index.js,
    "seed": "node db/seed.js
  "dependencies": 
    "bcrypt":
    "cors":
    "dotenv": 
    "express": 
    "jsonwebtoken":
    "mongoose"
    "mongoose-hidden"
    "Mongoose-unique-validator"

Mell 
UserSchema

Imogen
BookSchema

Alex
GenreSchema


DAY TWO

Mell 
userController, secureRoute, Seeding, testing all functions on Postman

Imogen 
bookController and Routes, Seeding

Alex
genreController and Routes, Seeding, testing all functions on Postman

DAY THREE


Mell 
Created Repo for React App
Imogen
 
Alex 

DAY FOUR

Mell 
Created NavBar and Theme

Imogen
Created BookShow and BookCard 

Alex 
Created Register, LatestPosts/Ratings, Dashboard, Profile Picture

DAY FIVE

Mell
Avatar show on Navbar and Register page, Refresh button for LatestPosts

Imogen
AddRemoveFavorite function

Alex
usersFavoriteBooks


TODO:

Register
Add avatar picture 

PostCard
Check that On click postcard should lead to BookShow
