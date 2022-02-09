# Natural Language Processing App Project

## Overview
This is the fourth of five projects required in order to be considered for a frontend certification by Udacity. It
tests my ability to properly setup a single page application using webpack. Particular emphasis are on 
1. project structure
2. Proper handling of sensitive information i.e api tokens
3. Properly setup webpack for different environments.

## Instructions
### Express Server
1. This project runs on `Node.js`. In the root folder `npm install` to install it dependencies.
2. Then run `npm run start` to start the express server.

### SPA Frontend
This part of the project ensures that webpack is properly setup to handle two types of environment;
1. Development
While in development you are encouraged to use the `npm run serve:dev`. This config option as been 
properly setup to afford a painless development experience.
2. Production
At the end development one simply `npm run build:prod` to build the production version of the app.
Upon successful build, the express serve the serves the prod build at localhost:8081

## Extras
This project was bootstrapped with the [skeleton project](https://github.com/udacity/fend-webpack-content) provided by
the Udacity team. 
