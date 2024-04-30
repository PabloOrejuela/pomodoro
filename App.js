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
import Timer from './src/components/Timer'

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")


  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View style={Platform.OS === "android" && styles.contenedor}>
        <Text style={styles.text}>Pomodoro</Text>
        <StatusBar style="auto" />
        <Header 
          setTime={setTime} 
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <Timer time={time}></Timer>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenedor: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  text:{
    fontSize: 32,
    fontWeight: "bold"
  }
})
