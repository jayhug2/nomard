import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({coverImg, title, summary, genres, id, year}){
    return (
      <div className={styles.movie}>
        <div className={styles.movieImg}>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title}/>
        </Link>
        </div>
        <div className={styles.movieInfo}>
        <h3>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <h5>
          {year}
        </h5>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{`${summary.substr(0,200)}...`}</p>
        </div>
      </div>
    )
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;