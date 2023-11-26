import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {deviceWidth} from './MainScreen';

export default function SearchScreen({navigation}: any) {
  return (
    <MainContainer>
      <StartButton onPress={() => console.log('검색이에용')}>
        <StartButtonText>검색화면</StartButtonText>
      </StartButton>
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
  font-size: ${deviceWidth * 0.04}px;
  font-weight: 400;
`;
