import React from "react"
import PropTypes from 'prop-types'

const Video = ({ videoSrcURL, videoTitle }) => (
  <div className="video mx-auto w-full h-full">
    <iframe
      className="w-full h-full"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video

Video.propTypes = {
    videoSrcURL: PropTypes.string,
    videoTitle: PropTypes.string,
  }