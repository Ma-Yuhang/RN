import { useState } from "react";
import { View, StyleSheet, TextInput,Button } from "react-native";
import { useDispatch } from "react-redux";
import { increment } from "../store/todoListSlice";
export default function Input() {

  const [valueInput, setValueInput] = useState('')
  const dispatch = useDispatch()
  // 添加按钮回调
  function pressHandle() {
    dispatch(increment(valueInput))
    setValueInput('')
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="请输入"
        placeholderTextColor='#999'
        value={valueInput}
        onChangeText={(v) => setValueInput(v)}
      />
      <Button title="添加" onPress={pressHandle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: 300,
    backgroundColor: "#FFF",
    height: 40,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#DDD",
  },
})