import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewMovie from "./pages/NewMovie";
import EditMovie from "./pages/EditMovie";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/new-movie" component={NewMovie} />
      <Route path="/edit-movie/:id" component={EditMovie} />
    </Switch>
  );
}
