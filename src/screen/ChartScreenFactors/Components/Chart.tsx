import {HStack, VStack} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import DeviceDimensions from '../../../utils/DeviceDimensions';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

type DataType = {
  id: number;
  title: string;
  hits: number;
  singer: string;
  views: string;
  type: string;
};
interface ChartProps {
  data: DataType[];
}

const Chart = ({data}: ChartProps) => {
  return (
    <ChartTableContainer contentContainerStyle={{alignItems: 'center'}}>
      {data.map((item, index) => (
        <ChartContainer key={item.id}>
          <RankNTitleNSingerContainer>
            <VStack>
              <RankText>{index + 1}</RankText>
              <HitsText>{item.hits}회</HitsText>
            </VStack>
            <TitleNSingerContainer>
              <HStack>
                <TitleText>{item.title}</TitleText>
              </HStack>
              <SingerNTypeContainer>
                <SingerText>{item.singer}</SingerText>
                <TypeContainer>
                  <TypeText>{item.type}</TypeText>
                </TypeContainer>
              </SingerNTypeContainer>
            </TitleNSingerContainer>
          </RankNTitleNSingerContainer>
        </ChartContainer>
      ))}
    </ChartTableContainer>
  );
};

const ChartTableContainer = styled.ScrollView`
  width: ${deviceWidth}px;
  padding-vertical: ${deviceWidth * 0.02}px;
`;
const ChartContainer = styled.View`
  width: ${deviceWidth * 0.9}px;
  height: ${deviceWidth * 0.25}px;
  flex-direction: row;
  padding-vertical: ${deviceWidth * 0.02}px;
  padding-horizontal: ${deviceWidth * 0.1}px;
  margin-bottom: ${deviceWidth * 0.05}px;
  align-items: center;
  border-radius: ${deviceWidth * 0.07}px;
  background-color: white;
  ${Platform.OS === 'android'
    ? 'elevation: 4;'
    : 'box-shadow: 0px 2px 4px #ccc;'}
`;
const RankText = styled.Text`
  width: ${deviceWidth * 0.15}px;
  font-size: ${deviceWidth * 0.07}px;
  font-weight: 700;
  margin-bottom: ${deviceWidth * 0.02}px;
`;
const RankNTitleNSingerContainer = styled.View`
  width: ${deviceWidth * 0.5}px;
  flex-direction: row;
  align-self: center;
`;
const TitleNSingerContainer = styled.View`
  width: ${deviceWidth * 0.4}px;
  margin-top: ${deviceWidth * 0.02}px;
`;
const TitleText = styled.Text`
  width: ${deviceWidth * 0.4}px;
  font-size: ${deviceWidth * 0.045}px;
  font-weight: 700;
  margin-bottom: ${deviceWidth * 0.01}px;
`;
const HitsText = styled.Text`
  font-size: ${deviceWidth * 0.036}px;
  font-weight: 500;
  color: #b0b0b0;
`;
const SingerNTypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SingerText = styled.Text`
  width: ${deviceWidth * 0.38}px;
  font-size: ${deviceWidth * 0.04}px;
  font-weight: 700;
  color: #a0a0a0;
`;
const TypeContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: ${deviceWidth * 0.1}px;
  background-color: #b0b0b0;
`;
const TypeText = styled.Text`
  font-size: ${deviceWidth * 0.04}px;
  font-weight: 900;
  color: white;
  margin-vertical: ${deviceWidth * 0.015}px;
  margin-horizontal: ${deviceWidth * 0.04}px;
`;

export default Chart;
