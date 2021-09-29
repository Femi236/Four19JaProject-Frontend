import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes/routes";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
