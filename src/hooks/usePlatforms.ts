import { useQuery } from "@tanstack/react-query";


import platforms from "../data/platforms";
import APIclient from "../services/api-client";

export interface Platform {
    id: number;
    name: String;
    slug: string
}

const apiClient = new APIclient<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
        queryKey:['platforms'],
        queryFn: apiClient.getAll,
        staleTime:24*60*60*1000, //24 hr
        initialData: platforms,
    })



export default usePlatforms