import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SimplePage } from '../layouts/SimplePage'
import { Home } from "../pages/Home";
import { Clients } from "../pages/clients";
import { Login } from "../pages/login";

export const AppRouter = () => (
  <Router basename={'/'}>
    <Routes>
      <Route element={<SimplePage isPrivate={false} />}>
        <Route path={`/login`} element={<Login />} />
        <Route path={`/`} element={<Home />} />
      </Route>
      <Route element={<SimplePage isPrivate={true} />}>
        <Route path={`/clients`} element={<Clients />} />
      </Route>
    </Routes>
  </Router>
);