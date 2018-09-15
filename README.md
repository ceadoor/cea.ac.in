## Website for College of Engineering Adoor


https://ceadoor.github.io/cea.ac.in/

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ceadoor/cea.ac.in/blob/master/LICENSE)
[![Node.js](https://img.shields.io/badge/node%40LTS-%3E%3D8.12.0%20-orange.svg)](https://nodejs.org/en/download/)
[![npm](https://img.shields.io/badge/npm-%3E%3D6.4.1-lightgrey.svg)](https://www.npmjs.com/get-npm)
[![Build Status](https://travis-ci.org/ceadoor/cea.ac.in.svg?branch=master)](https://travis-ci.org/ceadoor/cea.ac.in)

Welcome! This repository houses all of the assets required to build the website for College of Engineering Adoor. We're very pleased that you want to contribute!

## To get started

### You must have [Node.js LTS](https://nodejs.org/en/download/) installed in your machine to use [Webpack](https://webpack.js.org/)

### Quick Start

#### 1. Fork this repository
#### 2. Clone the fork to your local machine
```
git clone https://github.com/username/cea.ac.in .
```
#### 3. Switch to the directory and Install All Packages
```
npm install
```
#### 4. Start Development Environment
```
npm start
```
Check the browser at http://localhost:8080/ to see the live local version

# How to use

- Add your html files in the `src` directory (By default `index.html` is added to your `src` directory, feel free to edit it)

  - Make sure you add it in your `webpack.config.js` (Replace `yourfile` with your `filename`)

    ```javascript
    plugins: [
        ...
        new HtmlWebpackPlugin({
            template: 'src/yourfile.html',
            inject: 'body',
            filename: 'yourfile.html'
        }),
        ...
    ],
    ```

- Add images to your `src/assets` folder
- Add sass files to `src/scss` folder

  - Make sure you import the scss file in `main.scss`

    ```sass
    @import "filename";
    ```


### Ideas?

Create a regular issue [here](https://github.com/ceadoor/cea.ac.in/issues/new)

