import styled from "styled-components/native/index";
import { KeyBoardAvoidingView, TextInput } from 'react-native';
import { orange, red, white } from "../utils/colors";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${orange};
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 280px;
  margin-top: 15px;
  color: ${white};
  border-bottom-color: ${red};
  border-bottom-width: 3;
`;
