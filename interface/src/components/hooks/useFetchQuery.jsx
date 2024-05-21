import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const retrieveData = async () => {
    const response = await axios.get( 'http://localhost:3000/images' );
    if ( response.ok )
    {
        console.log( response );
        return response.data;
    }
    else
    {
        throw new error(`some went wrong ${error.message}`)
    }
};

export default function useFetchQuery() {
    const { data: images, error, isLoading } = useQuery({
        queryKey: ['images'],
        queryFn: retrieveData,
    });

    return { images, error, isLoading };
}