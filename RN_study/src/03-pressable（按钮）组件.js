// import A from './src/02-照片分享案例'
import { Text, View, StyleSheet, Pressable } from 'react-native'
export default function App() {

  function onPressHandle() {
    console.log('点击');
  }
  function onPressInHandle() {
    console.log('触碰到了');
  }
  function onPressOutHandle() {
    console.log('松开了');
  }
  function onLongPressHandle() {
    console.log('长按');
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPressHandle}
        onPressIn={onPressInHandle}
        onPressOut={onPressOutHandle}
        onLongPress={onLongPressHandle}
        style={({ pressed }) => {
          if (pressed) {
            return { backgroundColor: 'red' }
          }
        }}
      >
        {({ pressed }) => {
          return <Text>{pressed ? '点到了' : '点我'}</Text>
        }}
        {/* <Text>哈哈</Text> */}
      </Pressable>
      {/* <Text
        style={{ marginTop: 40, backgroundColor: 'red', width: 100, height: 50 }}
        onPress={onPressHandle}
        onPressOut={onPressOutHandle}
        onLongPress={onLongPressHandle}
      >
        按钮</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})