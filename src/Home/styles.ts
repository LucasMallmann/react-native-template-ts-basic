import styled from 'styled-components/native';

/**
 * This component uses your custom theme to setup the background
 */
export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Greeting = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;
