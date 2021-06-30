import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Channel from "./pages/Channel";
import VideoPlayer from "./pages/VideoPlayer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header />
          <div className="container">
            <Sidebar />
            <div className="content">
              <Home />
            </div>
          </div>
        </Route>
        <Route path="/channel">
          <Header />
          <div className="container">
            <Sidebar />
            <div className="content">
              <Channel />
            </div>
          </div>
        </Route>
        <Route path="/videoPlayer">
          <Header />
          <div className="container">
            <Sidebar />
            <div className="content">
              <VideoPlayer />
            </div>
          </div>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
