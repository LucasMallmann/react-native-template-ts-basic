import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Greeting = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin-top: 20px;
`;
