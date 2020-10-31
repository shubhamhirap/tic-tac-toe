import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from "./components/Welcome";
import PickSide from "./components/PickSide";
import Game from "./components/Game"

function App() {
  return (
    <Router>
        <div className="App">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path='/pickside' component={PickSide} />
          <Route path="/tic-tac-toe" component={Game} /> 
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
