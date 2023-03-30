import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  picker: opa => ({
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    borderColor: opa.set7,
    borderRadius: 25,
    borderWidth: 1,
  }),
  text: opa => ({
    fontWeight: 'bold',
    color: opa.set9,
    fontSize: 12,
  }),
  containerProps: {
    margin: 5,
  },
});
