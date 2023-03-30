import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  lottie: {
    marginVertical: (Dimensions.get('window').width / 3) * 2,
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
});
