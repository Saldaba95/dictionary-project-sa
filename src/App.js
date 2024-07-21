import cata from "./cata.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <h1>Welcome to Catalina's Dictionary</h1>
            <div className=" col-md-6 col-sm-12">
              <img src={cata} className="catalina" alt="logo" />
            </div>
            <div className=" col-md-6 col-sm-12">
              {" "}
              <h5>What word would you like to search?</h5>
              <br />
              <Dictionary />
            </div>
          </div>
        </header>
        <main></main>
        <footer>
          Coded by
          <a href="https://www.shecodes.io/graduates/66500-sarei-aldaba">
            Sarei Aldaba
          </a>
          . It's open source on
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
