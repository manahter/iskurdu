import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: opa => ({
    backgroundColor: opa.set1,
    borderRadius: 10,
    margin: 10,
  }),
  title: opa => ({
    backgroundColor: opa.set0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: opa.set9,
    fontSize: 18,
    padding: 7,
  }),
  time: opa => ({
    color: opa.set5,
    textAlign: 'right',
    padding: 10,
    paddingBottom: 0,
  }),
  text: opa => ({
    color: opa.set7,
    padding: 10,
    paddingTop: 0,
  }),
});
