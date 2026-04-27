import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}



export const useGenre =()=> {
    
    const fetchGenres = ()=>{
       return apiClient.get<FetchResponse<Genre>>('/genres').
        then(res=>res.data)
    }

   return useQuery({
    queryKey:['genres'],
    queryFn:fetchGenres,
    staleTime:24*60*60*1000,  //24 hour
})

}

export default useGenre;
