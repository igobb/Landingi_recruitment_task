import { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Routes from "./routes/Routes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Loading from "./components/Loading/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
