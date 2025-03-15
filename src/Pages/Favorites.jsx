import "../CSS/Favorites.css"
import { useMovieContext } from "../Contexts/MovieContext"
import MovieCard from "../Components/MovieCard"


function Favorites() {

    const {favorites} = useMovieContext();

    if (favorites && favorites.length > 0) {

        return (

            <div className="favorites">
                <h2>Your Favorites</h2>
            <div className="movies-grid">
            {favorites.map((movie) => 
                
                (
                <MovieCard movie={movie} key={movie.id}/>
                ))}
        
            </div>
            </div>
        
        );
    }
    else {

        return (
            <div className="favorites-container">
                <div className="favorites-empty">
                <h2>Oops! None </h2>
                <p>Start adding your favorite movies here...</p>
                </div>
            </div>
            )

    }
    
    
}

export default Favorites