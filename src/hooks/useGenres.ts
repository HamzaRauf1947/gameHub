import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIclient from "../services/api-client";
import ms from "ms";
import Genre  from "../entities/Genre";

const apiClient = new APIclient<Genre>('/genres');
export const useGenres =()=>  useQuery({
    queryKey:['genres'],
    queryFn:apiClient.getAll,
    staleTime:ms('24h'),
    initialData: genres,
})



export default useGenres;
