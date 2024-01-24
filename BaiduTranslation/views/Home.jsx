import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import translateFunc from '../api/translate';
import { addHistory } from '../store/translateSlice';
export default function Home() {
  // 用户输入的内容
  const [value, setValue] = useState('');
  // 翻译的结果
  const [result, setResult] = useState('');
  const lanList = useSelector((state) => state.translate.lanList);
  const curIndex = useSelector((state) => state.translate.curIndex);
  const dispatch = useDispatch();
  async function clickHandle() {
    try {
      if (value.trim().length) {
        let res = await translateFunc(value, {
          from: 'auto',
          to: lanList[curIndex].lang,
        });
        // 设置翻译结果
        setResult(res);
        // 保存翻译记录
        dispatch(addHistory({ txt: value, res }));
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4b3c96" />
      {/* 上面翻译成哪一国语言 */}
      <View style={styles.lan}>
        <Text style={styles.lanTxt}>
          翻译为
          <Text
            style={{
              color: '#1c1b21',
              fontWeight: '900',
            }}
          >
            {lanList[curIndex].chs}
          </Text>
        </Text>
      </View>
      {/* 输入要翻译的文本 */}
      <TextInput
        multiline
        numberOfLines={10}
        placeholder="请输入您要翻译的文本"
        placeholderTextColor="#c7c7c7"
        style={styles.txtInput}
        textAlignVertical="top"
        value={value}
        onChangeText={(t) => setValue(t)}
      />
      {/* 显示译文区域，可以点击 */}
      <Pressable style={styles.resultContainer} onPress={clickHandle}>
        <Text style={styles.resultTitle}>译文：</Text>
        <Text>{result}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lan: {
    width: 150,
    height: 30,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lanTxt: {
    color: '#888',
    fontSize: 14,
  },
  txtInput: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 15,
    flex: 0.7,
  },
  resultContainer: {
    flex: 1,
    padding: 10,
  },
  resultTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});
