import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import MovieDetail from "./components/MovieDetail/moviedetail";
import NotFound from "./components/NotFound/notfound";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/movie-app" component={Home}></Route>
                    <Route path="/movie/:id" component={MovieDetail}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
