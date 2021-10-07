import { BrowserRouter as Router, Switch } from "react-router-dom";
import { SimplePage } from '../layouts/SimplePage'
import { Home } from "../pages/Home";
import { Clients } from "../pages/clients";
import { Login } from "../pages/login";

export const AppRouter = () => (
  <Router basename={'/'}>
    <Switch>
      <SimplePage path={`/login`} component={Login} isPrivate={false} />
      <SimplePage path={`/clients`} component={Clients} isPrivate={false} />
      <SimplePage exact path={`/`} component={Home} isPrivate={false} />
    </Switch>
  </Router>
);