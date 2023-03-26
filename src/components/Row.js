import React, { useState, useEffect } from "react";
import axios from "api/axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="text-white ml-5">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex overflow-x-scroll p-5 scrollbar-none">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`max-h-[100px] object-contain mr-3 w-full  hover:scale-110 hover:opacity-100 ${
                  isLargeRow && "max-h-[250px] hover:scale-110 hover:opacity-100 transition-scale duration-500"
                }`}
                key={movie.id}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
