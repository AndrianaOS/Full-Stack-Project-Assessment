import Votes from "./Votes";
import DeleteVideo from "./DeleteVideo";

function VideoInfo({ videos, setVideos, video }) {
  return (
    <div>
      <div>
        <h2>{video.title}</h2>
        <iframe
          width="300"
          height="250"
          src={`https://www.youtube.com/embed/${video.url.slice(32)}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <aside>
          <span>{video.rating}</span>
          <Votes video={video} setVideos={setVideos} videos={videos} />
        </aside>
        <DeleteVideo video={video} videos={videos} setVideos={setVideos} />
      </div>
    </div>
  );
}

export default VideoInfo;