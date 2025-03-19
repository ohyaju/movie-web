import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import React, { useEffect, useState } from 'react'
import { instance } from '../utils/axios-instance';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
};

const CarouselComp = () => {
  const [movieList, setMovieList] = useState<MovieType[]>([]);

  const getMovies = async () => {
    const movies = await instance.get('/movie/now_playing?language=en-US&page=1');

    setMovieList(movies.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Carousel
        opts={{ loop: true }}
        // plugins={[Autoplay ({delay:2000})]}
        className="relative flex mt-[30px] lg:mt-[83px] h-[510px] md:h-fit
    w-screen overflow-hidden"
      >
        <CarouselContent className="w-full content-center">
          {movieList.slice(0, 5).map((movie) => {
            return (
              <CarouselItem
                key={movie.id}
                className=" shrink-0 relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 z-10 transition-all 
                duration-300" />
                  <img
                    className="w-full h-[800px] pl-[150px] pr-[150px] self-center justify-center object-cover object-top" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                    />
                </div>


                <div className="absolute w-full top-1/3 left-1/12 z-20">
                  <h1 className="text-white z-30 text-[36px] pl-10 font-bold">
                    {movie.title}
                  </h1>
                  <p className="text-white pt-4 pr-20 pl-10">{movie.overview}</p>
                  <div className='pt-4 pl-8'>
                  <Button className="bg-white">
                    <Play color='black' />
                    <span className='text-black'>Watch Trailer</span>
                  </Button>
                </div>
                </div>

                
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-12 z-50" />
        <CarouselNext className="absolute right-12 z-50" />
      </Carousel>
    </div>
  );
}


export default CarouselComp
