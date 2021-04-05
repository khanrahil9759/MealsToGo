/* eslint-disable prettier/prettier */
import React from "react";

import CompactReaturantInfo from "../../../components/compact-restaurant-info.component";

const MapCallout = ({ restaurant }) => {
  return <CompactReaturantInfo isMap restaurant={restaurant} />;
};

export default MapCallout;
