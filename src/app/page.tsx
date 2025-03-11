'use client'

import { ACCESS_TOKEN } from "./index";
import axios from "axios";
import { useEffect, useState } from "react";

type MovieType = {
  id: number;
  title: string;
  poster_path: string;
};
export default function Home() {
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       `Bearer ${ACCESS_TOKEN}`,
  //   },
  // };
  const getMovies = async () => {
    const movies = await axios.get("https://api.themoviedb.org/3/discover/movie",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    setMovieList(movies.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 
    pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {movieList.map((movie)=> {
        return (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
            </div>
        );
      })}

    </div>
  );
}
