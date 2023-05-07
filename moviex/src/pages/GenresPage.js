import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { allGenres } from "../services/movie.service";

const GenresPage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      allGenres(id)
        .then((response) => {
          console.log(response);
          setMovies(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchMovies();
  }, [id]);
  return <div>GenresPage</div>;
};

export default GenresPage;
