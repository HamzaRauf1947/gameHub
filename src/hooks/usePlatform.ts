import { useQuery } from "@tanstack/react-query";

import apiClient, { FetchResponse } from "../services/api-client";

import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: String;
    slug: string
}

const usePlatform = () => useQuery({
        queryKey:['platforms'],
        queryFn: ()=> apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then(res=>res.data),
        staleTime:24*60*60*1000, //1 day
        initialData:{count:platforms.data.length,results:platforms.data,}
    })



export default usePlatform