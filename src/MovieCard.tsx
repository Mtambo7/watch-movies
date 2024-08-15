interface MovieProps {
  Year: string;
  Poster: string;
  Type: string;
  Title: string;
}

// Interface for the props passed to the MovieCard component
interface Props {
  movie: MovieProps;
}

function MovieCard({ movie }: Props) {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
