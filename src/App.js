import cata from "./cata.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <div className="col-4">
              <img src={cata} className="catalina" alt="logo" />
            </div>
            <div className="col-8">
              {" "}
              <h1>Welcome to Catalina's Dictionary</h1>
              <h5>What word word would you like to look up?</h5>
              <Dictionary />
            </div>
          </div>
        </header>
        <main></main>
        <footer>
          Coded by Sarei Aldaba. It's open source on
          <a
            href="https://github.com/Saldaba95/dictionary-project-sa"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://app.netlify.com/sites/dapper-cannoli-71b9f8/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
