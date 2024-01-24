import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 引入相应的页面
import Home from './views/Home'

// 引入组件
import HomeBar from './components/HomeBar'

// 创建栈导航器
const stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 
          name='Home'
          component={Home}
          options={{
            header:()=><HomeBar />
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}