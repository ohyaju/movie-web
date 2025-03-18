'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import React, { useEffect, useState } from 'react'
import { instance } from '../utils/axios-instance';
import { Film } from 'lucide-react';


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
        <div className='flex gap-200'>
            <div className='pl-5 flex gap-3'>                 
                  <Film ></Film> <span className='text-purple-900'>Movie Z</span>
            </div>


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
        </div>

    );
};
export default GenreSelector;
