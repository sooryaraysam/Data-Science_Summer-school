//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
//import { Route, Switch } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
//import ReactDOM from "react-dom";
function App() {
  return (
    <Routes>
      <Route path="/components/Registration">
        <Registration />
      </Route>

      <Route path="/components/Login">
        <Login />
      </Route>
    </Routes>
  );
}

export default App;
