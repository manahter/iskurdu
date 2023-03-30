import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: color => ({
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 3,
    borderColor: color,
    borderRadius: 30,
    borderWidth: 0.6,
    minHeight: 30,
    flex: 1,
  }),
  text: color => ({
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    color: color,
    fontSize: 12,
    padding: 5,
  }),
});
