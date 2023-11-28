import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import DeviceDimensions from '../../../utils/DeviceDimensions';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

// 스타일 코드는 생략하였습니다.
// 여기에 NavigationButton 관련 스타일 코드를 작성하세요.

const NavigationButton = ({button}) => (
  <Button onPress={button.onPress}>
    <ButtonText>{button.title}</ButtonText>
  </Button>
);

export default NavigationButton;

const Button = styled.TouchableOpacity`
  width: ${deviceWidth * 0.36}px;
  height: ${deviceWidth * 0.36}px;
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
const ButtonText = styled.Text`
  font-size: ${deviceWidth * 0.05}px;
  font-weight: 600;
`;
