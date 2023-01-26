
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import MovieCard from "../components/MovieCard";



const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">{movie&&<>
    <MovieCard movie={movie} showLink={false}/>
<div className="card">
      <h2>{movie.tagline}</h2>
      <h3>Orçamento</h3>
      <p>{movie.budget}</p>
      <h3>Receita</h3>
      <p>{movie.revenue}</p>
      <h3>Minutos</h3>
      <p>{movie.runtime}</p>
      <h3>Descriçao</h3>
      <p>{movie.overview}</p>
      </div>
    </>}</div>
  )
}

export default Movie;