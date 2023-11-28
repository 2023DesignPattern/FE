import React, {useEffect, useState} from 'react';
import {Platform, Text} from 'react-native';
import styled from 'styled-components/native';
import {MainContainer, deviceWidth} from '../MainScreen';

export default function ChartScreen() {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPopularChart, setIsPopularChart] = useState(true);
  const [isNewChart, setIsNewChart] = useState(false);
  type DataType = {
    id: number;
    title: string;
    singer: string;
    views: string;
    type: string;
  };

  useEffect(() => {
    if (isPopularChart) {
      fetch('http://192.168.45.180:8080/api/music')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    } else if (isNewChart) {
      fetch('http://192.168.45.180:8080/api/music')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }
    setIsLoaded(true);
  }, [isPopularChart, isNewChart]);

  return (
    <MainContainer>
      <ChartTypeContainer>
        <PopularChartButton
          isPressed={isPopularChart}
          onPress={() => {
            console.log('인기 차트 버튼을 눌렸습니다', JSON.stringify(data));
            setIsPopularChart(true);
            setIsNewChart(false);
          }}>
          <PopularChartButtonText isPressed={isPopularChart}>
            인기 차트
          </PopularChartButtonText>
        </PopularChartButton>
        <NewChartButton
          isPressed={isNewChart}
          onPress={() => {
            console.log('최신 곡 버튼을 눌렸습니다', JSON.stringify(data));
            setIsNewChart(true);
            setIsPopularChart(false);
          }}>
          <NewChartButtonText isPressed={isNewChart}>
            최신 곡
          </NewChartButtonText>
        </NewChartButton>
      </ChartTypeContainer>
      <ChartTableContainer contentContainerStyle={{alignItems: 'center'}}>
        {isLoaded ? (
          data.map(item => (
            <ChartContainer key={item.id}>
              <RankNTitleNSingerContainer>
                <RankText>{item.id}</RankText>
                <TitleNSingerContainer>
                  <TitleText>{item.title}</TitleText>
                  <SingerNTypeContainer>
                    <SingerText>{item.singer}</SingerText>
                    <TypeContainer>
                      <TypeText>{item.type}</TypeText>
                    </TypeContainer>
                  </SingerNTypeContainer>
                </TitleNSingerContainer>
              </RankNTitleNSingerContainer>
            </ChartContainer>
          ))
        ) : (
          <Text>로딩 중...</Text>
        )}
      </ChartTableContainer>
    </MainContainer>
  );
}

const ChartTypeContainer = styled.View`
  flex-direction: row;
  padding-vertical: ${deviceWidth * 0.04}px;
  padding-horizontal: ${deviceWidth * 0.04}px;
  margin-bottom: ${deviceWidth * 0.05}px;
`;
const PopularChartButton = styled.TouchableOpacity`
  width: ${deviceWidth * 0.2}px;
  height: ${deviceWidth * 0.1}px;
  padding-vertical: ${deviceWidth * 0.02}px;
  padding-horizontal: ${deviceWidth * 0.02}px;
  align-items: center;
  justify-content: center;
  border-radius: ${deviceWidth * 0.04}px;
  background-color: ${props => (props.isPressed ? '#2698fb' : 'white')};
  ${Platform.OS === 'android'
    ? 'elevation: 4;'
    : 'box-shadow: 0px 2px 4px #ccc;'}
  margin-right: ${deviceWidth * 0.05}px;
`;
const PopularChartButtonText = styled.Text`
  font-size: ${deviceWidth * 0.036}px;
  color: ${props => (props.isPressed ? 'white' : 'black')};
  font-weight: 600;
`;
const NewChartButton = styled.TouchableOpacity`
  width: ${deviceWidth * 0.2}px;
  height: ${deviceWidth * 0.1}px;
  padding-vertical: ${deviceWidth * 0.02}px;
  padding-horizontal: ${deviceWidth * 0.02}px;
  align-items: center;
  justify-content: center;
  border-radius: ${deviceWidth * 0.04}px;
  background-color: ${props => (props.isPressed ? '#2698fb' : 'white')};
  ${Platform.OS === 'android'
    ? 'elevation: 4;'
    : 'box-shadow: 0px 2px 4px #ccc;'}
`;
const NewChartButtonText = styled.Text`
  font-size: ${deviceWidth * 0.036}px;
  color: ${props => (props.isPressed ? 'white' : 'black')};
  font-weight: 600;
`;
const ChartTableContainer = styled.ScrollView`
  width: ${deviceWidth}px;
  padding-vertical: ${deviceWidth * 0.05}px;
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
  width: ${deviceWidth * 0.1}px;
  font-size: ${deviceWidth * 0.07}px;
  font-weight: 700;
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
  font-size: ${deviceWidth * 0.05}px;
  font-weight: 700;
  margin-bottom: ${deviceWidth * 0.01}px;
`;
const SingerNTypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SingerText = styled.Text`
  width: ${deviceWidth * 0.45}px;
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
