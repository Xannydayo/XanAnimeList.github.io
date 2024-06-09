import React from 'react'
import VideoPlayer from './VideoPlayer'

const ButtonOpenTrailer = () => {
    return(
    <button
      onClick={handleVideoPlayer}
      className="w-32 bg-white text-black text-xl hover:text-teal-300 shadow-xl"
    >
      Lihat Preview
    </button>
    )
}

  return isOpen ? <Player /> : <ButtonOpenTrailer/>
    

export default videobutton