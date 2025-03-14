import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import React, { useEffect, useState } from 'react'
import { instance } from '../utils/axios-instance';

type GenreType = {
    id: number;
    name: string;
};

const GenreSelector = () => {
    const [genreList, setGenreList] = useState<GenreType[]>([]);

    const getGenreList = async () => {
        const genres = await instance.get("/genre/movie/list")

        setGenreList(genres.data.genres)
    };

    useEffect(() => {
        getGenreList();
    }, []);

    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
                {genreList.map((genre) => (
                    <SelectItem key={genre.id} value={String(genre.id)}>{genre.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>

    );
};
export default GenreSelector;
