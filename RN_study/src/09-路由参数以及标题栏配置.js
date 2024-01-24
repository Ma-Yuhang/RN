import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './views/home'
import Details from './views/details'
import { Button } from 'react-native'
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name='home'
          component={Home}
          // options={{
          //   title: '首页'
          // }}
          options={{
            headerTitle: () => {
              return (
                <Button title='首页' />
              )
            }
          }}
        />
        <Stack.Screen
          name='details'
          component={Details}
          // options={{
          //   // title: '详情页'
          // }}
          options={({ route }) => {
            return {
              title: route.params.title
            }
          }}
          initialParams={{ msg: '哈哈' }} // 参数默认值
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}