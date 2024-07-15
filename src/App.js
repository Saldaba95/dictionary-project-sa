import cata from "./cata.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-4">
            <img src={cata} className="catalina" alt="logo" />
          </div>
          <div className="col-8">
            {" "}
            <h1>Hello Everyone</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
