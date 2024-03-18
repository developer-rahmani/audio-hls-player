import { Level } from "hls.js";

export type QualitiesType = {
  updateQuality: (quality: string | number) => void;
  qualities: Level[];
  currentQuality: number | string;
};

export type PlayButtonType=  {
    isPlaying : boolean, setIsPlaying : (status : boolean)=>void
}