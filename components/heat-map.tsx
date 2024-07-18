"use client";

import React, { useState } from "react";
import HeatMap from "@uiw/react-heat-map";

const HeatMapComponent = ({ values }: any) => {
  const [range, setRange] = useState(5);

  return (
    <div className="flex flex-col items-center justify-center">
      <HeatMap
        width={720}
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
      />
    </div>
  );
};

export default HeatMapComponent;
