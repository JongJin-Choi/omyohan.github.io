import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
        <img src={movie.medium_cover_image} alt="coverImg"/>
        <h1>{movie.title}</h1>
        <p>year : {movie.year}</p>
        <p>rating : {movie.rating}</p>
        <p>runtime : {movie.runtime}</p>
        <p>Summary : {movie.summary ? movie.summary : "No content"}</p>
        <p>genres</p>
        <ul>
        {movie.genres?.map(g => 
        <li key={g}>{g}</li>
        )} 
        </ul>
        </div>
        
    );
}

export default Detail;