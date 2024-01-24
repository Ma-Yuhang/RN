import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';


export default function History() {
  const historyArr = useSelector(state => state.translate.history)
  return (
    <View style={styles.container}>
      {/* 上面的标题部分 */}
      <View style={styles.header}>
        <Text style={styles.font16}>翻译历史</Text>
        <Pressable style={styles.clearBtn}>
          <Text>清除历史记录</Text>
          <AntDesign name="closecircleo" size={14} color="black" />
        </Pressable>
      </View>
      {/* 下面就是所有的翻译记录 */}
      <ScrollView>
        {historyArr.map(function (item, index) {
          return (
            <View style={styles.item} key={index}>
              <View>
                <Text style={[styles.txt, styles.font16]}>{item.txt}</Text>
              </View>
              <View>
                <Text>{item.res}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clearBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
  },
  item: {
    marginTop: 15,
  },
  txt: {
    color: '#888',
    marginBottom: 5,
  },
  font16: {
    fontSize: 16,
  },
});
