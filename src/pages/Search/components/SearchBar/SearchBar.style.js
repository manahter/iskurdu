import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerBar: opa => ({
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10,
    // backgroundColor: opa.set5,
  }),
  backIcon: {
    padding: 5,
  },
  searchInput: opa => ({
    paddingLeft: 10,
    flex: 1,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: opa.set5,
    color: opa.set9,
  }),
  button: opa => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    // backgroundColor: opa.set5,
    borderRadius: 20,
  }),
  buttonText: opa => ({
    color: opa.set9,
    fontWeight: 'bold',
    fontSize: 16,
  }),
});
