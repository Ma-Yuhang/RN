import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import { useState } from "react";


export default function App() {
  const [localUri, setLocalUri] = useState('')
  // 选择照片
  async function OpenImagePickerAsync() {
    // 询问用户权限
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    // console.log(permissionResult);
    if (permissionResult.granted === false) {
      // 用户不同意
      alert("需要访问相机胶卷的权限");
      return;
    }
    // 没有进入到上面的 if，说明权限获取成功
    // 异步的打开手机的相册，让用户选择图片
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult.assets[0].uri);
    if (pickerResult.canceled) {
      // 进入此 if，说明用户没有选择任何图片
      return;
    }
    // 如果没有进入上面的 if，说明用户选择了图片
    setLocalUri(pickerResult.assets[0].uri);
  }
  // 重新选择
  function goBack() {
    setLocalUri('')
  }
  // 分享照片
  async function openShareImageAsync() {
    await Sharing.shareAsync(localUri);
  }
  return (
    <View style={styles.container}>
      {
        localUri ? (
          <>
            <Image source={{ uri: localUri }} style={styles.logo}></Image>
            <Text style={styles.instructions}>选择一张图片分享给你的朋友</Text>
            <TouchableOpacity style={styles.button} onPress={openShareImageAsync}>
              <Text style={styles.buttonText}>分享照片</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goBack}>
              <Text style={styles.buttonText}>重新选择</Text>
            </TouchableOpacity></>
        ) : (
          <>
            <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
            <Text style={styles.instructions}>选择一张图片分享给你的朋友</Text>
            <TouchableOpacity style={styles.button} onPress={OpenImagePickerAsync}>
              <Text style={styles.buttonText}>选择照片</Text>
            </TouchableOpacity>
          </>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});