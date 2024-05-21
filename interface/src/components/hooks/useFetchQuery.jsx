import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const retrieveData = async () =>
{
    
    try
    {
        const response = await axios.get( 'http://localhost:3000/images' );
        if ( response.status === 200 )
        {
            console.log( response );
            return response.data;
        }
    }

    catch(error)
    {
        throw new Error( `some went wrong ${error.message}` )
    }
};

export default function useFetchQuery() {
    const { data: images, error, isLoading } = useQuery({
        queryKey: ['images'],
        queryFn: retrieveData,
        staleTime: 30000, 
        cacheTime: 200000, 
        retry: 3, 
        retryDelay: 1000, 
        refetchOnWindowFocus: false,
        refetchInterval: 200000,
        onError: error => {
            console.error("Error occurred during data fetching:", error);
        },
        onSuccess: data => {
            console.log("Data fetched successfully:", data);
        },
        onSettled: (data, error) => {
            console.log("Data fetching settled:", { data, error });
        }
    });

    return { images, error, isLoading };
}