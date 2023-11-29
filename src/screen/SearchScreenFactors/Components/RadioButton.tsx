import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {setSearchType} from '../../../features/search/searchSlice';
import DeviceDimensions from '../../../utils/DeviceDimensions';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

const RadioButton = ({label, value, selectedValue}) => {
  const dispatch = useDispatch();

  return (
    <RadioButtonWrapper
      onPress={() => dispatch(setSearchType(value))}
      selected={selectedValue === value}>
      <RadioButtonText selected={selectedValue === value}>
        {label}
      </RadioButtonText>
    </RadioButtonWrapper>
  );
};

const RadioButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.selected ? '#FFB6C1' : 'transparent')};
  padding-vertical: ${deviceWidth * 0.03}px;
  padding-horizontal: ${deviceWidth * 0.02}px;
  border-radius: ${deviceWidth * 0.02}px;
  border: ${props => (props.selected ? '#FFB6C1' : '#FFB6C1')};
  margin-right: ${deviceWidth * 0.02}px;
`;
const RadioButtonText = styled.Text`
  font-size: ${deviceWidth * 0.04}px;
  font-weight: ${props => (props.selected ? 800 : 500)};
  color: ${props => (props.selected ? 'white' : 'black')};
`;

export default RadioButton;
