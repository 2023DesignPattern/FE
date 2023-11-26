import React from 'react';
import {Dimensions, Platform, SafeAreaView} from 'react-native';

import styled from 'styled-components/native';

export const deviceWidth = Dimensions.get('window').width;

function App(): JSX.Element {
  //const isDarkMode = useColorScheme() === 'dark';

  return (
    <MainContainer>
      <SafeAreaView>
        <StartButton>
          <StartButtonText>시작하기</StartButtonText>
        </StartButton>
      </SafeAreaView>
    </MainContainer>
  );
}

const MainContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const StartButton = styled.TouchableOpacity`
  width: ${deviceWidth * 0.2}px;
  height: ${deviceWidth * 0.1}px;
  padding-vertical: ${deviceWidth * 0.02}px;
  padding-horizontal: ${deviceWidth * 0.02}px;
  align-items: center;
  justify-content: center;
  border-radius: ${deviceWidth * 0.04}px;
  background-color: white;
  ${Platform.OS === 'android'
    ? 'elevation: 4;'
    : 'box-shadow: 0px 2px 4px #ccc;'}
`;
const StartButtonText = styled.Text`
  font-size: ${deviceWidth * 0.1}px;
  font-weight: 400;
`;

export default App;
