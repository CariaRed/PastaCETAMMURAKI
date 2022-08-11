import React, {useState, useEffect} from "react"
import { View, Text, FlatList, TouchableOpacity} from "react-native";
import styles from "./style";
import database from "../../service/fireBaseConnection"
import {FontAwesome} from "@expo/vector-icons";


export default function Task({navigation}){
    const [task, setTask] = useState([])


    function deleteTask(id){
        database.collection("Tasks").doc(id).delete()
    }

    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list)
        }) 
    }, [])





    return(
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={(item) => {
                <View style={styles.Tasks}>
                <TouchableOpacity 
                 style={styles.deleteTask}
                 onPress={() => {
                    deleteTask(item.id)
                 }}
                >
                <FontAwesome
                    name="star"
                    size={10}
                    color="#F92e6a"
                >
                </FontAwesome>
                </TouchableOpacity>

                <Text
                style={styles.DescriptionTask}
                onPress={() => {
                    navigation.navigate("Details", {
                        id: item.id,
                        description: item.description
                    })
                }}
                >
                    {item.description}
                </Text>
                </View>
            }}

            />
            <TouchableOpacity style={styles.buttonNewTask}
            onPress={() => navigation.navigate("NewTask")}
            >
            <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

