import { useSelector } from "react-redux";

const mockVideo = {
  id: 1656038,
  name: "The Witcher",
  showId: 28276,
  image:
    "https://static.tvmaze.com/uploads/images/medium_landscape/232/580508.jpg",
  episode: "The End's Beginning",
  summary:
    "<p>Hostile townsfolk and a cunning mage greet Geralt in the town of Blaviken. Ciri finds her royal world upended when Nilfgaard sets its sights on Cintra.</p>",
  date: "2019-12-20",
};

export default function useVideoWithParams(params) {
  const id = +params.id.slice(1);
  const videos = useSelector((state) => state.videos);
  if (videos.length === 0) return mockVideo;
  const video = videos.find((item) => item.id === id);
  return video;
}
