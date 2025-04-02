import MovieItemParams from "@/types/Movie/movie-item-params"

function MovieItem({ movieImageSrc, movieTitle, movieReleaseDate }: MovieItemParams) {
    const fMovieDate = movieReleaseDate

    return (
        <div className="movie-card">
            <div className='movie-image'>
                <img
                    src={movieImageSrc}
                    alt='Movie Cover' />
            </div>
            <div className='movie-title'>
                <span>{movieTitle}</span>
            </div>
            <div className='movie-year'>
                <span>{fMovieDate}</span>
            </div>
        </div>
    )
}

export default MovieItem
