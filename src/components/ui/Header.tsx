'use client'
import { ChangeEvent } from "react";
import { parseAsInteger, useQueryState } from "nuqs";

export const Header = () => {
    const [query, setQuery] = useQueryState("query", { defaultValue: "" });

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        // getMoviesByQuery(event.target.value);
        useQueryState(event.target.value);
    };
    return (
        <input
        onChange={handleSearch}
        type="search"
        placeholder="Search..."
    ></input>
    );
    
}