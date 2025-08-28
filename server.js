// Boiler plate stuff:
// Express, like most of the tools you will use alongside Node, is available as a package on through npm, allowing it to be easily installed through the command line.

// In order to follow along with the examples given throughout this lesson:
// - Create a new project folder locally (and name it something like "express-app-one").
// - Run git init within the project folder to create a git repository.
// - Run npm init within the project folder to create a package.json file.
// - Install nodemon within your project using npm i nodemon --save-dev.
// - Install Express within your project using npm i express.
// - Create a JavaScript file called index.js, where you will code along.
// - Import Express within index.js using const express = require("express").
// - Start your application using the command nodemon index.js.





// After installing express this is boilerplate stuff

const express = require("express");


const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})