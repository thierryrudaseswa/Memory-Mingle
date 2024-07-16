// components/BackgroundVideo.js
import  BackgroundVideo  from 'next-video';

const MyBackgroundVideo = () => (
  <BackgroundVideo
    src={"../../.././Image/video.mp4"}
    className="h-screen"
    loop
    muted
    playsInline
  />
);

export default MyBackgroundVideo;
