import {StyleSheet} from 'react-native';

import {buttonGeneric} from '../../../styles/buttons';

export default StyleSheet.create({
  button: {
    ...buttonGeneric,
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
