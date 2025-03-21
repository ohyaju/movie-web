'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { instance } from '../utils/axios-instance';
import { Film } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { useQueryState } from "nuqs";
import Link from 'next/link';

type GenreType = {
    id: number;
    name: string;
};
type GenreListType = {
    genres: GenreType[]
}
type MovieType = {
    title: string;
    id: number;
};

const GenreSelector = () => {
    const params = useParams();
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [query, setQuery] = useQueryState("query", { defaultValue: "" });
    const [genres, setGenres] = useState<GenreType[]>([]);
    // const [genres, setGenres] = useState<GenreListType>();
    const [isLoading, setIsLoading] = useState(true);

    const getGenres = async () => {
        const res = await instance.get("/genre/movie/list");
        console.log("Fetched genres:", res.data);
        setGenres(res.data.genres);
    };



    const getMoviesByGenre = async () => {
        if (!params.id) return;
        const res = await instance.get(
            `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${params.id}&page=${page}`
        );

        setMovies(res.data.results);
        console.log(res.data.genres);
    };
    const getMoviesByQuery = async (query: string) => {
        if (!query) return;

        const res = await instance.get(`/search/movie?query=${query}&language=en-US&page=${page}`);
        setMovies(res.data.results);
    };




    useEffect(() => {
        getGenres();
    }, []);

    // useEffect(() => {
    //     console.log("Genres data:", genres); 
    // }, [genres]);

    useEffect(() => {
        if (!params.id) return;
        getMoviesByGenre();
    }, [params.id]);

    useEffect(() => {
        if (!query) return;
        getMoviesByQuery(query);
    }, [query]);
    useEffect(() => {
        (async () => {
            const res = await instance.get(
                "https://api.themoviedb.org/3/" +
                "genre/movie/list?language=en?with_genres=28");
            console.log(res.data)
            setIsLoading(false);
            setGenres(res.data);
        })();
    }, []);

    return (
        <div className='flex gap-20'>
            <div className='pl-5 flex gap-3'>
                <Film /> <span className='text-purple-900'>Movie Z</span>
            </div>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                    <h1>Genre: {params?.name}</h1>
                    {Array.isArray(genres) ? (
                        genres.map((genre) => (
                            <SelectItem key={genre.id} value={String(genre.id)}>
                                {genre.name}
                            </SelectItem>
                        ))
                    ) : (
                        <div>No genres</div>
                    )}
                </SelectContent>
            </Select>

            <div className='flex flex-col'>
                {isLoading ? (
                    <div>Loading...</div>
                ) : Array.isArray(genres) ? (
                    genres.map((genre) => (
                        <Link key={genre.id} href={`/genres/${genre.id}`}>
                            {genre.name}
                        </Link>
                    ))
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default GenreSelector;






























