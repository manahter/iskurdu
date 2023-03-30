import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  lottie: {
    // marginVertical: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
});
