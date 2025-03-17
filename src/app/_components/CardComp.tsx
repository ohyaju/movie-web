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




const CardComp = () => {
    const [movieList, setMoviesList] = useState<MovieType[]>([]);

    const getCard = async () => {
        const movies = await instance.get('/movie/popular?language=en-US&page=1');
        setMoviesList(movies.data.results);

    };


    useEffect(() => {
        getCard();
    }, []
    );
    return (

        <div>
            <div className="p-8">
                {movieList.map((movie: MovieType) => {
                    return <Card key={movie.id} >
                        <CardContent className="">
                            <img

                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            />
                        </CardContent>
                        <CardHeader >
                            <CardDescription>
                                <Star size={15} color="[#FDE047]" fill="#FDE047"/>
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
export default CardComp