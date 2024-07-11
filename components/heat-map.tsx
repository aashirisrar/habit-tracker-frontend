"use client";

import React, { useState } from "react";
import HeatMap from "@uiw/react-heat-map";

const HeatMapComponent = ({ values }: any) => {
  const [range, setRange] = useState(5);

  return (
    <div>
      <HeatMap
        value={values}
        weekLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
        style={{ "--rhm-rect": "#b9b9b9" }}
        startDate={new Date("2016/01/01")}
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
