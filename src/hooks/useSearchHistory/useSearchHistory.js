import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function useSearchHistory(init = false) {
  const searchHistory = useSelector(state => state.searchHistory);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (init && user.email) fetchSearchHistory();
  }, [user]);

  const fetchSearchHistory = () => {
    console.log('fetchSearchHistory');
    firestore()
      .collection(`users/${user.uid}/searchHistory`)
      .get()
      .then(querySnapshot => {
        const data = [];
        querySnapshot.forEach(docSnapshot => data.push(docSnapshot.data()));
        dispatch({type: 'searchHistory/load', payload: data});
      })
      .catch(error => {
        console.log('ERROR: fetchSearchHistory', error);
      });
  };

  const addSearchHistory = item => {
    firestore()
      .doc(`users/${user.uid}/searchHistory/${item.time}`)
      .set(item)
      .then(() => {
        dispatch({type: 'searchHistory/add', payload: item});
      });
  };

  const updateSearchHistory = item => {
    firestore()
      .doc(`users/${user.uid}/searchHistory/${item.time}`)
      .update(item)
      .then(() => {
        dispatch({type: 'searchHistory/update', payload: item});
      });
  };

  const removeSearchHistory = item => {
    firestore()
      .doc(`users/${user.uid}/searchHistory/${item.time}`)
      .delete()
      .then(() => {
        dispatch({type: 'searchHistory/remove', payload: item});
      });
  };

  return {
    searchHistory,
    fetchSearchHistory,
    addSearchHistory,
    updateSearchHistory,
    removeSearchHistory,
  };
}

export default useSearchHistory;
