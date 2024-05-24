import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const retrieveData = async (url) => {
    try {
        const response = await axios.get(url);
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
    url = 'http://localhost:3000/default-endpoint',
    staleTime = 30000,
    cacheTime = 200000,
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
        staleTime,
        cacheTime,
        retry,
        retryDelay,
        refetchOnWindowFocus,
        refetchInterval,
        onError,
        onSuccess,
        onSettled,
    } );

    return { data, error, isLoading };
}