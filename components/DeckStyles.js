import styled from "styled-components/native/index";
import { orange, red, white } from "../utils/colors";

export const Deck = styled.TouchableOpacity`
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: ${orange};
  align-items: center;
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: ${white};
`;

export const HeadingText = styled.Text`
  font-size: 35px;
  color: rgba(255, 255, 255, 1.0);
`;

export const TrailingText = styled.Text`
  font-size: 25px;
  color: ${red};
`;