import { NavBar } from "./components";
import {Detail, Form, Home, Landing} from "./views";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar/>

      <Route exact path="/">
        <Landing/>
      </Route>

      <Route path="/home">
        <Home/>
      </Route>

      <Route path="/detail">
        <Detail/>
      </Route>

      <Route path="/create">
        <Form/>
      </Route>
    </>
  );
}

export default App;
