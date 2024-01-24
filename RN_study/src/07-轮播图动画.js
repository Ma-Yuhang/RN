// import A from './src/04-电影小案例'
// import A from './src/02-照片分享案例'
import React, { useState, useRef } from 'react';
import { StyleSheet, Image, Dimensions, ScrollView, View, Animated, ImageBackground, Text } from 'react-native';

// 获取屏幕宽度
const windowWidth = Dimensions.get("window").width;
// 图片数组
const imageArr = Array(6).fill('./assets/icon.png')
export default function App() {

  // 当前滚动到了第几个
  const scrollX = useRef(new Animated.Value(0)).current
  // function onScrollHandle(event) {
  //   Animated.event([{
  //     nativeEvent: { contentOffset: { x: xOffset } }
  //   }], { useNativeDriver: false })
  // }
  return (
    <View style={styles.container}>
      {/* 图片部分 */}
      <View style={styles.scrollContainer}>
        <ScrollView
          style={styles.imageStyle}
          horizontal={true} // 设置水平方向滚动
          showsHorizontalScrollIndicator={false} // 不显示水平滚动条
          pagingEnabled={true} // 图片自动回滚
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: {
                x: scrollX
              }
            }
          }], { useNativeDriver: false })}
        >
          {
            imageArr.map((img, index) => {
              return (
                <View
                  style={{ width: windowWidth, height: 250 }}
                  key={index}
                >
                  <ImageBackground source={require('../assets/icon.png')} style={styles.card}>
                    <View style={styles.textContainer}>
                      <Text style={styles.infoText}>
                        {"Image - " + (index + 1)}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
      {/* 下面小圆点部分 */}
      <View style={styles.indicatorContainer}>
        {imageArr.map((image, imageIndex) => {
          // 我们需要根据 scrollX 的变化动态的修改小圆点的 width

          // 小圆点宽度的映射计算关系如下：
          // 刚开始的时候，scrollX = 0
          // 对于不同的小圆点，根据 scrollX 的映射关系对应的宽度是不一样的

          // 第一个小圆点 0
          // inputRange[-392, 0, 392]
          // outputRange[8, 16, 8]
          // 第二个小圆点 1
          // inputRange[0, 392, 392*2]
          // outputRange[8, 16, 8]

          // 第三个小圆点2
          // inputRange[392, 392*2, 392*3]
          // outputRange[8,16,8]
          return <Animated.View key={imageIndex} style={[styles.normalDot, {
            width: scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp" // 不进行增量计算
            })
          }]} />;
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});