import './assets/css/App.css';
import { Route, Switch } from "react-router";
import Home from "./views/Home";
import Movies from "./views/Movies";
import DetailMovie from './views/DetailMovie';
import Formulario from './views/Formulario';
import Recommended from './views/Recommended';
import ForDate from './views/ForDate';
import Genres from './views/Genres';
function App() {
  return (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movies" component={Movies}></Route>
        <Route exact path="/genres" component={Genres}></Route>
        <Route exact path="/recommended" component={Recommended}></Route>
        <Route exact path="/fordate" component={ForDate}></Route>
        <Route exact path="/detailMovie/:id" component={DetailMovie}></Route>
        <Route path="/create" component={Formulario}></Route>
        <Route path="/edit/:id" component={Formulario}></Route>
      </Switch>
  );
}

export default App;
