import React, { useState } from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const PositionLayout = (props) => {
    return(
        <View>
            <Text>SegundoComponente</Text>
            <Button
            title="Voltar a Tela inicial"
            onPress={() => props.navigation.navigate("Inicial")}
            />
        </View>
    )
}
const styles = StyleSheet.create({})

export default PositionLayout;