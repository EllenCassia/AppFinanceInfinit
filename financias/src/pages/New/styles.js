import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #bbffff;
`;
export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: rgba(255,255,255,0.9);
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 14px;
    border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    border-radius: 7px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #ff0000;
    font-weight: bold;
`;


