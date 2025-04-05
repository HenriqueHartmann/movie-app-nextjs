import { useEffect, useState } from "react"

// Components
import Alert from "@/components/Alert/alert"
import HttpError from "@/components/Error/http-error"
import Loading from "@/components/Loading/loading"
import MovieItem from "@/components/MovieItem/movie-item"
import Pagination from "@/components/Pagination/pagination"

// Services
import FormatDate from "@/services/date/FormatDate"
import HttpRequest from "@/services/request/HttpRequest"

// Types
import HttpErrorComponentParams from "@/types/Error/http-error-component-params"
import MovieItemParams from "@/types/Movie/movie-item-params"
import PaginationData from "@/types/Pagination/pagination-data"

// Styles
import "@/pages/home/home.css"

function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [hasError, setHasError] = useState<boolean>(false);
    const [errorData, setErrorData] = useState<HttpErrorComponentParams | null>(null)
    const [showAlert, setShowAlert] = useState<boolean>(false)
    const [alertMessage, setAlertMessage] = useState<string>("Something went wrong!")
    const [movieList, setMovieList] = useState<MovieItemParams[]>([])
    const [paginationData, setPaginationData] = useState<PaginationData | null>(null)

    function getApiKey(): string {
        return process.env.NEXT_PUBLIC_MOVIE_API_KEY ?? ""
    }

    function getPosterPath(posterPath: string | null): string {
        const imageApiBaseUrl = "https://image.tmdb.org/t/p/w500/"

        if (posterPath) {
            return imageApiBaseUrl + posterPath
        }

        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&s"
    }

    function setResponseResultsToMovieList(list: []): void {
        const data = list.map(item => ({
            movieTitle: item["title"],
            movieReleaseDate: FormatDate.exec(item["release_date"]),
            movieImageSrc: getPosterPath(item["poster_path"])
        }));

        setMovieList(data)
    }

    function setResponseToPaginationData(response: any): void {
        const data = {
            page: response['page'],
            totalPages: response['total_pages'],
            totalResults: response['total_results']
        }

        setPaginationData(data)
    }

    function showAlertComponent(): void {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }

    async function getMovies(page: number = 1) {
        try {
            setIsLoading(true)
            setHasError(false)
            setErrorData(null)
            setMovieList([])

            const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&sort_by=popularity.desc`
            const options = {
                headers: {
                    Authorization: `Bearer ${getApiKey()}`,
                    Accept: 'application/json',
                },
            }

            await new Promise(resolve => setTimeout(resolve, 2000))

            const res = await HttpRequest.get(url, options)

            setResponseToPaginationData(res)
            setResponseResultsToMovieList(res['results'])
        } catch (error: any) {
            let message = "Something went wrong!"

            if (error.body && error.body.status_message) {
                message = error.body.status_message
                setAlertMessage(message)
            }

            setErrorData({
                status: error.status,
                title: error.message,
                message: message,
                onClickCallback: getMovies,
            })
            setHasError(true)
            showAlertComponent()
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    function nextPage(): void {
        const page: number = paginationData!.page
        if (page !== paginationData!.totalPages) {
            const nextPage: number = paginationData!.page + 1
            getMovies(nextPage)
        }
    }

    function previousPage(): void {
        const page: number = paginationData!.page
        if (page > 1) {
            const previousPage: number = paginationData!.page - 1
            getMovies(previousPage)
        }
    }

    function selectPage(page: number): void {
        getMovies(page)
    }

    function getMovieListItems() {
        return movieList.map((movie, index) => (
            <div key={`key-movie-${index}`} className='content-grid-item shadow-lg'>
                <MovieItem
                    movieImageSrc={movie.movieImageSrc}
                    movieTitle={movie.movieTitle}
                    movieReleaseDate={movie.movieReleaseDate}
                />
            </div>
        ))
    }

    return (
        <div className="body">
            {showAlert ? <Alert
                message={alertMessage}
                onClose={() => setShowAlert(false)}
            /> : null}
            <div className="content">
                {isLoading ? (
                    <Loading />
                ) : hasError && errorData ? (
                    <HttpError
                        status={errorData.status}
                        title={errorData.title}
                        message={errorData.message}
                        onClickCallback={errorData.onClickCallback}
                    />
                ) : (
                    <div>
                        <Pagination
                            currentPage={paginationData!.page}
                            lastPage={paginationData!.totalPages}
                            onNext={nextPage}
                            onPrevious={previousPage}
                            onSelectPage={selectPage}
                        />
                        <div className="content-catalog">{getMovieListItems()}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home
