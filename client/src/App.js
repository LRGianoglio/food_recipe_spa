import { NavBar } from "./components";
import {Detail, Form, Home, Landing} from "./views";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation().pathname;
  return (
    <>
      {location!=="/"&&<NavBar/>}

      <Route exact path="/">
        <Landing/>
      </Route>

      <Route path="/home">
        <Home/>
      </Route>

      <Route path="/detail/:idRecipe">
        <Detail/>
      </Route>

      <Route path="/create">
        <Form/>
      </Route>
    </>
  );
}

export default App;
