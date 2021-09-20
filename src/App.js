import "./App.css";
import { useEffect, useState } from "react";
import Login from "./Components/Login";
import axios from "axios";

function App() {
  const [dados, setDados] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", dados)
      .then((response) => {
        handleLogged();
      })
      .catch((err) => {
        handleNotLogged();
        console.log(err);
      });
  }, [dados]);

  function handleLogged() {
    setIsLogged(true);
  }

  function handleNotLogged() {
    setIsLogged(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Login setDados={setDados} />
        {isLogged ? (
          <h2 className="success">Login: Sucesso </h2>
        ) : (
          <h2 className="failure">Login: Falha </h2>
        )}
      </header>
    </div>
  );
}

export default App;
