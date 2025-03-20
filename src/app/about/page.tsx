'use client'
import React, { useEffect } from 'react'
import { instance } from '../utils/axios-instance';
import { useState } from 'react';
import Link from 'next/link';

type GenreType = {
    id: number;
    name: string;
};
type GenreListType = {
    genres: GenreType[]
}


export default function AboutPage() {
    const [genres, setGenres] = useState<GenreListType>();
    const [isLoading, setIsLoading] = useState(true);

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
        <div>
            <h1> AboutPage</h1>
            <div className='flex flex-col'>
                {!isLoading &&
                    genres?.genres.map((genre) => (
                        <Link key={genre.id} href={"/genres/" + genre.id} >
                            {genre.name}
                        </Link>
                    ))}

            </div>
            {isLoading && <div>Loading...</div>}
        </div>
    );
}

