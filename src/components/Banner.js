import React, { useState, useEffect } from "react";
import axios from "api/axios";
import requests from "api/Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);

      return request;
    };

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="relative flex flex-col justify-between h-[448px] text-white object-contain"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path && `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-7 pt-36 h-48">
        <h1 className="text-5xl font-bold pb-1">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div>
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="pt-4 text-sm max-w-sm h-20">{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className="h-28 z-10 w-full bg-gradient-to-b from-transparent via-neutral-800/60 to-dark" />
    </header>
  );
};

export default Banner;
