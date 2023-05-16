const MovieInfoDisplay = (props)=>{
    return (
        <div>
            <h1>props.movie.Title</h1>
            <img src={props.movie.Poster} alt={props.movie.Title} />
            <h1>props.movie.Type</h1>
            <h1>props.movie.Year</h1>
            <h1>props.movie.imdbID</h1>
        </div>
    );
}

export default MovieInfoDisplay;