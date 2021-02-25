import React, { useEffect } from 'react'
import SwitchSelector from "react-native-switch-selector"
import { View, Text, StyleSheet } from 'react-native'
import { constants } from './constants'
import AsyncStorage from '@react-native-community/async-storage'
export default function Settings({route}) {
  useEffect(() => {
    console.log(params.vibro)
  })
  const options = [
    { label: "On", value: true },
    { label: "Off", value: false },
  ];
  const getValue = async () => {
    try {
      const value = await AsyncStorage.getItem("HIGH_SCORE")
      console.log("getValue", value)
      setHighScore(value)
    }
    catch(e) {
      console.log("getValue", e)
    }
  }
  const setValue = async () => {
    try {
      AsyncStorage.setItem("HIGH_SCORE", score.toString())
    }
    catch(e) {
      console.log("setValue", e)
      AsyncStorage.setItem("HIGH_SCORE", score.toString())
    }
  }
  useEffect(() => {
    getValue()
  })
  const {params} = route
  const toggleSwitch = () => params.setVibro(!params.vibro)
  return (
    <View style={styles.container} >
      <View style={styles.item} >
        <Text style={styles.text}>Vibration</Text>
        <SwitchSelector
        value={params.vibro}
        onPress={toggleSwitch}
  options={options}
  initial={params.vibro ? 0 : 1}
  onPress={() => toggleSwitch()}
/>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: constants.MAX_HEIGHT * 0.1,
    backgroundColor: "#053646",
  },
  item: {
    width: constants.MAX_WIDTH * 0.9,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
  },
  text: {
    fontSize: constants.MAX_HEIGHT * 0.05,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff"
  }
})