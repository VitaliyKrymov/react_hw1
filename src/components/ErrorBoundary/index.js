import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

// Update state so the next render will show the fallback UI.
    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    // You can also log the error to an error reporting service
    componentDidCatch(error, errorInfo) {
        console.error('ERROR',error, errorInfo);
    }

    render() {
        if (this.state.hasError) {      // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
