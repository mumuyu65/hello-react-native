import React from "react";

import { View, Text, Button } from "react-native";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../stacks/home";

import InfoScreen from "../stacks/information";

import DetailsScreen from "../stacks/detail";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

const SettingsStack = createStackNavigator({
  Details: DetailsScreen
});

const InfoStack = createStackNavigator({
  Info: InfoScreen
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Info: InfoStack,
  Settings: SettingsStack
});

export default TabNavigator;
