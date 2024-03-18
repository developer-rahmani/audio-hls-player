"use client";

// !! Types
import { QualitiesType } from "./index.types";

// !! Hooks
import React, { useState } from "react";

const Qualities = ({
  updateQuality,
  qualities,
  currentQuality,
}: QualitiesType) => {
  const [isShowQualityContainer, setIsShowQualityContainer] =
    useState<boolean>(false);

  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <button
        className="bg-gray-700 w-full h-full rounded-[8px] text-gray-200 flex flex-col items-center justify-center gap-[12px] relative"
        onClick={() => setIsShowQualityContainer((prevState) => !prevState)}
      >
        Qualities
      </button>

      {isShowQualityContainer && (
        <div className="flex flex-col gap-[12px] p-[12px] text-gray-200 text-sm absolute top-full left-0 right-0 bg-gray-800 rounded-[8px]">
          <button
            onClick={() => updateQuality("auto")}
            className={`${currentQuality === -1 ? "bg-gray-900" : ""}`}
          >
            Auto
          </button>

          {qualities.map((item, index) => (
            <button
              className={`${currentQuality === index ? "bg-gray-900" : ""}`}
              key={item.height}
              onClick={() => updateQuality(item.height)}
            >
              {item.height}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Qualities;
