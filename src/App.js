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

  sendMovies = m => {
    console.log("woow", m);

    let cloneUserM = this.state.userMovies.slice(0);
    if (cloneUserM.includes(m)) alert("you have it");
    else cloneUserM.push(m);

    this.setState({ userMovies: cloneUserM });
  };
  search = s => {
    this.setState({ toWatchPage: false, watchedPage: false, searchPage: true });
    this.setState({ search: s });
  };
  clearSearch = () => {
    this.setState({ search: "" });
    this.goHome();
  };
  goHome = () => {
    this.setState({
      toWatchPage: false,
      watchedPage: false,
      searchPage: false
    });
  };

  goTolist = () => {
    this.setState({ toWatchPage: true, watchedPage: false, searchPage: false });
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
  goToWatched = () => {
    this.setState({ toWatchPage: false, watchedPage: true, searchPage: false });
  };

  render() {
    if (this.state.searchPage) {
      return (
        <div>
          <Header
            search={this.search}
            goHome={this.goHome}
            goTolist={this.goTolist}
            goToWatched={this.goToWatched}
          />

          <h1>Top Rated Movies</h1>
          <DisplayMovies
            clearSearch={this.clearSearch}
            search={this.state.search}
            movies={this.state.movies}
            sendMovies={this.sendMovies}
          />
          <h1>Search</h1>
          <Search searchData={this.state.search} />

          {/* <CurrentMovie /> */}
        </div>
      );
    } else if (this.state.toWatchPage) {
      return (
        <div>
          <Header
            search={this.search}
            goHome={this.goHome}
            goToWatched={this.goToWatched}
          />

          <Profile
            addToWatched={this.addToWatched}
            movies={this.state.userMovies}
          />
        </div>
      );
    } else if (this.state.watchedPage) {
      return (
        <div>
          <Header
            search={this.search}
            goHome={this.goHome}
            goTolist={this.goTolist}
          />
          <Profile
            addToWatched={this.addToWatched}
            movies={this.state.userWatched}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Header
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
