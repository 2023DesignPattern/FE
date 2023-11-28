import {Dimensions} from 'react-native';

class DeviceDimensions {
  private static instance: DeviceDimensions | null = null;
  private width: number;

  private constructor() {
    this.width = Dimensions.get('window').width;
    Dimensions.addEventListener('change', this.updateWidth);
  }

  static getInstance(): DeviceDimensions {
    if (DeviceDimensions.instance === null) {
      DeviceDimensions.instance = new DeviceDimensions();
    }
    return DeviceDimensions.instance;
  }

  updateWidth = ({window: {width}}: {window: {width: number}}) => {
    this.width = width;
  };

  getWidth(): number {
    return this.width;
  }
}

export default DeviceDimensions;
