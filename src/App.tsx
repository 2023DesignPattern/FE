import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {Provider} from 'react-redux'; // import Provider
import store from './app/store'; // import your store
import ChartScreen from './screen/ChartScreenFactors/ChartScreen';
import MainScreen from './screen/MainScreenFactors/MainScreen';
import SearchScreen from './screen/SearchScreenFactors/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="메인화면">
            <Stack.Screen name="메인화면" component={MainScreen} />
            <Stack.Screen name="차트화면" component={ChartScreen} />
            <Stack.Screen name="검색화면" component={SearchScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
