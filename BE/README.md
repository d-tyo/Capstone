# Capstone Project - Circle Play


Circle Play backend application designed to cater for students, educators and (guest users). Educators/Teachers can *add,edit,delete* student(s) or lesson(s). It leverages the power of MySQL as its database to store and manage data.Json that content details of users.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Configuration](#configuration)
4. [Database Setup](#database-setup)
5. [Running the Application](#running-the-application)
6. [API Documentation](#api-documentation)
7. [Testing](#testing)
8. [Contributing](#contributing)
9. [License](#license)

## Key Features

**RESTful API**: Provides a RESTful API for 
[API: stuobjar - student profiles, trobjar - teacher profiles, lessobjar - lesson details].
**Authentication and Authorization**: Implements secure user authentication and authorization mechanisms.
**Data Validation**: Incorporates robust data validation to ensure data integrity.
**Error Handling**: Includes comprehensive error handling for a seamless user experience.
**Testing**: Unit tests and integration tests ensure the reliability of the application.



## Essential

Dependencies and tools required to run the project, including but not limited to:

- Node.js -> Backend server
- npm -> 
- Express.js -> Framework for build API
- Data.json ->
- MySQL -> Database management system 
- Postman -> Database


### First Installation Needed
npm in stall 

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", //Vitest unit testing command
    "start": "nodemon server.js" //to start server.js
  },
  "author": "",
  "license": "ISC",
  "dependencies": 
    "axios": "^1.6.2",         //Client making requests
    "bcryptjs": "^2.4.3",      //Auth for data encryption & password hashing
    "cors": "^2.8.5",         //Middleware handling Cross-Origin Resource Sharing 
    "dotenv": "^16.3.1",      //Loads .env
    "express": "^4.18.2",     //Framework for Node.js
    "json-server": "^0.17.4", //Fake REST API for prototyping 
    "jsonwebtoken": "^9.0.2", //security 
    "multer": "^1.4.5-lts.1", //File upload
    "mysql2": "^3.6.5",       //Database test run
    "npm": "^10.2.5",          //Package Manager
    "sequelize": "^6.35.1",
    "start": "^5.1.0"


origin: http://localhost:5173
run on port: http://localhost:8080
Clone the repository:

```bash
git clone https://github.com/d-tyo/Capstone/tree/main/BE
