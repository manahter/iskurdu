import {StyleSheet} from 'react-native';

import {buttonGeneric} from '../../../styles/buttons';

export default StyleSheet.create({
  contOn: opa => ({
    ...buttonGeneric,
    backgroundColor: opa.set7,
    flex: 1,
  }),
  contOff: opa => ({
    ...buttonGeneric,
    borderColor: opa.set8,
    flex: 1,
  }),
  text: color => ({
    color: color,
    textAlign: 'center',
    paddingLeft: 10,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: '500',
  }),
  removeText: opa => ({
    color: opa.set9,
    fontSize: 12,
  }),
});
