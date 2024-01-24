import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeLan } from '../store/translateSlice';
export default function Language({ navigation }) {
  // https://icons.expo.fyi/ 查看 @expo/vector-icons 这个库各种图标的地址

  const lanList = useSelector((state) => state.translate.lanList);
  const curIndex = useSelector((state) => state.translate.curIndex);
  const dispatch = useDispatch();
  // 切换语言
  function pressHandle(index) {
    dispatch(changeLan(index));
    // 跳转到翻译页
    navigation.navigate('翻译');
  }
  return (
    <ScrollView>
      {lanList.map(function (item, index) {
        return (
          <Pressable key={index} onPress={() => pressHandle(index)}>
            {index === curIndex ? (
              <View style={[styles.lanItem, styles.selected]}>
                <Text style={styles.lanTitle}>{item.chs}</Text>
                <AntDesign name="check" size={20} color="#555" />
              </View>
            ) : (
              <View style={styles.lanItem}>
                <Text style={styles.lanTitle}>{item.chs}</Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lanItem: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    paddingLeft: 10,
  },
  selected: {
    paddingRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lanTitle: {
    lineHeight: 50,
    color: '#555',
  },
});
