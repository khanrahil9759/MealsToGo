/* eslint-disable prettier/prettier */
import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (postion, size, theme) => {
  const sizedIndex = sizeVariant[size];
  const property = positionVariant[postion];
  const value = theme.space[sizedIndex];
  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const Spacer = ({ postion, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(postion, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};
Spacer.defaultProps = {
  postion: "top",
  size: "small",
};

export default Spacer;
