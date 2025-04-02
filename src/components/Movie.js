import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const Movie = ({ id, coverImg, title, summary, genres, year }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      {/* <h3>{title}</h3> */}
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>
        {summary}
        {year}
      </p>
      <ul>
        <h4>Genres : </h4>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

// Movie.PropTypes = {
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
export default Movie;
