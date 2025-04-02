import { useEffect, useState } from "react";
import HttpRequest from "@/services/HttpRequest"
import Loading from "@/components/Loading/loading"
import MovieItem from "@/components/MovieItem/movie-item"
import MovieItemParams from "@/types/Movie/movie-item-params"
import "@/styles/home/home.css"

function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [movieList, setMovieList] = useState<MovieItemParams[]>([])

    useEffect(() => {
        function formatResponse(list: []): MovieItemParams[] {
            return list.map(item => ({
                movieTitle: item["title"],
                movieYear: item["release_date"],
                movieImageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&s" // key: poster_path
            }));
        }
    
        function getApiKey(): string {
            return process.env.NEXT_PUBLIC_MOVIE_API_KEY ?? ""
        }

        async function getMovies() {
            const url = 'https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc'

            try {
                setIsLoading(true)

                const options = {
                    headers: {
                        Authorization: `Bearer ${getApiKey()}`,
                        Accept: 'application/json',
                    },
                }

                const res = await HttpRequest.get(url, options)
                console.log(res['results'])
                const formatedRes = formatResponse(res['results'])

                setMovieList(formatedRes)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        getMovies()
    }, [])

    const movieListItems = movieList.map((movie, index) => (
        <div className='content-grid-item shadow-lg' key={`key-movie-${index}`}>
            <MovieItem movieImageSrc={movie.movieImageSrc} movieTitle={movie.movieTitle} movieYear={movie.movieYear} />
        </div>
    ))

    if (isLoading) {
        return (
            <div className='body'>
                <div className='content'>
                    <Loading />
                </div>
            </div>
        )
    }

    return (
        <div className='body'>
            <div className='content'>
                <div className='content-grid'>
                    {movieListItems}
                </div>
            </div>
        </div>
    )
}

export default Home
