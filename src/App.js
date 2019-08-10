import React from "react";
import Theme from "./container/theme";
import { SurrealNavbar } from "./component/SurrealNavbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome</header>
      <SurrealNavbar />
      <Theme />
    </div>
  );
}

export default App;
