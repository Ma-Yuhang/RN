import { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

export default function Details({ navigation, route }) {
  const [value, setValue] = useState('')
  function goHome() {
    navigation.navigate('home', {
      post: value
    })

  }
  // 修改传递过来的参数
  function changeAge() {
    navigation.setParams({
      age: 20
    })
  }
  // 修改标题
  function changeTitle() {
    navigation.setOptions({
      title: "详情页标题2222"
    })
  }
  const { id, age, msg } = route.params
  return (
    <View style={styles.container}>
      <Text>我是详情页</Text>
      <Text>id: {id}-age: {age}-msg:{msg}</Text>
      <Button title="修改年龄" onPress={changeAge}></Button>
      <Button title="修改标题" onPress={changeTitle}></Button>
      <TextInput
        placeholder="请输入"
        value={value}
        onChangeText={setValue}
      />
      <Button title="跳转到主页" onPress={goHome} />
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