
import { isDaytime } from "@/lib/geo-location/isDaytime";
import {  ArrowUp, MoonStarIcon, SunDimIcon, WindIcon } from "lucide-react";
import { ThermoIcon } from "../icons/ThermoIcon";

export const DataDisplaying = ({ data }) => {
  return (
    <div className="w-full flex gap-8 items-center">
      <div>
        {isDaytime(data?.sys?.sunrise, data?.sys?.sunset) ? (
          <SunDimIcon className="text-yellow-200 w-10 h-10" />
        ) : (
          <MoonStarIcon className="text-black w-10 h-10" />
        )}
      </div>
      <div className="flex gap-8">
        <div className="flex gap-6">
          <div className="flex text-[20px] items-center">
            <ThermoIcon />
            <div className="text-[#1767CE] relative p-3">
              {data?.main?.temp}
              <div className="absolute top-1/3 right-0 h-[6px] w-[6px] rounded-full border border-[#1767CE]"></div>
            </div>
          </div>
          <div className="flex gap-1 text-[20px] items-center">
            <p className="text-base">Feels like </p>
            <div className="text-[#1767CE] text-xl relative p-3">
              {data?.main?.feels_like}
              <div className="absolute top-1/3 right-0 h-[6px] w-[6px] rounded-full border border-[#1767CE]"></div>
            </div>
          </div>
          <div className="flex gap-1 text-[20px] items-center">
            <WindIcon/>
            <p>{data?.wind?.speed}m/s</p>
            <div style={{
                transform:`rotate(${data?.wind?.degree}deg)`,
            }}>
            <ArrowUp />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
