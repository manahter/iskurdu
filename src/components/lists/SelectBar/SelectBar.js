import React from 'react';
import {FlatList} from 'react-native';

import SelectBarItem from './components/SelectBarItem';

// data = [{id, icon, text}, {...}, ...]
// onSelected = function -> onSelect ( selectedID )

export default function SelectBar({
  data,
  showCount,
  style = {},
  onSelected,
  initSelectedID = 1,
  textPropName = 'text',
}) {
  const [selected, setSelected] = React.useState(initSelectedID);

  React.useEffect(() => {
    onSelected(selected);
  }, [selected]);

  const renderItem = ({item}) => (
    <SelectBarItem
      id={item.id}
      icon={item.icon}
      selected={selected}
      setSelected={setSelected}
      text={item[textPropName]}
      count={showCount ? item.count : null}
    />
  );

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      style={style}
    />
  );
}
