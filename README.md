# appmobile-api

App Mobile - ISEP LABDSOFT Class

# Getting started

To get the Node server running locally:

-   Clone this repo
-   `yarn install` to install all required dependencies
-   Copy the .env.example to .env file, to make the environment file

# Code Overview

## Dependencies

-   [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
-   [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript
-   [passport](https://github.com/jaredhanson/passport) - To manage authentication
-   [cors](https://github.com/expressjs/cors) - To allow access from other origins

## Application Structure

-   `src/` - This folder contains all the source and logic for build the application.
-   `src/app.js` - The entry point to the application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
-   `src/routes/` - This folder contains the route definitions for our API.
-   `src/data/` - This folder contains folders for each schema of the application.

### Files

Inside src/data folders we can find the following files extensions:

-   `.model.ts` - These files represents the schema definitions for our Mongoose models
-   `.service.ts` - These files represents the business logic for each schema
-   `.controller.ts` - These files handles the requests made by the user
-   `.repository.ts` - These files contains the repository pattern
-   `.routes.ts` - These files contains the routes for each schema
-   `.validations.ts` - These files contains the validations for each schema
