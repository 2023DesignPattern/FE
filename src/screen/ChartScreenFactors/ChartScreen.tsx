import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {fetchMusic, setChartType} from '../../features/music/musicSlice';
import DeviceDimensions from '../../utils/DeviceDimensions';
import {MainContainer} from '../MainScreenFactors/MainScreen';
import Chart from './Components/Chart';
import ChartButton from './Components/ChartButton';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

export default function ChartScreen() {
  const dispatch = useDispatch();
  const {data, isLoaded, chartType} = useSelector(state => state.music);

  useEffect(() => {
    dispatch(fetchMusic(chartType)); // dispatch action using useDispatch
  }, [chartType, dispatch]);

  return (
    <MainContainer>
      <ChartTypeContainer>
        <ChartButton
          active={chartType === 'popular'}
          onPress={() => dispatch(setChartType('popular'))}
          title="인기 차트"
        />
        <ChartButton
          active={chartType === 'new'}
          onPress={() => dispatch(setChartType('new'))}
          title="최신 곡"
        />
      </ChartTypeContainer>
      {isLoaded ? <Chart data={data} /> : <ActivityIndicator />}
    </MainContainer>
  );
}

const ChartTypeContainer = styled.View`
  flex-direction: row;
  padding-vertical: ${deviceWidth * 0.04}px;
  padding-horizontal: ${deviceWidth * 0.04}px;
`;
