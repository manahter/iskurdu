import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: opa => ({
    backgroundColor: opa.set1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    margin: 10,
  }),
  title: opa => ({
    textAlign: 'center',
    fontWeight: 'bold',
    color: opa.set9,
    fontSize: 18,
    paddingLeft: 20,
  }),
});
