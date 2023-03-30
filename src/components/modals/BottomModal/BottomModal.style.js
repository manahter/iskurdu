import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  header: (gri, isLine) => ({
    backgroundColor: gri.set1,
    width: '100%',
    padding: 15,
    paddingBottom: 0,
    borderBottomWidth: isLine ? 0.6 : 0,
    borderBottomColor: gri.set3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }),
  touchLine: opa => ({
    backgroundColor: opa.set8,
    height: 5,
    width: '13%',
    borderRadius: 3,
    alignSelf: 'center',
  }),
  title: opa => ({
    color: opa.set8,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15,
    textAlign: 'center',
  }),
  container: gri => ({
    width: '100%',
    padding: 5,
    paddingBottom: 10,
    backgroundColor: gri.set1,
    maxHeight: '80%',
  }),
});
