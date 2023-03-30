import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import SelectBarItem from '../SelectBarItem';

export default function SelectBar() {
  const [selected, setSelected] = React.useState(1);
  const savedJobStatus = useSelector(state => state.savedJobStatus);

  React.useEffect(() => {}, [selected]);

  const renderItem = ({item}) => (
    <SelectBarItem
      id={item.id}
      selected={selected}
      setSelected={setSelected}
      groupName={item.groupName}
    />
  );

  return (
    <FlatList
      horizontal
      //   style={styles.container}
      keyExtractor={item => item.id}
      data={Object.values(savedJobStatus)}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
}
