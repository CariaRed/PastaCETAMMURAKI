/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

const Pessoa = (props) => {
  return(
    <View>
      <Text>Oi , eu sou {props.name} {props.sobrenome} {props.idade}</Text>
    </View>


  )
}

export default function App() {
  return (
    <View style={styles.container}>
     <Image style={styles.text} source={require ('./assets/heat.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    borderColor: "blue",
    borderWidth: 5,
    backgroundColor: "red",
    width: 50,
    height: 50
  }
});*/

/*----------------------------------------------------------------------------------------------------*/
/*import React from "react";
import { StyleSheet, Text, View, Button} from "react-native";

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>React native</Text>
  </View>
);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 30,
    backgroundColor: "#eaeaea"
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default App;*/

/*import React from "react";
import { StyleSheet, View, Text, Button} from "react-native";


const App = () => (
  <View style={styles.container}>

    <View style={styles.box1}>
      <Text style={styles.text}>1</Text>
    </View>

    <View style={styles.box2}>
      <Text style={styles.text2}>2</Text>
    </View>

    <View style={styles.box3}>
      <Text style={styles.text3}>3</Text>
    </View>
    
    <View style={styles2.container}>
      <Text style={styles2.row}>React</Text>
      <Text style={styles2.row}>Native</Text>
    </View>
 </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  box1: {
    position: "absolute",
    top: 15,
    left: 240,
    width: 100,
    height: 105,
    backgroundColor: "red"

  },
  box2: {
    top: 15,
    left: 20,
    position: "absolute",
    width: 100,
    height: 105,
    backgroundColor: "blue"

  },
  box3: {
    position: "absolute",
    top: 120,
    left: 120,
    width: 120,
    height: 100,
    backgroundColor: "green"
  },
  
  text: {
    color: "green",
    fontSize: 90,
  },
  text3: {
    fontSize: 80,
    color: "#61dafb",
    textAlign: "center"
  },
  text2: {
    textAlign: "right",
    fontSize: 90,
    color: "red",
  },
  
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    width: 300
  },
  row:{
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: 2,
    top: 200,
    left: 10
  }
})
export default App;*/

/*import React from "react";
import {StyleSheet, View, Image} from "react-native";

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.tinyLogo}
      source={require('')}
      />
    
    <Image
    style={styles.logo}
    source={{
      uri: 'https://media.contentapi.ea.com/content/dam/need-for-speed/nfs-heat/common/wallpapers/nsfh-wallpaper-keyart-16x9.png',
    }}   
    />
    </View>

  );
  
  const styles= StyleSheet.create({
    container:{
    paddingTop: 50
    },
    tinyLogo:{
      width: 50,
      height: 50
    },
    logo: {
      width: 66,
      height: 58
    },








  })








} 
export default DisplayAnImage;*/

/*import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";


  const App = () => {
    return(
      <View>
        <Text>Ola mundo</Text>
        <Image style={styles.jogo} source={require('./src/jogo.jpg')}/>
      </View>
    )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 100
    },
    jogo : {
      top: 100,
      left: 100,
      width: 100,
      height: 100
    }

  })

  export default App;*/

  /*import React from "react";
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import TelaInicial from "./src/telas/TelaInicial";
  import PrimeiroComponente from "./src/telas/PrimeiroComponente";
  import PositionLayout from "./src/telas/PositionLayout";


  
  const Stack = createNativeStackNavigator();
  
  export default function  App () {
    return (
       <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen name="Inicial" component={TelaInicial}/>
          <Stack.Screen name="Primeira" component={PrimeiroComponente}/>
          <Stack.Screen name="Position" component={PositionLayout}/>
         </Stack.Navigator>
       </NavigationContainer>
    );
  };*/


  /*-----------------------------------------------------------------------------------------------------------------------------------*/
/*import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Greeting = (props) => {
    return (
        <View style={styles.card}>
            <Text>ola {props.nome} </Text>
            <Text>idade: {props.idade} </Text>
            <Text>Profissão: {props.profissional}</Text>
        </View>
    );
};

export default LotsOfGreetings = () => {
    return(
        <View style={{top: 50}}>

            <Text style={styles.titulo}>Ex uso de Props</Text>
            <Greeting nome="lucio" idade="19" profissional="aluno"/>
            <Greeting nome="gabriel" idade="19" profissional="monitor"/>
            <Greeting nome="velhinho" idade="19" profissional="motorista do pastel"/>
            <Greeting nome="weverton" idade="19" profissional="conhecedor de IA"/>

        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    card: {
        borderStartColor: '#cc',
        fontSize: 25,
        margin: 10,
        alignItems: 'center',
        padding: 10,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: 'fff'
    }

});*/

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}