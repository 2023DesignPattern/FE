import {HStack} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import DeviceDimensions from '../../utils/DeviceDimensions';
import AdImage from './Components/AdImage';
import MusicChart from './Components/MusicChart';
import NavigationButton from './Components/NavigationButton';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

export default function MainScreen({navigation}: any) {
  const goChart = () => navigation.navigate('차트화면');
  const goSearch = () => navigation.navigate('검색화면');

  const buttons = [
    {title: '차트보기', onPress: goChart},
    {title: '검색하기', onPress: goSearch},
  ];
  const musics = [
    {
      path: require('../../../public/10001.png'),
      rank: 1,
      title: 'Perfect Night',
      singer: '르세라핌',
    },
    {
      path: require('../../../public/10002.png'),
      rank: 2,
      title: 'Drama',
      singer: 'aespa',
    },
  ];
  return (
    <MainContainer>
      <AdImage source={require('../../../public/tj_ad.png')} />
      <ChartContainer>
        <ChartText>인기차트</ChartText>
        <HStack>
          {musics.map(item => (
            <MusicChart key={item.rank} music={item} />
          ))}
        </HStack>
      </ChartContainer>
      <ButtonContainer>
        {buttons.map(item => (
          <NavigationButton key={item.title} button={item} />
        ))}
      </ButtonContainer>
    </MainContainer>
  );
}

export const MainContainer = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;
const ChartContainer = styled.View`
  padding-horizontal: ${deviceWidth * 0.05}px;
  width: ${deviceWidth}px;
  margin-bottom: ${deviceWidth * 0.1}px;
`;
const ChartText = styled.Text`
  font-size: ${deviceWidth * 0.05}px;
  font-weight: 600;
  margin-bottom: ${deviceWidth * 0.03}px;
`;

const ButtonContainer = styled.View`
  width: ${deviceWidth * 0.9}px;
  flex-direction: row;
  align-self: center;
  justify-content: space-around;
`;
