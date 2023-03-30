import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: opa => ({
    margin: 10,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: opa.set5,
  }),
  input: opa => ({
    fontWeight: 'bold',
    color: opa.set9,
    fontSize: 16,
    padding: 0,
    margin: 0,
    flex: 1,
  }),
  icon: {
    marginHorizontal: 10,
  },
});
