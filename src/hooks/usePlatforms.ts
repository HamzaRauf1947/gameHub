import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIclient from "../services/api-client";
import ms from "ms";

export interface Platform {
    id: number;
    name: String;
    slug: string
}

const apiClient = new APIclient<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
        queryKey:['platforms'],
        queryFn: apiClient.getAll,
        staleTime:ms('24h'),
        initialData: platforms,
    })



export default usePlatforms