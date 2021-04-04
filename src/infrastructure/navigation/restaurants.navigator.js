/* eslint-disable prettier/prettier */
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "../../components/text.component";
import RestaurantDetail from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantsStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNavigator;
