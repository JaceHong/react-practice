import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, summary, genres, year }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-8 border border-gray-200">
      <div className="md:flex">
        <div className="md:w-1/3 relative min-h-[300px]">
          <img
            src={coverImg}
            alt={title}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
        <div className="md:w-2/3 p-6 border-l border-gray-200">
          <h2 className="text-xl font-bold mb-2">
            <Link
              to={`/movie/${id}`}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              {title} <span className="text-gray-500">({year})</span>
            </Link>
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{summary}</p>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Genres:</h4>
            <ul className="flex flex-wrap gap-2">
              {genres.map((g) => (
                <li
                  key={g}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
