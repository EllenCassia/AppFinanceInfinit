import React from "react";  

import { Container,Title,ButtonMenu } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header({title}){
    const navigator = useNavigation();
    return(
        <Container>
            <ButtonMenu onPress={() => navigator.openDrawer()}>
                <Icon name="menu" size={40} color="#131313"/>
            </ButtonMenu>

            {title && (
                <Title>{title}</Title>
            )}
        </Container>
    )
}