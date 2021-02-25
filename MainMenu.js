import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { constants } from './constants'

export default function MainMenu(props) {
  const [vibro, setVibro] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={() => {
        props.hideModal && props.hideModal()
        navigation.navigate("Basketball", {
          vibro,
        })
      }} style={styles.item} >
        <Text style={styles.text} >Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Settings", {
          vibro,
          setVibro
        })
      }} style={styles.item} >
        <Text style={styles.text} >Settings</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: constants.MAX_WIDTH,
    height: constants.MAX_HEIGHT,
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