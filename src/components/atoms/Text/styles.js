import styled from "styled-components";

export const CustonText = styled.Text`
  font-size: 24px;
  color: ${({ color }) => color || "white"};
  font-weight: bold;
  margin-top: 12px;
`;
