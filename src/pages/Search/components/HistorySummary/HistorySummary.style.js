import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  favBar: opa => ({
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  }),
  leftText: opa => ({
    fontWeight: 'bold',
    color: opa.set9,
    fontSize: 15,
  }),
  rightText: opa => ({
    color: opa.set8,
    fontSize: 13,
  }),
});
