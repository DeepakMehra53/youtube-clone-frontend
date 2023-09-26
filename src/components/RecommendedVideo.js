
import VideoCard from './VideoCard'
import "./RecommendedVideo.css"

const RecommendedVideo = () => {
  
  return (

    <div className="recommendedVideos">
      <h2>Recommended Videos</h2>
      <div className="recommendedVideos__videos">

        <VideoCard
          title="Elon Musk says Teslas is too expensive"
          views="3.2m Views"
          timestamp="3 days ago"
          channelImage="http://dummyimage.com/100x100.jpg/5fa2dd/ffffff"
          channel="Tech News"
          image="http://dummyimage.com/250x250.jpg/dddddd/000000"
        />

      </div>
    </div>
  )
}

export default RecommendedVideo