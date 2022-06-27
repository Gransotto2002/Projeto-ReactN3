import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native-web";

import database from "../../config/firebaseconfig";
import Materia from "../Materia";
import styles from "../Materia/styles";



export default function NovaMateria({navigation}){
    const [description, setDescription] = useState(null)

    function addMateria(){
        database.collection(Materia).add({
            description: description,
            status: false
        })
        navigation.navigate(Materia)
    }

    return(
        <View style={styles.container}> 
            <text style={styles.label}>Descrição</text>
            <TextInput
                style={style.input}
                placeholder="Ex: Adicione a Matéria a ser estudada."
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.buttonNovaMateria}
                onPress={()=>{
                    addMateria()
                }}
            >
                <text
                    style={styles.iconButton}>Salvar</text>
            </TouchableOpacity>
        </View>
    )
}