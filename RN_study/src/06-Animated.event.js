import React, { useRef } from 'react';
import { StyleSheet, Image, Dimensions, ScrollView, View, Animated } from 'react-native';

const { width } = Dimensions.get("window");

export default function App() {

  const xOffset = useRef(new Animated.Value(1)).current

  function onScrollHandle(event) {
    return Animated.event([{
      nativeEvent: { contentOffset: { x: xOffset } }
    }], { useNativeDriver: false })
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.imageStyle}
        horizontal={true}
        // onScroll={Animated.event([{
        //   nativeEvent: { contentOffset: { x: xOffset } }
        // }], { useNativeDriver: false })}
        onScroll={onScrollHandle()}
      >
        <Animated.Image
          style={[styles.imageStyle, {
            opacity: xOffset.interpolate({
              inputRange: [0, 392],
              outputRange: [1, 0]
            })
          }]}
          source={require('../assets/logo.png')}
          resizeMode="cover"
        />
        <Image
          style={styles.imageStyle}
          source={require('../assets/adaptive-icon.png')}
          resizeMode="cover"
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    width: width,
    height: 200
  }
})