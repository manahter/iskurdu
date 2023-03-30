import {StyleSheet} from 'react-native';

import {buttonGeneric} from '../../../styles/buttons';

export default StyleSheet.create({
  container: opa => ({
    ...buttonGeneric,
    borderColor: opa.set8,
  }),
});
