import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus, decrement } from "../store/todoListSlice";
export default function List() {

  const list = useSelector(state => state.todoList.listData)
  const dispatch = useDispatch()
  // 点击切换状态
  function pressHandle(index) {
    dispatch(changeStatus(index))
  }
  // 长按删除待办
  function longPressHandle(index) {
    Alert.alert('提醒', '确定要删除这条待办吗', [
      {
        text: "取消",
        onPress: () => console.log("取消删除"),
        style: "cancel",
      },
      {
        text: "确定删除",
        onPress: () => {
          dispatch(decrement(index));
        },
      },
    ])
  }
  return (
    <View style={styles.container}>
      {

        list.map((item, index) => (
          <View key={index} style={styles.item}>
            <Pressable
              onPress={() => pressHandle(index)}
              onLongPress={() => longPressHandle(index)}
            >
              {
                item.done ? <Text style={styles.complete}>{item.title}</Text>
                  : <Text>{item.title}</Text>
              }
            </Pressable>

          </View>

        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  item: {
    padding: 10,
    marginBottom: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: 300,
  },
  complete: {
    textDecorationLine: "line-through",
  },
});