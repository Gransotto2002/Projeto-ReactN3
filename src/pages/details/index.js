import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native-web";
import database from "../../config/firebaseconfig";
import Materia from "../Materia";
import styles from "./styles";

export default function Details({navigation, route}){
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idMateria = route.params.id

    function editMateria(description, id){
        database.collection(Materia).doc(id).update({
            description: descriptionEdit,
        })
        navigation.navigate(Materia)
    }

    return(
        <View style={styles.container}> 
        <text style={styles.label}>Descrição</text>
        <TextInput
            style={style.input}
            placeholder="Ex: Editar Matéria a ser estudada."
            onChangeText={setDescriptionEdit}
            value={descriptionEdit}
        />
        <TouchableOpacity
            style={styles.buttonNovaMateria}
            onPress={()=>{
               editMateria(descriptionEdit, idMateria)
            }}
        >
            <text
                style={styles.iconButton}>Salvar</text>
        </TouchableOpacity>
    </View>
)
}