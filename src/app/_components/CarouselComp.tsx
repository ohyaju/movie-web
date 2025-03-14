import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import React, { useEffect, useState } from 'react'
import { instance } from '../utils/axios-instance';

type MovieType = {
  id: number;
  title: string;
  poster_path: string;
};

const CarouselComp = () => {
  const [movieList, setMovieList] = useState<MovieType[]>([]);

  const getMovies = async () => {
    const movies = await instance.get('/movie/popular?language=en-US&page=1');

    setMovieList(movies.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Carousel
      opts={{ loop: true }}
      // plugins={[Autoplay ({delay:2000})]}
      className="relative flex mt-[59px] lg:mt-[83px] h-[510px] md:h-fit
    w-screen overflow-hidden"
    >
      <CarouselContent className="pt-3 w-full content-center">
        {movieList.slice(0, 5).map((movie) => {
          return (
            <CarouselItem
              key={movie.id}
              className=" shrink-0 relative"
            >
              <div className="relative">
                <div className="absolute inset-0 z-10 transition-all 
                duration-300 bg-black/30" />
                <img
                  className="w-full object-cover object-top" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  /> 
              </div>
              <div className="absolute w-full top-1/3 left-1/12 z-20">
                <h1 className="text-white z-30 text-6xl font-bold">
                  {movie.title}
                </h1>
                <p>{movie.overview}</p>
          
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-12 z-50" />
      <CarouselNext className="absolute right-12 z-50" />
    </Carousel>
  )
}

export default CarouselComp
