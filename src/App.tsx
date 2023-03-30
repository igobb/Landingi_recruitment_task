import "./App.css";
import Header from "./components/Header/Header";
import AllCartsPage from "./pages/AllCartsPage/AllCartsPage";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
