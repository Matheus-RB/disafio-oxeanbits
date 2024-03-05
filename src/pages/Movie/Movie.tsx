import { useParams } from "react-router-dom";
import useSWR from "swr";

import type { Movie } from "./Types";

const Movie = () => {
  const { id } = useParams();
  const { data } = useSWR<Movie>(`/${id}?language=pt-BR`, {
    suspense: true,
  });

  if (!data) {
    return <div className="text-center mt-8">Carregando...</div>;
  }

  const path_image = "https://image.tmdb.org/t/p/original";

  const formattedReleaseDate = new Date(data.release_date).toLocaleDateString(
    "pt-BR",
  );

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="p-4 bg-[#f8f9fa]">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div
        className="border-b-2 relative overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, rgba(157.5, 178.5, 199.5, 1), rgba(157.5, 178.5, 199.5, 0.44)), url('${path_image}${data.backdrop_path}')`,
          //backgroundPosition: "left calc((50vw - 170px) - 340px) top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 py-8 z-10">
          <div className="flex">
            <img
              className="w-96 h-auto mr-8"
              src={`${path_image}${data.poster_path}`}
              alt={data.title}
            />
            <div>
              <p className="mb-4">
                <strong>Sinopse:</strong> {data.overview}
              </p>
              <p className="mb-2">
                <strong>Gêneros:</strong>{" "}
                {data.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="mb-2">
                <strong>Duração:</strong> {data.runtime} minutos
              </p>
              <p className="mb-2">
                <strong>Data de Lançamento:</strong> {formattedReleaseDate}
              </p>
              <p className="mb-2">
                <strong>Receita:</strong> {formatCurrency(data.revenue)}
              </p>
              <p className="mb-2">
                <strong>Orçamento:</strong> {formatCurrency(data.budget)}
              </p>
              <p className="mb-2">
                <strong>Classificação Média:</strong> {data.vote_average}
              </p>
              <p className="mb-2">
                <strong>Total de Votos:</strong> {data.vote_count}
              </p>
              <p className="mb-2">
                <strong>Idioma Original:</strong> {data.original_language}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
