/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewMovie from "./pages/NewMovie";
import EditMovie from "./pages/EditMovie";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/new" component={NewMovie} />
      <Route path="/edit/:id" component={EditMovie} />
    </Switch>
  );
}
