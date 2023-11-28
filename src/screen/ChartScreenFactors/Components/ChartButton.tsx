import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import DeviceDimensions from '../../../utils/DeviceDimensions';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

interface ChartButtonProps {
  active: boolean;
  onPress: () => void;
  title: string;
}

const ChartButton = ({active, onPress, title}: ChartButtonProps) => {
  return (
    <ChartTypeButton active={active} onPress={onPress}>
      <ChartTypeButtonText active={active}>{title}</ChartTypeButtonText>
    </ChartTypeButton>
  );
};

const ChartTypeButton = styled.TouchableOpacity`
  width: ${deviceWidth * 0.2}px;
  height: ${deviceWidth * 0.1}px;
  padding-vertical: ${deviceWidth * 0.02}px;
  padding-horizontal: ${deviceWidth * 0.02}px;
  align-items: center;
  justify-content: center;
  border-radius: ${deviceWidth * 0.04}px;
  background-color: ${props => (props.active ? '#2698fb' : 'white')};
  ${Platform.OS === 'android'
    ? 'elevation: 4;'
    : 'box-shadow: 0px 2px 4px #ccc;'}
  margin-right: ${deviceWidth * 0.05}px;
`;

const ChartTypeButtonText = styled.Text`
  font-size: ${deviceWidth * 0.036}px;
  color: ${props => (props.active ? 'white' : 'black')};
  font-weight: 600;
`;

export default ChartButton;
