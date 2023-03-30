import {useTheme} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import styles from './Error.style';
import React from 'react';

const Error = () => {
  const {opa, opaColor, gri} = useTheme();

  return (
    <Lottie
      loop
      autoPlay
      style={styles.lottie}
      source={require('../../..//assets/lotties/error.json')}
      colorFilters={[
        {
          keypath: 'piso',
          color: opa.set5,
        },
        {
          keypath: 'blobs',
          color: opa.set2,
        },
        {
          keypath: 'direcciones.Grupo 17',
          color: opaColor.set9,
        },
        {
          keypath: 'direcciones.Grupo 18',
          color: opaColor.set9,
        },
        {
          keypath: 'direcciones.Grupo 19',
          color: opaColor.set9,
        },
        {
          keypath: 'personaje 2.Grupo 11',
          color: '#222',
        },
        {
          keypath: 'personaje 2.Grupo 12',
          color: gri.set5,
        },
        {
          keypath: 'personaje 2.Grupo 13',
          color: '#222',
        },
      ]}
    />
  );
};

export default Error;
