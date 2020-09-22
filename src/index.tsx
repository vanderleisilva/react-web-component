import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  name: string;
}

const App = (props: AppProps) => <p>{props.name}</p>;

ReactDOM.render(<App name="My App 2" />, document.getElementById("root"));
