import React from 'react';
import styled from 'styled-components/native';
import DeviceDimensions from '../../../utils/DeviceDimensions';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

const MusicChart = ({music}) => (
  <MusicChartContainer>
    <RankText>{music.rank}위</RankText>
    <MusicChartImage source={music.path} />
    <TitleText>{music.title}</TitleText>
    <SingerText>{music.singer}</SingerText>
  </MusicChartContainer>
);

export default MusicChart;

const MusicChartContainer = styled.View`
  width: ${deviceWidth * 0.4}px;
  align-items: center;
  aspect-ratio: 1;
  margin-right: ${deviceWidth * 0.05}px;
  margin-bottom: ${deviceWidth * 0.2}px;
`;
const RankText = styled.Text`
  font-size: ${deviceWidth * 0.05}px;
  font-weight: 600;
  margin-bottom: ${deviceWidth * 0.01}px;
`;
const MusicChartImage = styled.Image`
  width: 100%;
  height: 100%;
  margin-bottom: ${deviceWidth * 0.02}px;
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
