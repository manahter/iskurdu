import {StyleSheet} from 'react-native';

const container = {
  margin: 5,
  padding: 10,
  borderWidth: 0.8,
  borderRadius: 30,
  alignItems: 'center',
  flexDirection: 'row',
};

const text = {
  fontWeight: '600',
  fontSize: 14,
};

export default StyleSheet.create({
  active: {
    container: (opa, opaColor) => ({
      ...container,
      borderColor: opaColor.set9,
      backgroundColor: opaColor.set2,
    }),
    text: (opa, opaColor) => ({
      ...text,
      color: opaColor.set9,
    }),
  },
  passive: {
    container: (opa, opaColor) => ({
      ...container,
      borderColor: opa.set6,
    }),
    text: (opa, opaColor) => ({
      ...text,
      color: opa.set6,
    }),
  },
  icon: {
    paddingRight: 5,
  },
  count: opa => ({
    borderColor: opa.set6,
    paddingHorizontal: 5,
    textAlign: 'center',
    borderWidth: 0.8,
    borderRadius: 10,
    color: opa.set7,
    marginLeft: 5,
    ...text,
  }),
});
