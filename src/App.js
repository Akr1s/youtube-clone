import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Channel from "./pages/Channel";
import VideoPlayer from "./pages/VideoPlayer";
import Error404 from "./components/Error404";
import Wraper from "./components/Wraper";
import Favorites from "./pages/Favorites";
import Trending from "./pages/Trending";
import Subscriptions from "./pages/Subscriptions";
import Library from "./pages/Library";
import History from "./pages/History";
import WatchLater from "./pages/WatchLater";
import LikedVideos from "./pages/LikedVideos";
import Music from "./pages/Music";
import Games from "./pages/Games";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Wraper>
            <Home />
          </Wraper>
        </Route>
        <Route path="/channel">
          <Wraper>
            <Channel />
          </Wraper>
        </Route>
        <Route path="/videoPlayer/:id">
          <Wraper>
            <VideoPlayer />
          </Wraper>
        </Route>
        <Route path="/trending">
          <Wraper>
            <Trending />
          </Wraper>
        </Route>
        <Route path="/subscriptions">
          <Wraper>
            <Subscriptions />
          </Wraper>
        </Route>
        <Route path="/library">
          <Wraper>
            <Library />
          </Wraper>
        </Route>
        <Route path="/history">
          <Wraper>
            <History />
          </Wraper>
        </Route>
        <Route path="/watchLater">
          <Wraper>
            <WatchLater />
          </Wraper>
        </Route>
        <Route path="/favorites">
          <Wraper>
            <Favorites />
          </Wraper>
        </Route>
        <Route path="/likedVideos">
          <Wraper>
            <LikedVideos />
          </Wraper>
        </Route>
        <Route path="/music">
          <Wraper>
            <Music />
          </Wraper>
        </Route>
        <Route path="/games">
          <Wraper>
            <Games />
          </Wraper>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
