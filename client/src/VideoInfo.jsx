import Votes from "./Votes";
import DeleteVideo from "./DeleteVideo";

function VideoInfo({ videos, setVideos, video, getAllVideos }) {
  return (
    <div className="eachVideo">
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
      <section className="icon-btn">
        <span>Rating: {video.rating}</span>
        <Votes video={video} setVideos={setVideos} videos={videos} />
        <DeleteVideo video={video} getAllVideos={getAllVideos} />
      </section>
    </div>
  );
}

export default VideoInfo;
