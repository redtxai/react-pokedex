import { useContext, useMemo } from 'react'
import axios from 'axios'
import { SearchPokemonContext } from './SelectPokemonProvider';

export const WithAxios = ({ children }) => {
    const { setNewGlobalLoading } = useContext(SearchPokemonContext);

    useMemo(() => {
      axios.interceptors.request.use((config) => {
          setNewGlobalLoading(true)
          return config
        },
        (error)=> Promise.reject(error)
      );
    
       axios.interceptors.response.use((response) => {
        setNewGlobalLoading(false)
        return response
      },
      (error)=> Promise.reject(error)
    );
    }, [setNewGlobalLoading])

    return children
}
