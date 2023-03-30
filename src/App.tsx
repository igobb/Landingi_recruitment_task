import { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        {/* dodać komponent ładowania */}
        <Routes />
      </Suspense>
    </div>
  );
}

export default App;
