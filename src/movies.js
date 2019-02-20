import React from 'react';
import Axios from 'axios'
class Movies extends React.Component {
    state = {
        movies: []
    }
    componentDidMount() {
        Axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b7448ea989f409a3183b9cfb44f61afb&sort_by=popularity.desc')
            .then(response => {
                
                // console.log(response)

                let lmovies = response.data.results.map(movie => movie)
                this.setState({ movies: lmovies });
                this.props.getMovies(this.state.movies)

            })
            .catch(error => console.log(error))
        }
    render(){
        
        return null;
    }
}

export default Movies;


