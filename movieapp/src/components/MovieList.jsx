const MovieList = (props)=>{
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies.map((movie,index)=>(
                <div className="image-container justify-content-start m-3 d-flex" style={{maxWidth: '360px'}} key={index}>
                    <img src={movie.Poster} alt="movie" onClick={(movie) => props.displayInfo(movie)}/>
                    <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList;