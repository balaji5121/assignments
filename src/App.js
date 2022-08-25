import { Route, Switch } from "react-router-dom";
import DetailedView from "./DetailedView";

import Home from "./Home";

import "./styles.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/movies/:id" component={DetailedView} />
  </Switch>
);

export default App;
