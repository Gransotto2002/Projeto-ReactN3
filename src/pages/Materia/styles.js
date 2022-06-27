import { StyleProp } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20
    },
    Materia:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5    
    },
    deleteMateria:{
        justifyContent: "center",
        paddingLeft: 150
    },
    DescriptionTask:{
        width: "75%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#282b2db5"
    },
    buttonNovaMateria:{
        width: 60,
        height: 60,
        position:"absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: "bold"
    }
});

export default styles