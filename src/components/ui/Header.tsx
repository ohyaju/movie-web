'use client'
import { ChangeEvent } from "react";
import { useQueryState } from "nuqs";

export const Header = () => {
    const [query, setQuery] = useQueryState("query", { defaultValue: "" });

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value); 
    };

    return (
        <input
            type="search"
            placeholder="Search..."
            value={query} 
            onChange={handleSearch} 
        />
    );
};
