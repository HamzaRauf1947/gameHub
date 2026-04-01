import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id:number;
    name:string;
}
interface FetchGenreResponse{
    count:number;
    results:Genre[];
}
export const useGenre = () => {
const [genres, useGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isloading, setIsloading] = useState(false)


    useEffect(() => {
        const controller = new AbortController();
        setIsloading(true);
        apiClient.get<FetchGenreResponse>('/genres', { signal: controller.signal })
            .then(res => {
                useGenres(res.data.results);
                setIsloading(false);
            })
            .catch(err => {
                setIsloading(false);
                if (err instanceof CanceledError) return;
                setError(err.message)
            })

        return () => controller.abort();
    }, [])

    return { genres, error ,isloading}
   
  
}

export default useGenre;
