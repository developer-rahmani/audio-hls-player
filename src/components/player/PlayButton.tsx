// !! Types
import { PlayButtonType } from "./index.types";

const PlayButton = ({ isPlaying, setIsPlaying } : PlayButtonType) => {
  return (
    <>
      {isPlaying ? (
        <button
          className="bg-gray-700 w-full h-[48px] rounded-[8px] text-gray-200"
          onClick={() => setIsPlaying(false)}
        >
          Pause
        </button>
      ) : (
        <button
          className="bg-gray-700 w-full h-full rounded-[8px] text-gray-200"
          onClick={() => setIsPlaying(true)}
        >
          Play
        </button>
      )}
    </>
  );
};

export default PlayButton;
