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
      <div className="border-b-2 relative overflow-hidden">
        <div
          className="hidden md:block absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${path_image}${data.backdrop_path}')`,
            backgroundSize: "cover",
            opacity: 0.3,
          }}
        />
        <div className="container mx-auto px-4 py-8 z-10">
          <div className="flex flex-col md:flex-row">
            <img
              className="w-full md:w-96 h-auto md:mr-8"
              src={`${path_image}${data.poster_path}`}
              alt={data.title}
            />
            <div className="pt-4 sm:pt-0">
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
