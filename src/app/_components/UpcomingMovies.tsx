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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { instance } from '../utils/axios-instance';
import { useEffect, useState } from "react";
import { Star } from 'lucide-react';




const UpcomingMovies = () => {
  const [movieList, setMoviesList] = useState<MovieType[]>([]);

  const getMovies = async () => {
    const movies = await instance.get('/movie/upcoming?language=en-US&page=1');
    setMoviesList(movies.data.results);

  };


  useEffect(() => {
    getMovies();
  }, []
  );

  return (

    <div className="p-8">
      <h1 className="font-semibold not-italic px-2 py-2 px-(--spacing-5)  w-full gap-(--spacing-5) flex justify-between text-2xl leading-8">Upcoming</h1>
      <div className="grid grid-cols-5 justify-items-center justify-self-center w-fit min-h-screen gap-8">
        {movieList.map((movie: MovieType) => {
          return <Card key={movie.id} className="w-[230px]">
            <CardContent className="p-0 h-[340px]">
              <img
                className="rounded-t-xl"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </CardContent>
            <CardHeader >
              <CardDescription className="flex items-center gap-1 p-0">
                <Star size={15} color="[#FDE047]" fill="#FDE047" />
                <span>{movie.vote_average}/10</span>
              </CardDescription>
              <CardTitle>{movie.title}</CardTitle>
            </CardHeader>
          </Card>
        })}
      </div>
    </div>
  )
}       
export default UpcomingMovies
