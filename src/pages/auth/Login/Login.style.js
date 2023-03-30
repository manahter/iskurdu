import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000',
    margin: 20,
  },
  card: opa => ({
    backgroundColor: opa.set5,
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 10,
  }),
  page: {
    flex: 1,
    backgroundColor: '#ffab40',
  },
  register: opa => ({
    color: opa.set9,
    margin: 20,
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
  }),
});
