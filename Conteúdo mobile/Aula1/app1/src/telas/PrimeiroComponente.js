import React from "react";
import {View, Text, StyleSheet, Button} from "react-native"

const PrimeiraComponent = (props) => {
    return (
        <View>
            <Text>Primeira Componente</Text>
            <Button
            title="Navegar"
            onPress={() => props.navigation.navigate("Position")}
            />
        </View>
    )
}
const styles = StyleSheet.create({})

export default PrimeiraComponent