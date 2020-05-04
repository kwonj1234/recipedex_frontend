This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project uses [Flask](https://flask.palletsprojects.com/en/1.1.x/installation/#installation) and Python3 on the backend.

This project uses the [recipe-scrapers tool](https://github.com/hhursev/recipe-scrapers).

## Set Up RecipeDex
You can find the backend code for RecipeDex [here](https://github.com/kwonj1234/recipedex_backend).

Assuming you have both [Node.js](https://nodejs.org/en/) and [Flask](https://flask.palletsprojects.com/en/1.1.x/installation/#installation) installed.

Install RecipeDex using

    git clone https://github.com/kwonj1234/recipedex_backend.git &&   
    git clone https://github.com/kwonj1234/recipedex_frontend.git &&   
    cd recipedex_frontend && npm install

## Running locally
From the directory you cloned the two repositories, start the Flask server.

    cd recipedex_backend &&   
    python3 run.py

In a separate terminal, return to the directory you cloned the two repositories and start up the application in development mode.
 
    npm start