import Home from "../pages/Home";
import Channel from "../pages/Channel";
import VideoPlayer from "../pages/VideoPlayer";
import Favorites from "../pages/Favorites";
import Trending from "../pages/Trending";
import Subscriptions from "../pages/Subscriptions";
import Library from "../pages/Library";
import History from "../pages/History";
import WatchLater from "../pages/WatchLater";
import LikedVideos from "../pages/LikedVideos";
import Music from "../pages/Music";
import Games from "../pages/Games";
import SearchResults from "../pages/SearchResults";

const routesData = [
  { path: "/", exact: true, component: <Home /> },
  { path: "/channel", exact: false, component: <Channel /> },
  { path: "/videoPlayer/:id", exact: false, component: <VideoPlayer /> },
  { path: "/trending", exact: false, component: <Trending /> },
  { path: "/subscriptions", exact: false, component: <Subscriptions /> },
  { path: "/library", exact: false, component: <Library /> },
  { path: "/history", exact: false, component: <History /> },
  { path: "/watchLater", exact: false, component: <WatchLater /> },
  { path: "/favourites", exact: false, component: <Favorites /> },
  { path: "/likedVideos", exact: false, component: <LikedVideos /> },
  { path: "/music", exact: false, component: <Music /> },
  { path: "/games", exact: false, component: <Games /> },
  { path: "/searchResult", exact: false, component: <SearchResults /> },
];

export default routesData;
