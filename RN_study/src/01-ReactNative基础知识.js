import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, SectionList } from 'react-native';

export default function App() {
  const [text, setText] = useState('')
  const FlatListData = [
    { id: 1, name: '张三1', age: 18 },
    { id: 2, name: '张三2', age: 19 },
    { id: 3, name: '张三3', age: 20 },
    { id: 4, name: '张三4', age: 21 },
  ]
  const SectionListData = [
    {
      title: '第一组', data: [
        { age: 1 },
        { age: 2 },
        { age: 3 },
      ]
    },
    {
      title: '第二组', data: [
        { age: 4 },
        { age: 5 },
        { age: 6 },
      ]
    },
  ]
  return (
    // <View style={styles.container}>
    //   <Cat name='ma' age={15}></Cat>
    //   <Cat name='yu' age={16}></Cat>
    //   <Cat name='hang' age={17}></Cat>
    // </View>

    // <View style={styles.container}>
    //   {/* 本地图片 */}
    //   <Image source={require('../assets/splash.png')} style={styles.imgStyle} ></Image>
    //   {/* 网络图片必须指定尺寸 */}
    //   <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={styles.imgStyle}></Image>
    // </View>

    // <View style={styles.container}>
    //   <TextInput
    //     defaultValue={text}
    //     placeholder='请输入内容'
    //     style={{ width: 200, height: 20, borderColor: '#000', borderWidth: 1 }}
    //     onChangeText={(text) => {setText(text)}} // 文本框内容改变触发
    //   />
    //   <Text>你输入的内容是: {text}</Text>
    // </View>

    // 滚动视图
    // <ScrollView>
    //   {/* 本地图片 */}
    //   <Image source={require('./assets/splash.png')} style={styles.imgStyle} ></Image>
    //   <Text>hahahaha</Text>
    //   <Image source={require('./assets/splash.png')} style={styles.imgStyle} ></Image>
    //   <Image source={require('./assets/splash.png')} style={styles.imgStyle} ></Image>
    //   <Image source={require('./assets/splash.png')} style={styles.imgStyle} ></Image>
    //   <Image source={require('./assets/splash.png')} style={styles.imgStyle} ></Image>
    //   <Image source={require('./assets/splash.png')} style={styles.imgStyle} ></Image>
    // </ScrollView>

    // <FlatList
    //   data={FlatListData}
    //   renderItem={({ item }) => {
    //     // console.log(item,1);
    //     return <Text>姓名:{item.name},年龄:{item.age}</Text>
    //   }}
    //   keyExtractor={(item, index) => index}
    // />
    <SectionList
      sections={SectionListData}
      renderItem={({ item }) => {
        // console.log(item,1);
        return <Text>{item.age}</Text>
      }}
      renderSectionHeader={({section}) => <Text>{section.title}</Text>}
      keyExtractor={(item, index) => index}
    />
  );
}


// function Cat({ name, age }) {
//   const [count, setCount] = useState(1)
//   const clickHandle = () => {
//     setCount(count + 1)
//   }
//   return (
//     <View>
//       <Text>我的名字是{name},我今年{age}岁,Count:{count}</Text>
//       <Button title='count++' onPress={clickHandle} />
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  imgStyle: {
    width: 200,
    height: 200,
    borderColor: 'red',
    borderWidth: 1
  }
})
