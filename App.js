import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    Platform, 
    View, 
    SafeAreaView 
} from 'react-native'
import Header from './src/components/Header'

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")


  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View style={Platform.OS === "android" && styles.contenedor}>
        <Text style={styles.text}>Pomodoro</Text>
        <Text style={styles.text}>{time}</Text>
        <StatusBar style="auto" />
        <Header 
          setTime={setTime} 
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  contenedor: {
    paddingTop: 30
  },
  text:{
    fontSize: 32,
    fontWeight: "bold"
  }
})
