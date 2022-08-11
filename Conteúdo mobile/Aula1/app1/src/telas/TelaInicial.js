import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";


const TelaInicial = (props) => {
    return (
        <View style={{flex: 1, alignItems: "center", backgroundColor: "tomato",}}>
            <Text style={{marginBottom: 13}}>Tela Inicial
            </Text>
            <Button 
            title="navegar" 
            onPress={() => props.navigation.navigate("Primeira")}
            />
        </View>
    );
};


const styles = StyleSheet.create({});

export default TelaInicial;
