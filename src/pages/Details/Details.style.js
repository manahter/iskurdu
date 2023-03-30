import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  page: opa => ({
    flex: 1,
    backgroundColor: opa.set5,
  }),
  headContainer: opa => ({
    minHeight: Dimensions.get('window').height * 0.25,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: opa.set0,
    paddingHorizontal: 20,
    paddingBottom: 20,
  }),
  title: opa => ({
    paddingVertical: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: opa.set9,
    fontSize: 24,
  }),
  backIcon: {
    position: 'absolute',
    zIndex: 1,
    left: 10,
    top: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  favoriteIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  contentScroll: {
    padding: 10,
  },
  bookmark: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
});
