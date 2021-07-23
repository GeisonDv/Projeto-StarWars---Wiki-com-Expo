import React from "react";
import { CustonText } from "./styles";

export const Text = ({ children, color }) => {
  return <CustonText color={color}>{children}</CustonText>;
};
