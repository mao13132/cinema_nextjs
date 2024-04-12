import { useDebounce } from "@/hooks/useDebounce";
import { MovieService } from "@/services/MovieService.service";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";

export const useSeacrh = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useDebounce(searchTerm, 500);

    const { isSuccess, data } = useQuery(['search_movie_list', debouncedSearch], () => MovieService.getAll(debouncedSearch), {
        select: ({ data }) => data,
        /* Если ни чего не вводиться то работать не нужно */
        enabled: !!debouncedSearch
    });

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    };

    return { isSuccess, handleSearch, data, searchTerm }

};