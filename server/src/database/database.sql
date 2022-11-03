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

