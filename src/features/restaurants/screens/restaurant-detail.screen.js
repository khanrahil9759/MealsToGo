/* eslint-disable prettier/prettier */
import React from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info";

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};

export default RestaurantDetail;
