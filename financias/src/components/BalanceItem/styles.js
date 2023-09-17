import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #${props => props.bg};
  margin-left: 14px;
  margin-right: 14px;   
  border-radius: 4px;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
  padding-left: 14px;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #FFF;
`;

export const Balance = styled.Text`
    font-size: 30px;
    margin-top: 5px;
    color: #fff;
`;