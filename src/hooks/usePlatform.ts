import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

import platforms from "../data/platforms";


interface Platform{
    id:number;
    name:string;
    slug:string;
}
const usePlatform = () => useQuery({
        queryKey:['platforms'],
        queryFn: ()=> apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then(res=>res.data),
        staleTime:24*60*60*1000, //1 day
        initialData:{count:platforms.data.length,results:platforms.data,}
    })



export default usePlatform