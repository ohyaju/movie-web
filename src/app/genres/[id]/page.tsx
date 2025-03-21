// 'use client'
// import React, { useCallback, useEffect, useState } from 'react'
// import { useParams, useSearchParams } from "next/navigation"
// import { instance } from '../../utils/axios-instance'
// import { ChangeEvent } from 'react'
// import { parseAsInteger, useQueryState } from "nuqs";

// type GenreType = {
//     id: number;
//     name: string;
// };

// type MovieType = {
//     title: string;
//     id: number;

// }
// export default function Genre() {
//     const params = useParams();
//     const [page, setPage] = useState(1);
//     const [movies, setMovies] = useState<MovieType[]>([]);
//     // const [query, setQuery] = useState("");
//     // const searchParams = useSearchParams()
//     const [query, setQuery] = useQueryState("query", { defaultValue: "" });
//     const [genres, setGenres] = useState<GenreType>(); /////yaj ch magadgu 



//     // const createQueryString = useCallback(
//     //     (name: string, value: string) => {
//     //         const params = new URLSearchParams (searchParams.toString())
//     //         params.set(name,value)

//     //         return params.toString()
//     //     },
//     //     [searchParams]
//     // )

//     const getMoviesByGenre = async () => {
//         const res = await instance.get(
//             'https://api.themoviedb.org/3/' +
//             `/discover/movie?language=en&with_genres=${params.id}&page=${page}`

//         );
//         setMovies(res.data.results)

//         console.log(res.data.genres)
//     };
//     useEffect(() => {
//         getMoviesByGenre();
//     }, []);
//     useEffect(() => {
//         getMoviesByQuery(query)
//     }, [query])

//     const getMoviesByQuery = async (query: string) => {
//         const res = await instance.get(
//             'https://api.themoviedb.org/3/' +
//             `/search/movie?query=${query}&language=en-US&page=${page}`
//         );
//         setMovies(res.data.results)

//     };
//     // const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
//     //     // getMoviesByQuery(event.target.value);
//     //     useQueryState(event.target.value);
//     // };
//     return (
//         <div>
//             <h1>
//                 Genre{params.name}
//             </h1>
//             {/* <input
//                 onChange={handleSearch}
//                 type="search"
//                 placeholder="Search..."
//             ></input> */}
//             {movies.map((movie) =>
//                 <div>
//                     {movie.title}
//                 </div>)}

//         </div>
//     );
// }

