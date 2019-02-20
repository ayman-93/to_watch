import React from 'react';
import Slider from "react-slick";

class Profile extends React.Component {
    

    addToWatched = () =>{

    }
    render(){
        
        let movies = this.props.movies.map((movie,index) => 
        <div key={index} style={{ display: 'flex', border: '1px solid black' }}>
            <div className='toWatchImg'>
              <img width='40%' height='auto' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
            </div>

            <div className='movieInfo'>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
                    <p>Release: {movie.release_date}</p>
              <p>Rating: {movie.vote_average}</p>
             
                   <button onClick={()=>this.props.addToWatched(movie)}>Watched</button>
            </div>
            
        </div>)
        console.log(this.props.movies[0]);
        console.log(this.props.movie);
        
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            className: "center",
            // centerPadding: "60px",
            swipeToSlide: true

        };
        let theReturn;
        if (this.props.movies.length !== 0){
            theReturn = <center style={{ marginTop: '50px' }}><Slider style={{ margin: 'auto' }} {...settings}>
                {movies}
            </Slider></center>
        } else {
            theReturn= <h1 style={{marginTop: '15px'}}>No thing to Show</h1>
        }
        return theReturn;
    }
}

export default Profile;