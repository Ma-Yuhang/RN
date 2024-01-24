import { Button, Text, View, StyleSheet, } from "react-native";

export default function Details({ navigation }) {
  function goSetting() {
    navigation.navigate('profile')
  }
  return (
    <View style={styles.container}>
      <Text>setting</Text>
      <Button title="跳转到profile页面" onPress={goSetting}></Button>
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