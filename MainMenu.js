import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { AdMobComponent } from './AdMobComponent'
import { constants } from './constants'

export default function MainMenu() {
  const [vibro, setVibro] = useState(storedVibro)
  const [storedVibro, setStoredVibro] = useState()
  useEffect(() => {
    console.log("storedVibro", storedVibro)
    getValue()
  }, [])
  const getValue = async () => {
    try {
      let value = await AsyncStorage.getItem("VIBRO")
      value = JSON.parse(value)
      console.log("getValue", value)
      setStoredVibro(value)
      console.log("getValue", value)
    }
    catch(e) {
      console.log("getValue", e)
    }
  }
  const setValue = async () => {
    try {
       await AsyncStorage.setItem("VIBRO", storedVibro.toString())
    }
    catch(e) {
      console.log("setValue", e)
    }
  }
  useEffect(() => {
    setValue()
    getValue()
  }, [storedVibro])
  const navigation = useNavigation()
  return (
    <>
    <View style={styles.container} >
      <TouchableOpacity onPress={() => {
        navigation.navigate("Basketball", {
          vibro: storedVibro,
        })
      }} style={styles.item} >
        <Text style={styles.text} >Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Settings", {
          vibro: JSON.parse(storedVibro),
          setVibro: (value) => {
            setStoredVibro(value)
          }
        })
      }} style={styles.item} >
        <Text style={styles.text} >Settings</Text>
      </TouchableOpacity>
    </View>
    <AdMobComponent/>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    width: constants.MAX_WIDTH,
    height: constants.MAX_HEIGHT * 0.8,
    flex: 1,
    paddingVertical: constants.MAX_HEIGHT * 0.1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#053646",
  },
  item: {
    width: constants.MAX_WIDTH * 0.9,
    marginVertical: 10,
    padding: 10,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 10
  },
  text: {
    fontSize: constants.MAX_HEIGHT * 0.05,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff"
  }
})