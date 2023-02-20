import React from "react";
import { Provider } from "react-redux";
import Playlist from "./Playlist";
import { store } from "./store";

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <h1 className="header">The Best Playlist</h1>
        <Playlist />
      </Provider>
    </div>
  );
};

export default App;
