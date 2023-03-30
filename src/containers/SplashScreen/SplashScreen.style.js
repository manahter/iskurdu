import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    position: 'absolute',
    height: '100%',
    zIndex: 0,
    flex: 1,
  },
});
