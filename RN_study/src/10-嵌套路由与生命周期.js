import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import 'react-native-gesture-handler';
import Home from './views/home'
import Details from './views/details'
import Setting from "./views/setting";
import Profile from "./views/profile";
export default function App() {
  // 创建导航器
  const HomeStack = createNativeStackNavigator()
  const SettingStack = createNativeStackNavigator()

  // 创建一个标签页导航
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {

          let iconname = null;

          if (route.name === "First") {
            iconname = focused ? "ios-information-circle" : "ios-information-circle-outline"
          } else if (route.name === "Second") {
            iconname = focused ? "ios-mail" : "ios-mail-unread"
          }

          return <Ionicons name={iconname} size={size} color={color} />;
        }
      })}>
        {/* 第一个标签页 */}
        <Tab.Screen name='First' options={{
          tabBarBadge: 3
        }}>
          {/* 里面嵌套一个栈导航器 */}
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name='home' component={Home} />
              <HomeStack.Screen name='details' component={Details} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        {/* 第二个标签页 */}
        <Tab.Screen name='Second'>
          {/* 里面嵌套一个栈导航器 */}
          {() => (
            <SettingStack.Navigator>
              <SettingStack.Screen name='setting' component={Setting} />
              <SettingStack.Screen name='profile' component={Profile} />
            </SettingStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}