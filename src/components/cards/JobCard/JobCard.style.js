import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: (opa, passive) => ({
    opacity: passive ? 0.2 : 1,
    borderBottomWidth: 0.5,
    borderColor: opa.set5,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  }),
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  title: opa => ({
    fontWeight: 'bold',
    color: opa.set9,
    fontSize: 20,
    flex: 1,
  }),
  detailContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footer: {
    alignItems: 'flex-end',
  },
});
