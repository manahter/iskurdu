import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  active: {
    container: (opa, opaColor) => ({
      margin: 5,
      padding: 10,
      borderWidth: 0.8,
      borderRadius: 30,
      borderColor: opaColor.set9,
      backgroundColor: opaColor.set2,
    }),
    text: (opa, opaColor) => ({
      color: opaColor.set9,
      fontWeight: '600',
      fontSize: 14,
    }),
  },
  passive: {
    container: (opa, opaColor) => ({
      margin: 5,
      padding: 10,
      borderWidth: 0.8,
      borderRadius: 30,
      borderColor: opa.set6,
    }),
    text: (opa, opaColor) => ({
      color: opa.set6,
      fontWeight: '600',
      fontSize: 14,
    }),
  },
});
