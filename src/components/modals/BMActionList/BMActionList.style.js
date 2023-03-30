import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: opa => ({
    color: opa.set8,
    fontWeight: '500',
    fontSize: 16,
    padding: 5,
    paddingLeft: 15,
    flex: 1,
  }),
  flatlist: {
    flexGrow: 0,
  },
});
