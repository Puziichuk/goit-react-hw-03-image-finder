import { Component } from "react";
import Container from "./components/Container/Container";

class App extends Component {
  state = {
    filter: "",
  };

  render() {
    return <Container></Container>;
  }
}

export default App;
