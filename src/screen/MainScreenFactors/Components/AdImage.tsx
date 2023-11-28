import React from 'react';
import styled from 'styled-components/native';
import DeviceDimensions from '../../../utils/DeviceDimensions';
const deviceWidth = DeviceDimensions.getInstance().getWidth();

const AdImageContainer = styled.ImageBackground`
  width: ${deviceWidth}px;
  aspect-ratio: 2;
  margin-bottom: ${deviceWidth * 0.05}px;
`;

const AlbumImage = ({source}) => <AdImageContainer source={source} />;

export default AlbumImage;
