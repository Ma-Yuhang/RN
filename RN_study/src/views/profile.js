import { useEffect, useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function Details({ navigation }) {

  // useEffect(() => {
  //   const removeListener = navigation.addListener('focus', () => {
  //     console.log('进入了页面');
  //   })
  //   navigation.addListener('blur', () => {
  //     console.log('退出了页面');
  //   })
  //   return removeListener
  // }, [navigation])

  useFocusEffect(
    useCallback(() => {
      alert("进入到了 Profile 页面");
      return () => {
        alert("从 Profile 页面退出了");
      };
    }, [])
  )
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})