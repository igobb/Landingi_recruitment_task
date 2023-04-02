import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div style={{display: 'flex', width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center"}}><h1>Sorry.. there was an error</h1></div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;