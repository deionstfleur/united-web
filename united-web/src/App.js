import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widgets from './Widgets'
import Home from '../src/Home';
import Explore from '../src/Explore'
import FrontPage from '../src/FontPage'
import Friends from '../src/Friends'
import Communities from '../src/Communities'

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
       <Route path="/front" component={FrontPage} exact />
        <Route path="/" component={Home} exact />
        <Route path="/Explore" component={Explore} exact />
        <Route path="/Friends" component={Friends} exact />
        <Route path="/Communities" component={Communities} exact />
      </Switch>
    </Router>
  );
}

export default App;
