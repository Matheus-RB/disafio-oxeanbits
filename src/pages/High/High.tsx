import useSWR from "swr";

import { Link } from "react-router-dom";
import type { Movies } from "./Types";
import { useState } from "react";

const High = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const { data } = useSWR<Movies>(`/popular?language=pt-BR`, {
    suspense: true,
  });
  const path_image = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="p-4 bg-[#f8f9fa]">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.results.map((movie) => (
          <li
            key={movie.id}
            className="min-w-40 rounded-md bg-white shadow-md text-[#007bff] hover:text-[#5996d8] hover:bg-gray-100 relative"
            onMouseEnter={() => setIsHovered(movie.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <Link to={`movie/${movie.id}`}>
              <img
                src={`${path_image}${movie.backdrop_path}`}
                alt={`image-${movie.title}`}
                className={`w-full rounded-t-md ${isHovered === movie.id ? "brightness-50" : ""}`}
              />
              <h2 className="text-lg font-semibold text-center">
                {movie.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default High;
