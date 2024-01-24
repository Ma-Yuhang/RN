import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import store from './store'
import { Provider } from "react-redux";
// 引入其他屏幕
import Home from './views/Home'
import History from './views/History'
import Language from './views/Language'

// 引入静态资源
import HomeIcon from './assets/icon1.png'
import SelectHomeIcon from './assets/icon1Sel.png'
import HistoryIcon from './assets/icon2.png'
import SelectHistoryIcon from './assets/icon2Sel.png'
import { Image } from "react-native";

// 创建标签页导航
const Tab = createBottomTabNavigator()
const topTab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          // 图标
          tabBarIcon: ({ focused }) => {
            let icon
            if (route.name === '首页') {
              icon = focused ? SelectHomeIcon : HomeIcon
            } else {
              icon = focused ? SelectHistoryIcon : HistoryIcon
            }
            return <Image style={{ width: 30, height: 30 }} source={icon} />
          },
          // 底部选中时的文字颜色
          tabBarActiveTintColor: "#1c1b21",
          tabBarInActiveTintColor: "#bfbfbf",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 700
          },
          // 头部样式
          headerStyle: {
            backgroundColor: '#4b3c96',
            height: 50
          },
          headerTintColor: '#fff'
        })}>
          <Tab.Screen name="首页">
            {() => (
              <topTab.Navigator>
                <topTab.Screen name="翻译" component={Home}></topTab.Screen>
                <topTab.Screen name="语言" component={Language}></topTab.Screen>
              </topTab.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="历史记录" component={History}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}