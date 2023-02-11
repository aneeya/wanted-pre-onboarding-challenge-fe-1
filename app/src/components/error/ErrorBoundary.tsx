import { AxiosError } from "axios";
import { Component, ErrorInfo, ReactNode } from "react";
import JoinError from "./JoinError";
import MissedToken from "./missedToken";
import NotFound from "./NotFound";
import SomthingWrong from "./SomethingWrong";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: null | Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const error = this.state.hasError
    if (error?.message === 'notFound') {
      return <NotFound/>;
    } 

    if(error instanceof AxiosError) {
      const status = error.response!.status
      const data =  error.response!.data
      
      if(status === 500 || status === 503) return <SomthingWrong/>
      if(status === 400 || status === 404) return <NotFound/>
      if(status === 409) return <JoinError messeage={data.details}/>
      if(data.details === 'Token is missing') return <MissedToken/>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;