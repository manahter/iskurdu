import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

// TODO: Favori aramalara, kaç kez tıklandığına dair bilgi ekle

function useSearchFavs(init = false) {
  const searchFavs = useSelector(state => state.searchFavs);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (init && user.email) fetchSearchFavs();
  }, [user]);

  const fetchSearchFavs = () => {
    console.log('fetchSearchFavs');
    firestore()
      .collection(`users/${user.uid}/searchFavs`)
      .get()
      .then(querySnapshot => {
        const data = [];
        querySnapshot.forEach(docSnapshot => data.push(docSnapshot.data()));
        dispatch({type: 'searchFavs/load', payload: data});
      })
      .catch(error => {
        console.log('ERROR: fetchSearchFavs', error);
      });
  };

  const addSearchFav = item => {
    if (searchFavs[item.time]) {
      updateSearchFav(item);
      return;
    }
    firestore()
      .doc(`users/${user.uid}/searchFavs/${item.time}`)
      .set(item)
      .then(() => {
        dispatch({type: 'searchFavs/add', payload: item});
      });
  };

  const updateSearchFav = item => {
    const _item = {...item};
    if (_item.count) _item.count += 1;
    else _item.count = 1;

    firestore()
      .doc(`users/${user.uid}/searchFavs/${_item.time}`)
      .update(_item)
      .then(() => {
        dispatch({type: 'searchFavs/update', payload: _item});
      });
  };

  const removeSearchFav = item => {
    firestore()
      .doc(`users/${user.uid}/searchFavs/${item.time}`)
      .delete()
      .then(() => {
        dispatch({type: 'searchFavs/remove', payload: item});
      });
  };

  return {
    searchFavs,
    fetchSearchFavs,
    addSearchFav,
    updateSearchFav,
    removeSearchFav,
  };
}

export default useSearchFavs;
