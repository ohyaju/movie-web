'use client'

import { useEffect } from "react";
import { ACCESS_TOKEN } from "../..";

export default function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    const movies = await res.json();
    console.log(movies)
  };
      
  useEffect(() => {
getMovies();
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    </div>
  );
}
