import { useRef, useState, useEffect } from "react"
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa"
import { RxLoop } from "react-icons/rx"

function AudioPlayer({ src }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLooping, setIsLooping] = useState(false)

  // Format time to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Handle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Update current time
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  // Toggle loop
  const toggleLoop = () => {
    setIsLooping(!isLooping)
    audioRef.current.loop = !isLooping
  }

  // Fetch duration on load
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  useEffect(() => {
    // Reset audio when the source changes
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }, [src])

  return (
    <div className="flex flex-col gap-2 rounded-lg">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        Your browser does not support the audio element.
      </audio>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Play/Pause */}
        <button onClick={togglePlay} className="text-[#1FA45B] ">
          {isPlaying ? (
            <FaPauseCircle className="size-12" />
          ) : (
            <FaPlayCircle className="size-12" />
          )}
        </button>

        {/* Time Display */}
        {isPlaying && (
          <div className="text-gray-700 font-medium">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        )}

        {/* Loop */}
        {isPlaying && (
          <button
            onClick={toggleLoop}
            className={`${
              isLooping ? "bg-[#1FA45B]" : ""
            } text-gray-500 text-2xl px-4 py-2 rounded-lg`}
          >
            {isLooping ? <RxLoop className="font-medium" /> : <RxLoop />}
          </button>
        )}
      </div>
    </div>
  )
}

export default AudioPlayer
