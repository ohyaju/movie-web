'use client'
import GenreSelector from "./_components/GenreSelector";
import { useEffect, useState } from "react";
import CarouselComp from "./_components/CarouselComp";
import UpcomingMovies from "./_components/UpcomingMovies";
import PopularMovies from "./_components/PopularMovies";
import TopRatedMovies from "./_components/TopRatedMovies";
import { instance } from "./utils/axios-instance";
import SearchComp from "./_components/SearchComp";
import FooterComp from "./_components/FooterComp";
// import { Film } from 'lucide-react';

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
  const [movieList, setMovieList] = useState<MovieType[] | null>(null);
  const [genreId, setGenreId] = useState(18);

  const getMovies = async () => {
    const movies = await instance.get(`https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}`);
    setMovieList(movies.data.results);

  };

  useEffect(() => {
    getMovies();
  }, [genreId]
  );


  return (
    <div>
      <div className="flex pt-5 gap-20">
      <GenreSelector />
      <SearchComp/>
      </div>
      
      <CarouselComp />
      <div>
          <UpcomingMovies />
          <PopularMovies />
          <TopRatedMovies />
      </div>
      <FooterComp/>
    </div>
  );
}
