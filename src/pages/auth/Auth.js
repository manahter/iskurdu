import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';

import useSearchHistory from '../../hooks/useSearchHistory';
import SplashScreen from '../../containers/SplashScreen';
import Loading from '../../components/lotties/Loading';
import useSearchFavs from '../../hooks/useSearchFavs';
import useSavedJobs from '../../hooks/useSavedJobs';
import useAuth from '../../hooks/useAuth';
import styles from './Auth.style';

const Auth = ({navigation}) => {
  // TODO: Bildirim -> Favori aramalardan en çok tıklanan için, her akşam otomatik arama yap ve kaç ilan bulunduğunu bildirim olarak göster
  console.log('Page -> Auth');
  const [loading, setLoading] = useState(0);
  const {searchFavs} = useSearchFavs(true);
  const {signInGoogle} = useAuth();
  useSearchHistory(true);
  useSavedJobs(true);

  const dispatch = useDispatch();
  const onGoogleButtonPress = async () => {
    setLoading(1);
    if (await signInGoogle()) {
      loadSavedJobStatus();
    } else {
      setLoading(0);
    }
  };

  useEffect(() => {
    onGoogleButtonPress();
  }, []);

  useEffect(() => {
    // Giriş yapıldığında, son favori aramayı al ve onunla işkur ilanlarını çek
    if (loading === 2) {
      const selectedOptions = Object.keys(searchFavs).length
        ? searchFavs[Object.keys(searchFavs).at(-1)]
        : {};

      dispatch({type: 'selected/setOptions', payload: selectedOptions});

      // Önceki Requesti sıfırla
      dispatch({type: `request/clear`});

      // Seçilileri Request'e de geçir.
      Object.keys(selectedOptions).forEach(key => {
        dispatch({
          type: `request/${key}`,
          payload: selectedOptions[key].value,
        });
      });
      dispatch({type: 'utils/setWorksPageReload', payload: true});
      setLoading(0);
      navigation.navigate('Jobs');
    }
  }, [loading]);

  function loadSavedJobStatus() {
    firestore()
      .collection('savedJobStatus')
      .get()
      .then(querySnapshot => {
        const data = [];
        querySnapshot.forEach(docSnapshot => data.push(docSnapshot.data()));
        dispatch({type: 'savedJobStatus/load', payload: data});
        setLoading(2);
      })
      .catch(error => {
        console.log('ERROR: loadSavedJobStatus', error);
      });
  }

  return (
    <SplashScreen>
      <View style={styles.buttonContainer}>
        {loading ? (
          <Loading />
        ) : (
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            onPress={onGoogleButtonPress}
            style={styles.button}
          />
        )}
      </View>
    </SplashScreen>
  );
};

export default Auth;
