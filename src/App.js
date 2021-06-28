import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Channel from "./pages/Channel";
import VideoPlayer from "./pages/VideoPlayer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/channel">
              <Channel />
            </Route>
            <Route path="/videoPlayer">
              <VideoPlayer />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
