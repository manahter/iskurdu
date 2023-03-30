import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
    padding: 10,
  },
  text: opa => ({
    color: opa.set8,
    fontWeight: '100',
  }),
});
