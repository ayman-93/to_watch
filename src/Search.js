import React from 'react'
import Axios from 'axios'
class Search extends React.Component {
    componentDidMount() {
        Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b7448ea989f409a3183b9cfb44f61afb&query=${this.props.searchData}`)
            .then(response => {
                console.log(this.props.searchData, ' ', response);
                


            })
            .catch(error => console.log(error))
    }
    render(){

        return <h1>Hello</h1>
    }
}

export default Search;