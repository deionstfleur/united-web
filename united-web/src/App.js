import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widgets from './Widgets'
import Home from '../src/Home';
import Explore from '../src/Explore'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Explore" component={Explore} exact />
      </Switch>
    </Router>
  );
}

export default App;
