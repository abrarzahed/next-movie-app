import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

export default function Card({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="hover:text-white m-3 border border-slate-800 cursor-pointer active:text-red-400 lg:hover:scale-105 transition duration-200 ease-in-out">
      <Image
        layout="responsive"
        src={BASE_URL + movie.backdrop_path}
        width={200}
        height={100}
        alt="movie poster"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.title || movie.name}</h2>
        <p className="truncate my-2 text-lg">{movie.overview}</p>
        <p className="flex items-center space-x-2">
          {movie.release_date || movie.first_air_date}{" "}
          <HandThumbUpIcon className="h-5 ml-8" />{" "}
          <span className="font-bold">{movie.vote_count}</span>
        </p>
      </div>
    </div>
  );
}
