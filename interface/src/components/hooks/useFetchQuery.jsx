import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const retrieveData = async (endPoint) => {
    try
    {
        console.log(`api request fot http://localhost:3000/${endPoint}`)
        const response = await axios.get(`http://localhost:3000/${endPoint}`);
        if (response.status === 200) {
            console.log(response);
            return response.data;
        }
    } catch (error) {
        throw new Error(`Something went wrong: ${error.message}`);
    }
};

export default function useFetchQuery({
    queryKey = [],
    url = 'default-endpoint',
    staleTime = 3000,
    cacheTime = 2000,
    retry = 3,
    retryDelay = 1000,
    refetchOnWindowFocus = true,
    refetchInterval = false,
    onError = (error) => {
        console.error("Error occurred during data fetching:", error);
    },
    onSuccess = (data) => {
        console.log("Data fetched successfully:", data);
    },
    onSettled = (data, error) => {
        console.log("Data fetching settled:", { data, error });
    },
} ) 
{
    const { data, error, isLoading } = useQuery( {
        queryKey,
        queryFn: () => retrieveData( url ),
        // staleTime,
        // cacheTime,
        // retry,
        // retryDelay,
        // refetchOnWindowFocus,
        // refetchInterval,
    } );

    return { data, error, isLoading };
}