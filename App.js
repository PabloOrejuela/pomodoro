import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import { 
    StyleSheet, 
    Text, 
    Platform, 
    View, 
    SafeAreaView, 
    TouchableOpacity
} from 'react-native'
import Header from './src/components/Header'
import Timer from './src/components/Timer'
import {Audio} from 'expo-av'

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK")
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval = null

    if (isActive) {
      //Run timer
      interval = setInterval(() => {
        setTime(time - 1)
      }, 1000)
      
    }else{
      //Clear intervall
      clearInterval(interval)
    }

    if (time === 0) {
      setIsActive(false)
      setIsWorking(prev => !prev)
      setTime(isWorking ? 300 : 1500)
    }
    return () => clearInterval(interval)
  }, [isActive, time])

  function handleStartStop(){
    playSound()
    setIsActive(!isActive) 
  }

  async function playSound(){
    const {sound} = await Audio.Sound.createAsync(
      require("./assets/mouse-click-1.mp3")
    )

    await sound.playAsync()
  }

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
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={styles.linkEstado}>{isActive ? "Stop" : "Start"}</Text>
        </TouchableOpacity>
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
  },
  linkEstado: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 15,
    padding: 15,
    marginTop: 15
  }
})
