import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  info_container: opa => ({
    backgroundColor: opa.set0,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 100,
    padding: 10,
    flex: 1,
  }),
  text_container: {
    padding: 10,
    flex: 1,
    alignItems: 'flex-end',
  },
  username: opa => ({
    color: opa.set9,
    fontSize: 20,
    fontWeight: 'bold',
  }),
  usermail: opa => ({
    color: opa.set7,
    fontSize: 16,
  }),
  createdAt: opa => ({
    color: opa.set6,
    fontSize: 12,
  }),
  image: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});
