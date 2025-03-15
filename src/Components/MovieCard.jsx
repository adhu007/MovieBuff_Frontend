import "../CSS/MovieCard.css"
import { useMovieContext } from "../Contexts/MovieContext"


function MovieCard({movie}) {

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
            e.preventDefault()
            if(favorite) removeFromFavorites(movie.id)
            else addToFavorites(movie)
    }

    return <div className="movie-card" >
            <div className="movie-poster">

                <img src={movie.posterURL} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`}  onClick={onFavoriteClick}>
                    ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>Id : {movie.id} , IMDb : {movie.imdbId}</p>
            </div>

    </div>

}

export default MovieCard


