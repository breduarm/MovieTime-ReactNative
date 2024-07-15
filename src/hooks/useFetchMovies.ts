import { useEffect, useState } from "react"
import Movie from "../types/entities/Movie";
import { getMovies } from "../services/MovieService";
import { MovieResponse } from "../types/responses/MovieResponse";

const useFetchMovies = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = async () => {
        try {
            const movies = await getMovies();
            setData(movies);
        } catch (error) {
            console.log(error);
            setError("There was an error trying to fetch movies");
        } finally {
            setLoading(false);
        }
    }
}

export default useFetchMovies