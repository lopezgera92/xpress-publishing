# X-Press Publishing
X-Press Publishing is a web application built using the React framework for the front end, and express/sqlite for the backend. It allows users to create, view, update, and delete items such as artists, series, and issues. Using a RESTful API architecture in combination with SQLite the data created/manipulated within the application persists after the application is closed. 

![screen shot 2019-01-31 at 9 26 50 pm](https://user-images.githubusercontent.com/27708647/52104538-f14e9e80-259f-11e9-98b7-197e65f4a95e.png)

![screen shot 2019-01-31 at 9 28 04 pm](https://user-images.githubusercontent.com/27708647/52104551-00cde780-25a0-11e9-918f-5040fdc79267.png)

![screen shot 2019-01-31 at 9 28 40 pm](https://user-images.githubusercontent.com/27708647/52104562-0fb49a00-25a0-11e9-83f1-bf67695d1e14.png)

![screen shot 2019-01-31 at 9 30 49 pm](https://user-images.githubusercontent.com/27708647/52104572-1e9b4c80-25a0-11e9-97c7-e75bd22b9c9d.png)


### Prerequisites
* [Node.js](https://nodejs.org/en/) - The runtime environment used
* [npm](https://www.npmjs.com/) - The default package manager for Node.js


### Installing
* Using your Command Line Interface (CLI) type the command "node -v" to check if you have Node.js installed on your machine
* If Node is not installed on your machine, visit the Node website linked above and download the latest version of Node.js
* npm is distributed with with Node.js - meaning that when you download Node.js, you automatically get npm installed on your machine
* To confirm that you have npm installed you can type the command "npm -v" in your CLI

* To install the necessary dependencies to run the application, type the command "npm install" in your CLI
* To install express in your working directory type "npm install express --save" in your CLI
* To install sqlite in your working directory type "npm install sqilte3" in your CLI
* To run the application, type the command "npm start" into your CLI to begin the react script start
* If the application does not open automatically, drag the index.html file into your browser

## Testing
* Test suites created using the Mocha/Chai JavaScript testing frameworks. Type commands "npm install --global mocha" and "npm install --global chai" in your CLI
* Run test script by typing "npm test" in your CLI


## Built With
* [React](https://reactjs.org/docs/getting-started.html) - The web framework used
* [npm](https://www.npmjs.com/) - Dependency Management
* [sqlite3](https://github.com/mapbox/node-sqlite3/wiki) - Relational Database Management System
* [express](https://expressjs.com/en/guide/routing.html) - Route Hanlding


## Authors
I implemented the routing and database logic. Codecademy.com provided the styling/structure of the application as well as the React components and functionality 
* **Gerardo Lopez** - api.js, artists.js, issues.js, series.js, migration.js, server.js
* **Codecademy.com** - reset.css, style.css, bundle.js, bundle.js.map, index.js, XPress.js, App.js, Artists.js, Landing.js, Series.js, seed.js, test.js, index.html
