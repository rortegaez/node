-- creación de la base de datos 
DROP DATABASE IF EXISTS moviesdb;
CREATE DATABASE moviesdb;

-- usar
USE moviesdb;

-- crear la tabla movies
CREATE TABLE movie (
id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
title VARCHAR(255) NOT NULL,
year INT NOT NULL,
director VARCHAR(255) NOT NULL,
duration INT NOT NULL,
poster TEXT,
rate DECIMAL(2, 1) UNSIGNED NOT NULL
);

CREATE TABLE genre(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE movie_genres (
movie_id BINARY(16) REFERENCES movies(id),
genre_id INT REFERENCES genre(id),
PRIMARY KEY (movie_id, genre_id)
);

INSERT INTO genre (name) VALUES
('Drama'),
('Action'),
('Crime'),
('Adventure'),
('Sci-Fi'),
('Romance');

INSERT INTO movie (id, title, year, director, duration, poster, rate) VALUES
(UUID_TO_BIN(UUID()), "Inception", 2010, "Christopher Nolan", 180, "https://i.ebayimg.com/images/g/yokAAOSw8w1YARbm/s-l1200.jpg", 8.8);

INSERT INTO movie (id, title, year, director, duration, poster, rate) VALUES
(UUID_TO_BIN(UUID()), "The Shawshank Redemption", 1994, "Frank Darabont", 142, "https://i.ebayimg.com/images/g/4goAAOSwMyBe7hnQ/s-l1200.webp", 9.3);

INSERT INTO movie (id, title, year, director, duration, poster, rate) VALUES
(UUID_TO_BIN(UUID()), "Pulp Fiction", 1994, "Quentin Tarantino", 154, "https://www.themoviedb.org/t/p/original/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg", 8.9);

INSERT INTO movie_genres (movie_id, genre_id)
VALUES
((SELECT id FROM movie WHERE title='Inception'), (SELECT id FROM genre WHERE name ='Sci-Fi')),
((SELECT id FROM movie WHERE title='Inception'), (SELECT id FROM genre WHERE name ='Action')),
((SELECT id FROM movie WHERE title='The Shawshank Redemption'), (SELECT id FROM genre WHERE name ='Action')),
((SELECT id FROM movie WHERE title='Pulp Fiction'), (SELECT id FROM genre WHERE name ='Action'));

SELECT *, BIN_TO_UUID(id) id FROM movie