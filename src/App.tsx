import { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Routes from "./routes/Routes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          {/* dodać komponent ładowania */}
          <Routes />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
