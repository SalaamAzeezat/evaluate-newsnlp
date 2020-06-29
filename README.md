# Evaluate News Article With NLP

## Overview
Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data. 
NLPs leverage machine learning and deep learning create a program that can interpret natural human speech.

## Getting started
This app is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites using a new API called Aylien. It gives information on the tone of speech used in the given text whether positive or negative. 
It also gives information on subjectivity, polarity, polarity confidence, and subjectivity confidence.

### Prerequisites
You need `node` and `npm` installed on your system to be able to run and build this project.

## Project Setup
- Starter code cloned from Udacity repository.
- Generate node_modules folder with `npm install -S`.
- Ensure name corresponds to file name in the package.json.
- Install all dependencies.
- Create a babel.rc file with required statements.
- Sign up for Aylien API credentials.
- Install the SDK package and require it in the server file.
- Modify javascript files to fetch data from server and aylien API and also update User Interface.
- Add export statements to javascript files and import statements for the javascript files in the index.js file(client folder).
- Generate dist folder by creating a build command in package.json and running `npm build`.
- Update server file by changing the home route to use index file from dist and also look for asset files in dist folder instead of client.
- Create webpack config files named `webpack.prod.js` and `webpack.dev.js` for production and development mode respectively with their required dependencies and attributes in the module.exports.
- Modify build command to use both config files in package.json `build-dev:webpack --config webpack.dev.js` and `build-prod:webpack --config webpack.prod.js`.
- Build app with `npm run build-dev`.
- Install webpack dev server and edit the build-dev npm script to use webpack dev server to watch for new changes and compile automatically `webpack-dev-server --config webpack.dev.js --open`.
- Change css files to sass files and import to index.js file(client folder) and remove reference from index.html.
- Testing done with jest on certain javascript functions.
- Service-workers set up for offline functionality in app.

## Running Project
After downloading files or cloning the repository
- Install all dependencies with `npm install -S`.
- Create dist folder by running `npm run build-prod`.
- Sign up for API credentials with this link (https://developer.aylien.com/signup) to get Aylien credentials.
- Create a `.env` file that contains  `API_ID` and  `API_KEY` to make API credentials private.
- `npm test` to run jest test.
- Start the server by running `npm start`.
- Run `npm build-dev` to start a dev server for the webpage.

## How to use 
An input field will be shown once the app is built on the web browser. Simply paste in a url to an article or site you want to analyse and press submit. The page will update and show the result, if the article is positive or negative, with which confidence, and the analysed text.

## Dependencies
aylien_textapi
babel-polyfill
body-parser
cors
dotenv
express
jest-fetch-mock
webpack
webpack-cli
## devDependencies
@babel/core
@babel/preset-env
babel-loader
clean-webpack-plugin
css-loader
html-webpack-plugin
jest
jest-each
mini-css-extract-plugin
node-sass
optimize-css-assets-webpack-plugin
sass-loader
style-loader
supertest
terser-webpack-plugin
webpack-dev-server
workbox-webpack-plugin
