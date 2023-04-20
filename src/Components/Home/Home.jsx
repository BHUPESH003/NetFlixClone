import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link  } from "react-router-dom";
import { FaPlay } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"

const apiKey = "4c58892378d7a6adcf9e2890ed79574a";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
  const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

  const Row = ({ title, arr = [] }) => (
    <div className="row">
      <h2>{title}</h2>

      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, settopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };
    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setnowPlayingMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setpopularMovies(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      settopRatedMovies(results);
    };
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
    getAllGenre();
  }, []);

  const Genres=(()=>(
    <div className="genreBox">
    {genre.map((item) => (
        <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
        </Link>
    ))}
</div>
  ));


  return (
    <>
    <section>
        
  

    
    <div
                className="banner"
                style={{
                    backgroundImage: popularMovies[0]
                        ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
                {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

                <div>
                
                    <button><FaPlay/> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div></div>
   

        <Row title="Upcoming" arr={upcomingMovies} />
        <Row title="Now Playing" arr={nowPlayingMovies} />
        <Row title="Popular" arr={popularMovies} />
        <Row title="Top Rated" arr={topRatedMovies} />
 
      <div className="genrebox">
      <Genres/>
      </div>
    </section>
    </>
  );
};

export default Home;
