import * as React from "react";
import "./App.scss";
import IHelloProps from '../Interfaces/IHelloProps';

class Hello extends React.Component<IHelloProps> {
  public render() {
    return (
      <div data-testid="app-component">
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      </div>
    );
  }
}

export default Hello;