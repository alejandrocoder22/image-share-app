# Images Share App

## Overview

Small project that lets you host and share images.

It has a dashboard that let you check the images you hosted and you have the option of deleting them.

Is built with React, PostgreSQL, Express, Typescript, and Multer.

My primary goal was to experiment with a first approach to Typescript and learn to manage files in forms.

## How to run the project

After cloning the project:

Install all dependencies in server and client

```
cd client
npm install 
cd server
npm install
```

Install postgreSQL and add the following database / Tables

```
CREATE DATABASE images_app;

CREATE TABLE users(
    user_id SMALLSERIAL UNIQUE PRIMARY KEY,
    username VARCHAR(25),
    password VARCHAR(250),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE images(
    image_id SMALLSERIAL PRIMARY KEY UNIQUE,
    url VARCHAR(500),
    user_id SMALLINT REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
)
```

Add enviroment variables

```
PG_PASSWORD / Desired PostgreSQL Password
JWT_PASSWORD / Desired Jsonwebtoken password
```

Run client and server

```
cd client 
npm run dev
cd server
npm run dev / Default on port 3006
```