import React from 'react';

type Props = {};
type State = { hasErrored: boolean };

class ErrorBoundry extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasErrored: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasErrored: true };
  }

  componentDidCatch(error: Error, info: any) {
    console.log(error.message);
  }

  render() {
    if (this.state.hasErrored) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
export default ErrorBoundry;
