import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import DeviceDimensions from '../../../utils/DeviceDimensions';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

const SearchBox = ({placeholder, value, onChangeText}) => (
  <SeachBox
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
  />
);

const SeachBox = styled(TextInput)`
  width: ${deviceWidth * 0.9}px;
  height: ${deviceWidth * 0.12}px;
  border-radius: ${deviceWidth * 0.02}px ${deviceWidth * 0}px
    ${deviceWidth * 0}px ${deviceWidth * 0.02}px;
  border-radius: ${deviceWidth * 0.02}px;
  border: #ccc;
  padding-horizontal: ${deviceWidth * 0.03}px;
`;

export default SearchBox;
