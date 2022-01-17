CREATE DATABASE IF NOT EXISTS practiceDB;
USE practiceDB;

CREATE TABLE IF NOT EXISTS movies(
    id INT primary key AUTO_INCREMENT NOT NULL ,
    title VARCHAR(50) NOT NULL ,
    description VARCHAR(200) NOT NULL ,
    year INT NOT NULL ,
    duration VARCHAR(10) NOT NULL ,
    rating INT NOT NULL
);

INSERT INTO movies (title, description, year, duration, rating)
VALUES ('Guardians of the galaxy', 'Space pirate movie, following the adventures of jack sparrow and a racoon', 2014, '1.4 hours', 0);
