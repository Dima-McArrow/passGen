<h2 align="center">passGen</h2>

<div align="left">

![Status not-active](https://img.shields.io/badge/status-not%20active-red.svg)

![Static Badge JS](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=JavaScript)

[![Static Badge Node](https://img.shields.io/badge/Node.js-v23.1.0-5FA04E?logo=nodedotjs)]()

[![Static Badge npm](https://img.shields.io/badge/npm-v10.9.0-CB3837?logo=npm&logoColor=%23CB3837)]()

[![Static Badge Express](https://img.shields.io/badge/Express-v4.19.2-000000?logo=express&logoColor=000000)]()

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [License](#license)

## 🧐 About <a name = "about"></a>

# 🛠️ passGen Project

Welcome to the `passGen` project! This project is a web application designed to generate secure random passwords based on the user's input. The application is built with Node.js and Express on the server-side, and HTML, CSS, and JavaScript on the client-side.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

## Dependencies <a name = "dependencies"></a>

The project uses the following main dependencies:

- `bcryptjs`
- `body-parser`
- `cookie-parser`
- `cors`
- `dotenv`
- `express`
- `express-rate-limit`
- `express-validator`
- `helmet`
- `morgan`
- `multer`
- `path`
- `sass`

Please refer to `package.json` for a complete list of dependencies and their versions.

## Installation

Before running the application, make sure you have Node.js installed. To install the project dependencies, navigate to the root of the project directory and run:

```
npm install
```

## Project Structure <a name = "project-structure"></a>

The directory tree below outlines the overall structure of the `passGen` project:

```
.
├── Procfile
├── package.json
├── public
│   ├── index.html
│   ├── passShow.js
│   ├── styles.css
│   └── styles_mob.css
└── server
    ├── app.js
    ├── controllers
    │   └── passGenController.js
    └── routes
        └── passGenRouter.js

4 directories, 9 files
```

### Description of the Project Structure

- `Procfile`: Specifies the command `web: node server/app.js` to start the server on platforms like Heroku.
- `package.json`: Defines the metadata and the list of dependencies required by the project.
- `public`: Contains the static files served by the application.
  - `index.html`: The main HTML file containing the client-side UI.
  - `passShow.js`: Client-side JavaScript handling password generation requests.
  - `styles.css`: Main stylesheet for desktop viewports.
  - `styles_mob.css`: Additional stylesheet for mobile responsiveness.
- `server`: Contains the server-side code.
  - `app.js`: The entry point of the Express application.
  - `controllers`: Holds the business logic for password generation.
    - `passGenController.js`: Provides functions to generate a random password.
  - `routes`: Defines the routes used in the application.
    - `passGenRouter.js`: Associates routes to their respective controller functions.

## 🎈 Usage <a name="usage"></a>

To start the server, run the following command:

```
npm run start
```

The application will be available at `http://localhost:3000`.

## Scripts <a name = "scripts"></a>

The `scripts` defined in `package.json` include:

- `start`: Starts the server using `node ./server/app.js`.
- `test`: Placeholder script for future test implementation.

---

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@Dima-McArrow](https://github.com/Dima-McArrow) - Idea & Initial work

## Public Assets

The `public` directory contains all the static files needed for the client-side of the application, including HTML, CSS, and client-side JavaScript.

## Server Implementation

The `server` directory is where the Express application, middleware configurations, routing, and password generation logic reside.

## Contributing

If you would like to contribute to the project, please create a fork and submit a pull request with your proposed changes.

## License <a name = "license"></a>

This project is licensed under the ISC License. Feel free to use and modify the source code.

## Credits

The `passGen` project was initially created by Dimitri Makarov.

---
