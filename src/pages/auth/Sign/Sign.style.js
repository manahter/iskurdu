import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';

export default StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#000',
    margin: 20,
  },
  card: {
    backgroundColor: colors.transLight1,
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  page: {
    flex: 1,
    backgroundColor: '#ffab40',
  },
});
