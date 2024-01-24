import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/reducers";


export default function Counter() {
  const counter = useSelector(state => state.counter.value)

  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Button title="-" onPress={() => dispatch(decrement())} />
      <Text>{counter}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
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