import axios from 'axios';
import {useState} from 'react';
import Config from 'react-native-config';

import {useDispatch, useSelector} from 'react-redux';

const _headers = [
  {'X-AjaxPro-Method': 'FetchDetails'}, // fetchDetails'te mutlaka bunu kullanmalıyız
  {'X-Requested-With': 'XMLHttpRequest'},
  {'Content-Type': 'application/x-www-form-urlencoded'},
  {'Content-Type': 'application/json'},
  {'Content-Type': 'multipart/form-data'}, // Biraz sorunlu olabilir
];

const fetchComboBoxParams = {
  dataTextField: 'ACIKLAMA',
  dataTextFieldSecondary: '',
  referanceColumn: 'ILKAYITNO',
  tableName: 'PRMILCE',
  value: '',
};

function usePosts() {
  const [loading, setLoading] = useState(false);
  const [extending, setExtending] = useState(false);
  const [error, setError] = useState(null);

  // Güncel istek verileriyle, URL'den istekte bulunuyoruz.
  const request = useSelector(state => state.request);

  // Aldığımız verilerle OPTIONS'ları güncellemek için kullanacağız.
  const dispatch = useDispatch();

  const fetch = async (
    header = _headers[1],
    __EVENTTARGET = 'ctl04$ctlAcikIsPageCommand$CommandItem_Search', // First Page
  ) => {
    setLoading(true);
    try {
      // Internetten sayfayı çek
      const {data: responseData} = await axios.post(
        Config.URL_ACIKILAN,
        {...request, __EVENTTARGET},
        {
          headers: header,
        },
      );
      // Gelen HTML'deki verilerle LISTEleri güncelle
      dispatch({type: 'request/loadItemsByHTML', payload: responseData});
      setLoading(false);
      console.log('usePost -> fetch -> OK');
      return responseData;
    } catch (err) {
      console.log('usePost -> fetch -> ERROR', err, request);
      setError(true);
    }
    return '';
  };

  // Seçenekli listeleri çekiyoruz.
  const fetchOptions = async () => {
    console.log('usePost -> fetchOptions');
    const responseData = await fetch(_headers[1]);
    dispatch({type: 'options/loadItemsByHTML', payload: responseData});
  };

  // Detay listeleri çekiyoruz. Örn: Listeden İl seçildiğinde, İlçelerini çeker
  const fetchComboBox = async (value = '') => {
    setLoading(true);
    console.log('usePost -> fetchComboBox');
    fetchComboBoxParams.value = value;
    try {
      // Internetten sayfayı çek
      const {data: responseData} = await axios.post(
        Config.URL_COMBOBOX,
        fetchComboBoxParams,
        {
          headers: _headers[0],
        },
      );
      // Gelen Ajax'daki verilerle LISTEleri güncelle
      dispatch({type: 'options/loadIlceByAjax', payload: responseData});
      console.log('usePost -> fetchComboBox -> OK');
    } catch (err) {
      setError(true);
      console.log('usePost -> fetchComboBox -> ERROR', err);
    }
    setLoading(false);
  };

  // İşleri çekiyoruz.
  const fetchWorks = async () => {
    console.log('usePost -> fetchWorks');
    const responseData = await fetch(_headers[2]);
    dispatch({type: 'selected/loadTotalWorksByHTML', payload: responseData});
    dispatch({type: 'jobs/loadItemsByHTML', payload: responseData});
    setLoading(false);
  };

  // İşleri çekiyoruz.
  const fetchWorksNextPage = async () => {
    console.log('usePost -> fetchWorksNextPage');
    setExtending(true);
    const responseData = await fetch(
      _headers[2],
      'ctl04$ctlDataPagerDetay$btnNext',
    );
    // dispatch({type: 'selected/loadTotalWorksByHTML', payload: responseData});
    dispatch({type: 'jobs/extendItemsByHTML', payload: responseData});
    setLoading(false);
    setExtending(false);
  };

  const fetchDetails = async (flag = '') => {
    setLoading(true);
    console.log('usePost -> fetchDetails');
    try {
      // Internetten sayfayı çek
      const {data: responseData} = await axios.post(
        `${Config.URL_ILANDETAY}?uiID=${flag}`,
        {headers: _headers[1]},
      );
      // Gelen Ajax'daki verilerle LISTEleri güncelle
      dispatch({
        type: 'details/loadDetailsByHTML',
        payload: responseData,
      });
      console.log('usePost -> fetchDetails -> OK');
    } catch (err) {
      setError(true);
      console.log('usePost -> fetchDetails -> ERROR', err);
    }
    setLoading(false);
  };

  return {
    loading,
    extending,
    error,
    fetchOptions,
    fetchComboBox,
    fetchWorks,
    fetchDetails,
    fetchWorksNextPage,
  };
}

export default usePosts;
