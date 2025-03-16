'use client'
import GenreSelector from "./_components/GenreSelector";
import { useEffect, useState } from "react";
import CarouselComp from "./_components/CarouselComp";


export default function Home() {
  const [movieList, setMovieList] = useState([]);

return (
   <div>
    <GenreSelector/>
    <CarouselComp/>
  
    <h1 className="font-bold px-5 py-5">Upcoming</h1>

        <div className="grid grid-flow-col grid-rows-4 gap-8">
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
);
}
