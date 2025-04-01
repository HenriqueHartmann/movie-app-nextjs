import MovieItem from "@/components/MovieItem/movie-item";
import MovieItemParams from "@/types/Movie/movie-item-params"
import "@/styles/home/home.css" 

function Home() {
    const movieList: MovieItemParams[] = [
        {
            movieImageSrc: "https://i.ebayimg.com/images/g/C9QAAOSwoTlgSnpq/s-l1200.png",
            movieTitle: "Jaws",
            movieYear: "1975"
        },
        {
            movieImageSrc: "https://m.media-amazon.com/images/I/81UOBSDQh0L._AC_UF894,1000_QL80_.jpg",
            movieTitle: "Indiana Jones: Raiders of the Lost Ark",
            movieYear: "1981"
        },
        {
            movieImageSrc: "https://www.grapheine.com/wp-content/uploads/2019/11/affiche-jurassic-park-800x1183.jpg",
            movieTitle: "Jurassic Park",
            movieYear: "1993"
        },
        {
            movieImageSrc: "https://alternativemovieposters.com/wp-content/uploads/2023/07/Dave-Merrell_PulpFiction.jpg",
            movieTitle: "Pulp Fiction: Tempo de Violência",
            movieYear: "1994"
        },
        {
            movieImageSrc: "https://m.media-amazon.com/images/M/MV5BMzdmYmUzYjAtMmJhNi00NGU3LWJiODYtM2I5MGFhZjBhM2NhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            movieTitle: "Godzilla",
            movieYear: "1998"
        },
    ]
    const movieListItems = movieList.map((movie, index) => (
        <div className='content-grid-item shadow-lg' key={`key-movie-${index}`}>
            <MovieItem movieImageSrc={movie.movieImageSrc} movieTitle={movie.movieTitle} movieYear={movie.movieYear} />
        </div>
    ))

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
