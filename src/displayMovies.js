import React from 'react'
// import ReactDOM from 'react-dom';
import Slider from "react-slick";

class DisplayMovies extends React.Component {
    state= {
        Info : {},
        display : false,
        search : ''
    }


    displayInfoFun = (movie) => {
        const settings2 = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            swipeToSlide: false

        }
        let style= {
            margin: '50% 0'
        }
        let bgd1 = {
            backgroundSize: 'cover',
            background: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path}) center no-repeat `,
            zIndex: '1',
        // backgroundPosition: 'center',
        }
        
        return <div className='container info'>
            <div className='row'>
               
                <div className='col-1 buttons' id='addB' onClick={() => this.props.sendMovies(movie)}>
                
                    
                </div>
                <div className="col " style={bgd1}></div>
                <div className="col d2">
                    <h1 style={style}>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p>Release: {movie.release_date}</p>
                    <p>Rating: {movie.vote_average}</p>
                </div>
                <div ><button id="b2" className='bttn' onClick={() => {
                    this.props.clearSearch();//onClick multiple callBack , props not passed
                    this.setState({display: false})
                }}>X</button></div>
                </div>
                
            
        </div>
        // console.log('hhheerre',movie);
        
    }
    updatInfo = (movie) =>{
        console.log(movie);
        
        this.setState({Info : movie, display: true});
    }
    // CSearch = () => {
        
    //     this.props.clearSearch()
    // }

    render(){

        // this.setState({ search: newSearch})
        let info = null;
        if (this.state.display)
        info = this.displayInfoFun(this.state.Info);

        let movies = this.props.movies.map((movie, index) => {
            
            
            return <div key={index}>
            
            
                <img onClick={() => this.updatInfo(movie)} className='sliderImg' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                </div>
        });
        this.props.movies.forEach(element => {
            // if(element.video === false)
            // console.log(element);
            
        });
        // console.log(movies);
        
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: true,
            className: "center",
            centerPadding: "60px",
            swipeToSlide: true

        };
       
        
        return (
        <div style={{width: '96%'}} >
             <center><Slider className='DMovies' {...settings}>
                {movies}
            </Slider></center>
            {info}
            
            </div>
        )
        
    }
}

export default DisplayMovies;