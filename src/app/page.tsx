'use client'

import { ACCESS_TOKEN } from "./index";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


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
    <div>
    <div>
      <Carousel>
        <CarouselContent className="pt-3 w-full content-center">
          ...
          {movieList.map((movie) => {
            return (

              <CarouselItem key={movie.id}>
                <h1>{movie.title}</h1>
                <img className="w-full" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    <h1>Upcoming</h1>
    <div className="grid grid-flow-col grid-rows-4 gap-8">
      {movieList.map((movie)=> {
        return (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
            </div>
        );
      })}

    </div>
    // </div>
  );
}
