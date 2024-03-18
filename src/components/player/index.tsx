"use client";

import React, { useEffect, useRef, useState } from "react";
import Hls, { Level } from "hls.js";
import Qualities from "./Qualities";
import PlayButton from "./PlayButton";

const Player = () => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const src = "https://stream.ram.radio/audio/ram.stream_aac/playlist.m3u8";
  const [qualities, setQualities] = useState<Level[]>([]);
  const [hls, setHls] = useState<Hls | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentQuality, setCurrentQuality] = useState<number | string>("");

  const updateQuality = (newQuality: number | string) => {
    if (newQuality === "auto") {
      if (hls) {
        hls.currentLevel = -1;
        setCurrentQuality(-1);
      }

      return;
    }

    qualities?.forEach((level, levelIndex) => {
      if (level.height === newQuality) {
        if (hls) {
          hls.currentLevel = levelIndex;
          setCurrentQuality(levelIndex);
        }

        return;
      }
    });
  };

  useEffect(() => {
    setAudio(new Audio());
  }, []);

  useEffect(() => {
    if (audio) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          //   xhrSetup: function (xhr) {
          //     xhr.setRequestHeader(
          //       "Authorization",
          //       `Bearer ${cookies.get("accessToken")}`
          //     );
          //   },
        });

        hls.loadSource(src);
        hls.attachMedia(audio);

        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          console.log("hls.levels", hls.levels);
          setQualities(hls.levels);
          setCurrentQuality(hls.currentLevel);

          setHls(hls);
        });
      } else {
        setQualities([]);
        setHls(null);
        audio.src = src;
      }
    }
  }, [audio]);

 

  useEffect(() => {
      if (isPlaying) {
        audio?.play();
      } else {
        audio?.pause();
      }
  }, [isPlaying]);

  return (
    <>
      <div className="grid grid-cols-[150px_150px] h-[48px] items-center gap-[24px] mt-[24px]">
        <PlayButton
          isPlaying={isPlaying}
          setIsPlaying={(status) => setIsPlaying(status)}
        />

        <Qualities
          currentQuality={currentQuality}
          qualities={qualities}
          updateQuality={updateQuality}
        />
      </div>
    </>
  );
};

export default Player;
