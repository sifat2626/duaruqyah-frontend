import { useRef, useState } from "react"
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown } from "react-icons/fa"

function CustomAudioPlayer({ audioSrc }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1.0) // Default volume

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    audioRef.current.volume = newVolume
  }

  return (
    <div className="audio-player flex items-center gap-4 p-4 bg-gray-200 rounded-lg">
      <button
        onClick={togglePlay}
        className="p-2 bg-green-500 text-white rounded-full focus:outline-none"
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-24"
        title="Volume"
      />
      <FaVolumeDown className="text-gray-600" />
      <FaVolumeUp className="text-gray-600" />

      <audio ref={audioRef} src={audioSrc} />
    </div>
  )
}

export default CustomAudioPlayer
