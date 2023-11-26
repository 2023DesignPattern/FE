import {HStack} from 'native-base';
import React from 'react';
import {Dimensions, Platform} from 'react-native';
import styled from 'styled-components/native';

export const deviceWidth = Dimensions.get('window').width;

export default function MainScreen({navigation}: any) {
  const goChart = () => navigation.navigate('차트화면');
  const goSearch = () => navigation.navigate('검색화면');
  const buttons = [
    {title: '차트보기', onPress: goChart},
    {title: '검색하기', onPress: goSearch},
  ];
  const musics = [
    {
      path: require('../../public/헤어지자말해요.png'),
      rank: 1,
      title: '헤어지자 말해요',
      singer: '박재정',
    },
    {
      path: require('../../public/후라이의꿈.png'),
      rank: 2,
      title: '후라이의 꿈',
      singer: '악동뮤지션',
    },
  ];
  return (
    <MainContainer>
      <AlbumImageContainer source={require('../../public/tj_ad.png')} />
      <ChartContainer>
        <ChartText>인기차트</ChartText>
        <HStack>
          {musics.map(item => (
            <MusicChartContainer key={item.title}>
              <RankText>{item.rank}위</RankText>
              <MusicChart source={item.path} />
              <TitleText>{item.title}</TitleText>
              <SingerText>{item.singer}</SingerText>
            </MusicChartContainer>
          ))}
        </HStack>
      </ChartContainer>
      <ButtonContainer>
        {buttons.map(item => (
          <Button onPress={item.onPress}>
            <ButtonText>{item.title}</ButtonText>
          </Button>
        ))}
      </ButtonContainer>
    </MainContainer>
  );
}

export const MainContainer = styled.View`
  align-items: center;
  background-color: white;
  flex: 1;
`;
const AlbumImageContainer = styled.ImageBackground`
  width: ${deviceWidth}px;
  aspect-ratio: 2;
  margin-bottom: ${deviceWidth * 0.05}px;
`;
const ChartContainer = styled.View`
  padding-horizontal: ${deviceWidth * 0.05}px;
  width: ${deviceWidth}px;
`;
const ChartText = styled.Text`
  font-size: ${deviceWidth * 0.05}px;
  font-weight: 600;
  margin-bottom: ${deviceWidth * 0.03}px;
`;
const MusicChartContainer = styled.View`
  width: ${deviceWidth * 0.4}px;
  align-items: center;
  aspect-ratio: 1;
  margin-right: ${deviceWidth * 0.05}px;
  margin-bottom: ${deviceWidth * 0.2}px;
`;
const MusicChart = styled.Image`
  width: 100%;
  height: 100%;
`;
const RankText = styled.Text`
  font-size: ${deviceWidth * 0.05}px;
  font-weight: 600;
  margin-bottom: ${deviceWidth * 0.01}px;
`;
const TitleText = styled.Text`
  font-size: ${deviceWidth * 0.04}px;
  font-weight: 500;
`;
const SingerText = styled.Text`
  font-size: ${deviceWidth * 0.04}px;
  font-weight: 500;
  color: grey;
`;

const ButtonContainer = styled.View`
  width: ${deviceWidth * 0.9}px;
  flex-direction: row;
  justify-content: space-around;
`;
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
