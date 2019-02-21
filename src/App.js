import React, { Component } from "react";
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
// import 'react-bootstrap';
import "bootstrap";
import "./App.css";
import Movies from "./movies";
import DisplayMovies from "./displayMovies";
import Profile from "./profile";
import Header from "./header";
import CurrentMovie from "./CurrentMovie";
import Search from "./Search";
import swal from 'sweetalert';


class App extends Component {
  state = {
    movies: [],
    userMovies: [],
    userWatched: [],
    search: "",
    toWatchPage: false,
    watchedPage: false,
    searchPage: false,
    searchList: []
  };

  getMovies = newMovies => {
    this.setState({ movies: newMovies });
  };

  getSearchList = newSearchList => {
    this.setState({ searchList: newSearchList})
  }

  sendMovies = m => {
    console.log("woow", m);
    swal("Added to your list", "", "success");
    let cloneUserM = this.state.userMovies.slice(0);
    if (cloneUserM.includes(m)) swal("It's already in your list!", "", "success");
    else cloneUserM.push(m);

    this.setState({ userMovies: cloneUserM });
  };
  search = s => {
    this.setState({ toWatchPage: false, watchedPage: false, searchPage: true });
    this.setState({ search: s });
  };
  clearSearch = () => {
    this.setState({ search: ""});
    // this.goHome();
  };
  goHome = () => {
    this.setState({
      toWatchPage: false,
      watchedPage: false,
      searchPage: false
    });
    this.forceUpdate();
  };

  goTolist = () => {
    this.setState({ toWatchPage: true, watchedPage: false, searchPage: false });
    this.forceUpdate();
  };
  addToWatched = movie => {
    let cloneOfuserMovies = this.state.userMovies.slice(0);
    let indexOf = cloneOfuserMovies.indexOf(movie);
    cloneOfuserMovies.splice(indexOf, 1);

    let oldUserWatched = this.state.userWatched.slice(0);
    oldUserWatched.push(movie);
    this.setState({
      userWatched: oldUserWatched,
      userMovies: cloneOfuserMovies
    });
  };
  remove = (movie) => {
    console.log('here', movie);
    
    let cloneOfuserMovies = this.state.userWatched.slice(0);
    let indexOf = cloneOfuserMovies.indexOf(movie);
    cloneOfuserMovies.splice(indexOf, 1);
    this.setState({userWatched: cloneOfuserMovies})
  }
  goToWatched = () => {
    this.setState({ toWatchPage: false, watchedPage: true, searchPage: false });
    this.forceUpdate();
  };

  render() {
    if (this.state.searchPage) {
      return (
        <div>
          <Header
            clearSearch={this.clearSearch}
            search={this.search}
            goHome={this.goHome}
            goTolist={this.goTolist}
            goToWatched={this.goToWatched}
          />

          <h1>Search</h1>
          <DisplayMovies
            clearSearch={this.clearSearch}
            search={this.state.search}
            movies={this.state.searchList}
            sendMovies={this.sendMovies}
          />
          
          <Search getSearchList={this.getSearchList} searchData={this.state.search} />

          {/* <CurrentMovie /> */}
        </div>
      );
    } else if (this.state.toWatchPage) {
      return (
        <div>
          <Header
            clearSearch={this.clearSearch}
            search={this.search}
            goHome={this.goHome}
            goToWatched={this.goToWatched}
          />

          <Profile
            addToWatched={this.addToWatched}
            movies={this.state.userMovies}
            watchedPage={true}
          />
        </div>
      );
    } else if (this.state.watchedPage) {
      return (
        <div>
          <Header
            clearSearch={this.clearSearch}
            search={this.search}
            goHome={this.goHome}
            goTolist={this.goTolist}
          />
          <Profile
            addToWatched={this.remove}
            movies={this.state.userWatched}
            watchedPage={false}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Header
            clearSearch={this.clearSearch}
            search={this.search}
            goHome={this.goHome}
            goTolist={this.goTolist}
            goToWatched={this.goToWatched}
          />

          <h1> Top Rated Movies</h1>
          <Movies getMovies={this.getMovies} />
          <DisplayMovies
            clearSearch={this.clearSearch}
            search={this.state.search}
            movies={this.state.movies}
            sendMovies={this.sendMovies}
          />

          {/* <CurrentMovie /> */}
        </div>
      );
    }
  }
}

export default App;
