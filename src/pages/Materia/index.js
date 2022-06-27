import React, { useEffect, useState } from "react";
import { SafeareaView, 
        Text,
        TouchableOpacity,
        FlatList,  
        View} from "react-native-web";

import database from "../../config/firebaseconfig";
import { FontAwesome } from "@expo/vector-icons";
import Style from "./styles"
import styles from "./styles";
import Details from "../details";
import NovaMateria from "../NovaMateria";

export default function Materia({navigation}){
    const [Materia, setMateria] = useState([])
    
    function deleteMateria(id){
        database.collection(dados).doc(id).delete()
    }

    useEffect(()=>{
        database.collection(dados).onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setMateria(list)
        })
    }, [])

    return(
        <View style={style.container}> 
            <FlatList
                showVertcalScrollIndicator={false}
                data={Materia}
                renderItem={( item )=>{
                    return(
                    <View style={style.Materia}>
                          <TouchableOpacity 
                             style={styles.deleteMateria}
                             onPress={() =>{
                                deleteMateria(item.id)
                             }}
                            >
                        <FontAwesome
                            name="star"
                            size={23}
                            color="#F926A"
                        >     
                        </FontAwesome>   
                         </TouchableOpacity>
                        <Tesxt
                            style={styles.DescriptionTask}
                            onPress={()=>
                                navigation.navigate(Details, {
                                    id: item.id,
                                    description: item.description
                                })
                            }
                        >
                        {item.description}
                        </Tesxt>
                    </View>
                    )
                }}
            />
            <TouchableOpacity 
                style={styles.buttonNovaMateria}
                onPress={() => navigation.navigate(NovaMateria)}
            >
                <text style={style.iconButton}>+</text>
            </TouchableOpacity>
            
        </View>
    )
}