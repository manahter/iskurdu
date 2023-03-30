import {FlatList, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

import useSearchFavs from '../../../hooks/useSearchFavs';
import IconListItem from './components/IconListItem';
import styles from './IconList.style';

const icons = {
  setMetin: 'cursor-text',
  setIl: 'map-marker-multiple',
  setIlce: 'map-marker',
  setIlanTarihi: 'clipboard-text-clock',
  setOgrenimDurum: 'school',
  setIsyeriTuru: 'domain',
};

const IconList = ({item}) => {
  const {searchFavs} = useSearchFavs();
  const isFav = searchFavs[item.time];

  const list = Object.keys(item).reduce((aku, key) => {
    if (typeof item[key] !== 'number') {
      const itm = {...item[key]};
      itm.icon = icons[key];
      aku.push(itm);
    }
    return aku;
  }, []);

  const renderItem = ({item}) => (
    <IconListItem icon={item.icon} text={item.label} colored={isFav} />
  );

  return (
    <TouchableWithoutFeedback style={styles.container}>
      <FlatList
        data={list}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        renderItem={renderItem}
        horizontal
      />
    </TouchableWithoutFeedback>
  );
};

export default IconList;
