"use client";

import React, { useState } from "react";
import HeatMap from "@uiw/react-heat-map";

const HeatMapComponent = ({ values }: any) => {
  const [range, setRange] = useState(5);
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col items-center justify-center">
      <HeatMap
        className="w-[720px] max-sm:w-[300px] max-lg:w-[510px]"
        value={values}
        weekLabels={["Mon", "", "Wed", "", "Fri", "", "Sun"]}
        style={{
          "--rhm-rect": "#9b9b9b",
          color: "#FFFF",
        }}
        startDate={new Date("2024/01/01")}
        endDate={new Date("2024/12/31")}
        legendRender={(props) => (
          <rect {...props} y={props.y + 10} rx={range} />
        )}
        rectProps={{
          rx: range,
        }}
        rectRender={(props, data) => {
          if (selected !== "") {
            props.opacity = data.date === selected ? 1 : 0.45;
          }
          return (
            <rect
              {...props}
              onClick={() => {
                setSelected(data.date === selected ? "" : data.date);
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default HeatMapComponent;
