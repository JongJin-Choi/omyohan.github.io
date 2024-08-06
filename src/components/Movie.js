import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({id, year, coverImg, title, summary, genres}){
    return  (
    <div className="movie">
    <img src={coverImg} alt="coverImg"/>
    <h2 className="movie__title"><Link to={`/movie/${id}`}>{title}</Link></h2>
    <h5 className="movie__year">{year}</h5>
    <p className="movie_summary">{summary.length > 245 ? `${summary.slice(0,245)}...` : summary}</p>
    <ul className="movie__genres">
    {genres.map(g => 
    <li key={g}>{g}</li>
    )} 
    </ul>
    </div>
    )
}

Movie.propTypes  = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string),
};

export default Movie;