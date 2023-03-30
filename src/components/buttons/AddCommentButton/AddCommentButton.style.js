import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: opa => ({
    backgroundColor: opa.set6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 40,
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
  }),
});
