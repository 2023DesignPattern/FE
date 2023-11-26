import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import ChartScreen from './src/screen/ChartScreen';
import MainScreen from './src/screen/MainScreen';
import SearchScreen from './src/screen/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  //const isDarkMode = useColorScheme() === 'dark';
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="메인화면">
          <Stack.Screen name="메인화면" component={MainScreen} />
          <Stack.Screen name="차트화면" component={ChartScreen} />
          <Stack.Screen name="검색화면" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
