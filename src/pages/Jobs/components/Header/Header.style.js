import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: opa => ({
    borderBottomRightRadius: 40,
    borderBottomColor: opa.set1,
    borderBottomLeftRadius: 40,
    backgroundColor: opa.set0,
    borderBottomWidth: 2,
    padding: 5,
  }),
  topContainer: {
    flexDirection: 'row',
  },
  imageButton: {
    paddingHorizontal: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  searchBar: opa => ({
    backgroundColor: opa.set5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    flex: 1,
  }),
  text: opa => ({
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: opa.set8,
    marginLeft: 10,
    flexShrink: 1,
  }),
  options: opa => ({
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  image: {
    borderRadius: 50,
    height: 40,
    width: 40,
    flex: 1,
  },
  totalText: opa => ({
    textAlign: 'center',
    color: opa.set6,
    padding: 10,
  }),
});
