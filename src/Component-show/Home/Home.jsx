import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const apiKey = "c7e2530d63620fecd6ab8a7b7a68299e";
const url = "https://api.themoviedb.org/3";
const imgurl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated"


const Card = ({ img }) => <img className="card" src={img} alt='cover' />;

const Row = ({ title, arr = [] }) => (
    <div className='row'>
        <h2>{title}</h2>
        <p>
            {
                arr.map((item, index) => (
                    <Card className="imgrow" key={index} img={`${imgurl}/${item.poster_path}`} />
                ))
            }
        </p>
    </div>
);


const Home = () => {

    const [upcomingmovies, setupcomingmovies] = useState([]);
    const [nowPlayingmovies, setnowPlayingmovies] = useState([]);
    const [topRatedmovies, settopRatedmovies] = useState([]);
    const [popularmovies, setpopularmovies] = useState([]);
    const [genre, setGenre] = useState([]);



    useEffect(() => {
        const fetchUpcoming = async () => {
            const { data: { results }, } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
            setupcomingmovies(results);
        };

        const fetchnowPlaying = async () => {
            const { data: { results }, } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
            setnowPlayingmovies(results);
        };

        const fetchtopRated = async () => {
            const { data: { results }, } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
            settopRatedmovies(results);
        };

        const fetchpopularmovies = async () => {
            const { data: { results }, } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
            setpopularmovies(results);
        };

        const getAllGenere = async () => {
            const { data: { genres }, } = await axios.get(`${url}/genre/movie//list?api_key=${apiKey}`);
            setGenre(genres);
            console.log(genres)
        };

        fetchUpcoming();
        fetchnowPlaying();
        fetchtopRated();
        fetchpopularmovies();

        getAllGenere();
    }, [])

    return (
        <section className="home">

            <div className='banner'style={{
                 backgroundImage:popularmovies[0] ? `url(${`${imgurl}/${popularmovies[2].poster_path}`})` : "rgb(16,16,16)"
                 }}>
            
             {popularmovies[2] && <h1>{popularmovies[2].original_title}</h1>}
             {popularmovies[2] && <p>{popularmovies[2].overview}</p>}

            <div>
                <button><BiPlay /> Play </button>
                <button> My List <AiOutlinePlus /></button>

            </div>
            </div>

            <Row title="Popular Movies" arr={popularmovies} />
            <Row title="Upcoming Movies" arr={upcomingmovies} />
            <Row title="Top Rated" arr={topRatedmovies} />
            <Row title="Now Playing" arr={nowPlayingmovies} />

            <div className="genrebox">

                {genre.map((item) => (
                    <Link key={item.id} to={`/genre/}${item.id}`}>{item.name}</Link>
                ))}

            </div>



        </section>
    )
}

export default Home