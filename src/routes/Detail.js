import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    try {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch movie:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* left: image */}
            <div className="md:w-1/3">
              <img
                src={movie.large_cover_image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* right: movie info */}
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {movie.title}
                </h1>
                <p className="text-xl text-gray-600">{movie.year}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="text-xl font-semibold text-gray-900">
                    ⭐️ {movie.rating}/10
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Runtime</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {movie.runtime} min
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Genres
                </h2>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {movie.description_full && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Description
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {movie.description_full}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
