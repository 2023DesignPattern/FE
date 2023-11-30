import React, {useEffect} from 'react';
import {FlatList, Platform} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {
  fetchMusicBySearchType,
  setSearchInput,
  setSearchType,
} from '../../features/search/searchSlice';
import DeviceDimensions from '../../utils/DeviceDimensions';
import {MainContainer} from '../MainScreenFactors/MainScreen';
import RadioButton from './Components/RadioButton';
import SearchBox from './Components/SearchBox';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

const SearchScreen = () => {
  const dispatch = useDispatch();
  const searchType = useSelector(state => state.search.searchType);
  const searchInput = useSelector(state => state.search.searchInput);
  const searchResult = useSelector(state => state.search.searchResult);
  const images = {
    10001: require('../../../public/10001.png'),
    10002: require('../../../public/10002.png'),
    10003: require('../../../public/10003.png'),
    10004: require('../../../public/10004.png'),
    10005: require('../../../public/10005.png'),
    10006: require('../../../public/10006.png'),
    10007: require('../../../public/10007.png'),
    10008: require('../../../public/10008.png'),
    10009: require('../../../public/10009.png'),
    10010: require('../../../public/10010.png'),
    10011: require('../../../public/10011.png'),
    10012: require('../../../public/10012.png'),
    10013: require('../../../public/10013.png'),
    10014: require('../../../public/10014.png'),
    10015: require('../../../public/10015.png'),
    10016: require('../../../public/10016.png'),
    10017: require('../../../public/10017.png'),
    10018: require('../../../public/10018.png'),
    10019: require('../../../public/10019.png'),
    10020: require('../../../public/10020.png'),
  };

  const handleSearchInputChange = e => {
    dispatch(setSearchInput(e));
  };

  const handleSearch = () => {
    dispatch(fetchMusicBySearchType({searchType, searchInput}));
  };

  useEffect(() => {
    dispatch(fetchMusicBySearchType({searchType: searchType, searchInput: ''}));
  }, [searchType, dispatch]);

  return (
    <MainContainer>
      <RadioButtonContainer>
        <RadioButton
          label="노래 제목"
          value="title"
          selectedValue={searchType}
          onPress={() => {
            dispatch(setSearchType('title'));
            dispatch(
              fetchMusicBySearchType({searchType: 'title', searchInput: ''}),
            );
          }}
        />
        <RadioButton
          label="노래 번호"
          value="id"
          selectedValue={searchType}
          onPress={() => {
            dispatch(setSearchType('id'));
            dispatch(
              fetchMusicBySearchType({searchType: 'id', searchInput: ''}),
            );
          }}
        />
      </RadioButtonContainer>
      <SearchContainer>
        <SearchBox
          placeholder={
            searchType === 'title'
              ? '노래 제목을 입력하세요'
              : '노래 번호를 입력하세요'
          }
          value={searchInput}
          onChangeText={handleSearchInputChange}
        />
        <SearchButton onPress={handleSearch}>
          <SearchButtonText>검색</SearchButtonText>
        </SearchButton>
      </SearchContainer>
      <FlatList
        data={searchResult}
        renderItem={({item}) => (
          <SearchResultContainer>
            <SearchedMusicImage source={images[item.id]}></SearchedMusicImage>
            <SerachedMusicInfoContainer
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#87CEEB', '#98FF98']}>
              <SearchedMusicInfoTypeContainer>
                <SearchedMusicInfoText>곡 명</SearchedMusicInfoText>
                <SearchedMusicInfoText>가수 명</SearchedMusicInfoText>
                <SearchedMusicInfoText>조회 수</SearchedMusicInfoText>
                <SearchedMusicInfoText>노래 번호</SearchedMusicInfoText>
                <SearchedMusicInfoText>장르</SearchedMusicInfoText>
              </SearchedMusicInfoTypeContainer>
              <SearchedMusicDetailInfoContainer>
                <SearchedMusicDetailInfoText>
                  {item.title}
                </SearchedMusicDetailInfoText>
                <SearchedMusicDetailInfoText>
                  {item.singer}
                </SearchedMusicDetailInfoText>
                <SearchedMusicDetailInfoText>
                  {item.hits}
                </SearchedMusicDetailInfoText>
                <SearchedMusicDetailInfoText>
                  {item.id}
                </SearchedMusicDetailInfoText>
                <SearchedMusicDetailInfoText>
                  {item.type}
                </SearchedMusicDetailInfoText>
              </SearchedMusicDetailInfoContainer>
            </SerachedMusicInfoContainer>
          </SearchResultContainer>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </MainContainer>
  );
};

const RadioButtonContainer = styled.View`
  flex-direction: row;
  padding-vertical: ${deviceWidth * 0.05}px;
  padding-horizontal: ${deviceWidth * 0.05}px;
  margin-bottom: ${deviceWidth * 0.03}px;
`;
const SearchContainer = styled.View`
  width: ${deviceWidth * 0.9}px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-bottom: ${deviceWidth * 0.1}px;
  position: relative;
`;
const SearchButton = styled.TouchableOpacity`
  position: absolute;
  right: ${deviceWidth * 0.03}px;
  height: ${deviceWidth * 0.12}px;
  align-items: center;
  justify-content: center;
  padding: ${deviceWidth * 0.03}px;
  border-radius: ${deviceWidth * 0.03}px;
`;
const SearchButtonText = styled.Text`
  color: #ffb6c1;
  font-size: ${deviceWidth * 0.04}px;
  text-align: center;
`;
const SearchResultContainer = styled.View`
  width: ${deviceWidth * 0.9}px;
  height: ${deviceWidth * 1.32}px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;
const SearchedMusicImage = styled.Image`
  width: ${deviceWidth * 0.5}px;
  height: ${deviceWidth * 0.5}px;
  border-radius: ${deviceWidth * 0.04}px;
  background-color: white;
  ${Platform.OS === 'android'
    ? 'elevation: 4;'
    : 'box-shadow: 0px 2px 4px #ccc;'}
  margin-bottom: ${deviceWidth * 0.1}px;
`;
const SerachedMusicInfoContainer = styled(LinearGradient)`
  flex-direction: row;
  width: ${deviceWidth * 0.9}px;
  height: ${deviceWidth * 0.4}px;
  justify-content: center;
  border-radius: ${deviceWidth * 0.04}px;
  background-color: white;
  ${Platform.OS === 'android'
    ? 'elevation: 4;'
    : 'box-shadow: 0px 2px 4px #ccc;'}
`;
const SearchedMusicInfoTypeContainer = styled.View`
  width: ${deviceWidth * 0.3}px;
  justify-content: center;
`;
const SearchedMusicInfoText = styled.Text`
  height: ${deviceWidth * 0.06}px;
  font-size: ${deviceWidth * 0.04}px;
  font-weight: 600;
  color: white;
`;
const SearchedMusicDetailInfoContainer = styled.View`
  width: ${deviceWidth * 0.3}px;
  justify-content: center;
`;
const SearchedMusicDetailInfoText = styled.Text`
  height: ${deviceWidth * 0.06}px;
  font-size: ${deviceWidth * 0.04}px;
  font-weight: 600;
  color: white;
`;

export default SearchScreen;
