# Intro to Express

## Learning Objectives

By the end of this lesson, learners will be able to:
- Create an Express application.
- Implement Express routing.
- Explain the usage of route paths.
- Create routes with route parameters.
- Create Express middleware.
- Use Express middleware, including third-party middleware.
- Summarize common middleware use cases.
- Explain the purpose of template engines.
- Create and register a basic template engine.
- Use response object methods to generate rendered template views.
- Use response object methods to send JSON data responses to client requests.

##

# Express Basics

## Express

Express is self-described as a "fast, unopinionated, minimalist web framework for Node.js." It provides a robust set of features for creating and scaling web applications through a flexible framework that includes HTTP utility methods and middleware.

## Activity: Express Installation

Express, like most of the tools you will use alongside Node, is available as a package on through npm, allowing it to be easily installed through the command line.

In order to follow along with the examples given throughout this lesson:
- Create a new project folder locally (and name it something like "express-app-one").
- Run git init within the project folder to create a git repository.
- Run npm init within the project folder to create a package.json file.
- Install nodemon within your project using npm i nodemon --save-dev.
- Install Express within your project using npm i express.
- Create a JavaScript file called index.js, where you will code along.
- Import Express within index.js using const express = require("express").
- Start your application using the command nodemon index.js.

## Creating an Express Server

Creating and starting an Express server is simple. First, we create an application by running (calling) express() and caching the return as a variable, typically called app.


Then, we tell the app to listen to a particular port, using the same syntax as with Node's built-in http module's createServer technique. It's that simple (almost)!

## Express Routing

Express requires us to define routes, which is why the response of the previous example showed "Cannot GET /". By default, the web client is asking for the base route "/" from the server using an HTTP GET request.


Right now, however, we do not have anything handling that route.


Express routes have the following structure:

- app.method(path, handler)
    - app is the instance of Express.
    - method is the HTTP request method, in lowercase (GET, POST, DELETE, etc.).
    - path is the URL path on the server.
    - handler is the function executed when the route is matched.



## Creating GET Routes

The most commonly-used routes are GET routes, which simply request a resource to be delivered. In order to expand the example application, we will need to add a route that allows the client to GET the base URL, "/" as follows.


In this same way, we can add additional routes to GET additional resources.

## Express Convenience

