import axios from 'axios';
import { useEffect, useState } from 'react';
 
export const useGet = (endpoint: string) => {
    const [ data, setData ] = useState<[]>([])
    useEffect(() => {
        const getResults = async () => {

            try {
                const { data } = await axios.get<[]>(
                    endpoint,
                  {
                    headers: {
                      Accept: 'application/json',
                    },
                  },
                );
                  
                setData(data);
              } catch (error) {
                if (axios.isAxiosError(error)) {
                  console.log('error message: ', error.message);
                  return error.message;
                } else {
                  console.log('unexpected error: ', error);
                  return 'An unexpected error occurred';
                }
              } 
        }

        getResults()

    }, [])
  
    return {
        isLoading: data ? true : false,
        data
    }
}
