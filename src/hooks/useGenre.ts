import { useQuery } from "@tanstack/react-query";


import genres from "../data/genres";
import APIclient from "../services/api-client";

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}


const apiClient = new APIclient<Genre>('/genres');
export const useGenre =()=>  useQuery({
    queryKey:['genres'],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000,  //24 hour
    initialData:{next:null,count:genres.data.length , results:genres.data}
})



export default useGenre;
