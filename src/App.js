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
              <Dictionary />
            </div>
          </div>
        </header>
        <main></main>
        <footer>
          Coded by Sarei Aldaba. It's open source on GitHub and Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;
