import { Request, Response } from "express";
import connection from "./connection";
import app from "./app";

const createTableRating = async () => {
   await connection.raw(`
   CREATE TABLE Rating (
      id VARCHAR(255) PRIMARY KEY,
      comment TEXT NOT NULL,
      rate FLOAT NOT NULL,
      movie_id VARCHAR(255),
      FOREIGN KEY (movie_id) REFERENCES Filmes(id)
   )
   `)
}

const createTableMoviecast = async () => {
   await connection.raw(`
   CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
      FOREIGN KEY (movie_id) REFERENCES Filmes(id),
      FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
   `)
   console.log("deu certo")
}

// createTableRating();
createTableMoviecast();
