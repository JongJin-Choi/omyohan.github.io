import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./Home.css";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] =useState([])
    const getMovies = async() =>{
      const json = await ((await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`))).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
    useEffect(()=> {
      getMovies();
    },[])
    return (
      <section className="container">
        {loading  ? (
          <div className="loader">
          <span className="loader__text">Loading...</span> 
          </div>
        ) : (
        <div className="movies">
          {movies.map((movie) => 
          <Movie 
          key={movie.id}
          id={movie.id}
          year={movie.year}
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres} />
        )}
          </div>
    )}
        </section>
    );
}
export default Home;