import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [details,setDetails] = useState([]);
  const [loading,setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setDetails(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  },[])


  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <img src={details.large_cover_image} />
          </div>
          <div>
            <h1>{details.title}</h1>
            <h4>{details.year}년 {details.runtime}분</h4>
            <ul>
              <li>download : {details.download_count}</li>
              <li>like : {details.like_count}</li>
              <li>rating : {details.rating}</li>
            </ul>
          </div>
        </>

      )}
    </div>
  )
}

export default Detail;