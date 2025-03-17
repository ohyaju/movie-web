'use client'
import GenreSelector from "./_components/GenreSelector";
import { useEffect, useState } from "react";
import CarouselComp from "./_components/CarouselComp";
import CardComp from "./_components/CardComp";
import HeaderComp from "./_components/HeaderComp";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

}
export default function Home() {
  const [movieList, setMovieList] = useState<MovieType[]>([]);


  return (
    <div>
      <div className="flex gap-10">
      <HeaderComp/>
      <GenreSelector/>
      </div>
      
      <CarouselComp />
      <h1 className="font-bold px-5 py-5">Upcoming</h1>
      <div className="grid-flow-col grid-rows-2 gap-8 grid grid-cols-5 items-center justify-items-center justify-self-center ">
        <CardComp/>
        <div>
          {movieList.map((movie) => {
            return (
              <div key={movie.id}>
              
                <h1>{movie.title}</h1>
             
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
              </div>
            );
          })}
        </div>
      </div>
      

    </div>
  );
}
