import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const options = ["Pomodoro", "Short break", "Long break"]

export default function Header({setTime, currentTime, setCurrentTime}){

    const handlePress = (index) =>{
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15
        setCurrentTime(index)
        setTime(newTime * 60)
    }

    return(
        <View style={styles.container}>
            {options.map((item, index) => (
                <TouchableOpacity 
                    key={index} 
                    onPress={() => handlePress(index)}
                    style={[styles.itemStyle, currentTime !== index && {borderColor: 'transparent'}]}
                >
                    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    itemStyle:{
        alignItems: "center",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 3,
        fontSize: 32,
        fontWeight: "bold",
        marginVertical: 20,
        padding: 5,
        width: "33%"
    },
    text:{
        fontWeight: "bold"
    }
})