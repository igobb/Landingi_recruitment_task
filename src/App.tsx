import { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Routes from "./routes/Routes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
