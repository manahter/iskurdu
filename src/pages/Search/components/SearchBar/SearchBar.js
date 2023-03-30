import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import useSearchHistory from '../../../../hooks/useSearchHistory';
import DDPicker from '../../../../components/lists/DDPicker';
import Search from '../../../../components/lotties/Search';
import usePost from '../../../../hooks/usePost';
import styles from './SearchBar.style';

const SearchBar = ({navigation}) => {
  const {loading, error, fetchOptions, fetchComboBox} = usePost();
  const {opa} = useTheme();
  const metin = useSelector(state => state.request.ctl04$ctlArananMetin2);
  const il = useSelector(state => state.request.ctl04$ctlIl);
  const ils = useSelector(state => state.options.Il);
  const ilce = useSelector(state => state.request.ctl04$ctlIlce);
  const ilces = useSelector(state => state.options.Ilce);
  const ilanTarihi = useSelector(state => state.request.ctl04$ctlIlanTarihi);
  const ilanTarihis = useSelector(state => state.options.IlanTarihi);
  const ogrenimDurum = useSelector(s => s.request.ctl04$ctlOgrenimDurum);
  const ogrenimDurums = useSelector(s => s.options.OgrenimDurum);
  const isyeriTuru = useSelector(state => state.request.ctl04$ctlIsyeriTuru);
  const isyeriTurus = useSelector(state => state.options.IsyeriTuru);
  const selectedOptions = useSelector(state => state.selected.options);
  const {addSearchHistory} = useSearchHistory();

  const pickerData = [
    {
      value: il,
      items: ils,
      setValue: 'setIl',
      icon: 'map-marker-multiple',
      onChangeValue: true,
      deleteIlce: true,
    },
    {
      value: ilce,
      items: ilces,
      setValue: 'setIlce',
      icon: 'map-marker',
    },
    {
      value: ilanTarihi,
      items: ilanTarihis,
      setValue: 'setIlanTarihi',
      icon: 'clipboard-text-clock',
    },
    {
      value: ogrenimDurum,
      items: ogrenimDurums,
      setValue: 'setOgrenimDurum',
      icon: 'school',
    },
    {
      value: isyeriTuru,
      items: isyeriTurus,
      setValue: 'setIsyeriTuru',
      icon: 'domain',
    },
  ];

  const dispatch = useDispatch();

  // Arama sayfası açıldığında ilk seçenek listeleri çekilir.
  useEffect(() => {
    if (ils.length > 0) return;
    console.log('Search -> useEffect -> [] -> fetchOptions');
    fetchOptions();
  }, []);

  if (error) return navigation.navigate('Jobs');

  const handleGoToWorks = () => {
    console.log('Page -> Search -> goPage -> Jobs');
    addSearchHistory(selectedOptions);
    dispatch({type: 'selected/clearTotalWorks'}); // Önceki arama sonuçları temizlenir
    dispatch({type: 'utils/setWorksPageReload', payload: true});
    navigation.navigate('Jobs');
  };

  const handleClear = () => {
    dispatch({type: 'request/clear'}); // Önceki arama sonuçları temizlenir
    dispatch({type: 'selected/resetOptions'}); // Önceki aramadaki seçilenler temizlenir
  };

  const setSelOptQuick = (key, label, value) => {
    const newOptions = {...selectedOptions};
    if (!value) {
      delete newOptions[key];
    } else {
      newOptions[key] = {
        label: label,
        value: value,
      };
    }
    newOptions.time = Date.now();
    dispatch({type: 'selected/setOptions', payload: newOptions});
    console.log('->', selectedOptions);
  };

  const renderPicker = ({
    value,
    items,
    setValue,
    onChangeValue = false,
    deleteIlce = false,
  }) => (
    <DDPicker
      value={value}
      items={items}
      setValue={i => dispatch({type: `request/${setValue}`, payload: i()})}
      onChangeValue={data => onChangeValue && fetchComboBox(data)} // ilçeler çekilir
      onSelectItem={item => {
        if (deleteIlce) delete selectedOptions.setIlce;
        setSelOptQuick(setValue, item.label, item.value);
      }}
    />
  );

  const renderBackButton = (
    <TouchableOpacity
      style={styles.backIcon}
      onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={20} color={opa.set9} />
    </TouchableOpacity>
  );

  const renderTextInput = (
    <TextInput
      placeholder="Arama Yap..."
      placeholderTextColor={opa.set7}
      autoFocus={true}
      style={styles.searchInput(opa)}
      value={metin}
      onChangeText={text => {
        dispatch({type: 'request/setMetin', payload: text});
        setSelOptQuick('setMetin', text, text);
      }}
    />
  );

  const renderClearButton = (
    <TouchableOpacity style={styles.backIcon} onPress={handleClear}>
      <Icon name="close" size={20} color={opa.set9} />
    </TouchableOpacity>
  );

  const renderSearchButton = (
    <TouchableOpacity style={styles.button(opa)} onPress={handleGoToWorks}>
      <Search />
      <Text style={styles.buttonText(opa)}>Ara</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={styles.headerBar(opa)}>
        {renderBackButton}
        {renderTextInput}
        {renderClearButton}
      </View>
      <View style={{flexDirection: 'row'}}>
        <FlatList
          renderItem={({item}) => renderPicker(item)}
          data={pickerData}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {renderSearchButton}
    </SafeAreaView>
  );
};
export default SearchBar;
