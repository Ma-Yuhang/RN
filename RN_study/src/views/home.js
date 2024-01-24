import { Button, Text, View, StyleSheet } from "react-native";

export default function Home({ navigation, route }) {
  // console.log(navigation);

  function goDetails() {
    navigation.navigate('details', {
      id: '1',
      age: 18,
      title: '传递的details标题'
    })
  }
  function goProfile() {
    navigation.navigate('setting')
  }
  return (
    <View style={styles.container}>
      <Text>我是主页</Text>
      <Text>sex:{route.params?.post}</Text>
      <Button title="跳转到详情页" onPress={goDetails} />
      <Button title="跳转到profile页" onPress={goProfile} />
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