import {SafeAreaView, View, Image, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';

import ProfileActionsButton from '../../components/buttons/ProfileActionsButton';
import BackButton from '../../components/buttons/BackButton';
import SelectBar from '../../components/lists/SelectBar';
import JobCard from '../../components/cards/JobCard';
import useSavedJobs from '../../hooks/useSavedJobs';
import {distanceDateLimit} from '../../utils/date';
import {useTheme} from '@react-navigation/native';
import styles from './Profile.style';

// TODO: Profil resmine tıklayınca, çıkış yapma ve başka kullanıcıyla giriş yapma seçenekleri sorulsun
export default function Profile({navigation}) {
  console.log('Page -> Profile');
  const [groups, setGroups] = React.useState(
    Object.values(useSelector(state => state.savedJobStatus)),
  );
  const user = useSelector(state => state.user);
  const [refreshing, setRefreshing] = React.useState(false);
  const [filteredJobs, setFiltetedJobs] = React.useState([]);
  const [selectedGroup, setSelectedGroup] = React.useState(1);
  const createdAt = distanceDateLimit(user.metadata.creationTime, 6);
  const {savedJobs, removeSavedJob, filterJobStatusByID} = useSavedJobs();

  const {opa, gri} = useTheme();

  React.useEffect(() => {
    console.log('Page -> Profile -> useEffect -> []');
    refresh();
  }, []);

  React.useEffect(() => {
    console.log('Page -> Profile -> useEffect -> selectedGroup', selectedGroup);
    refresh();
  }, [savedJobs, selectedGroup]);

  React.useEffect(() => {
    console.log('Page -> Profile -> useEffect -> savedJobs', savedJobs.length);
    const updateGroups = groups.map(item => {
      const newItem = {...item};
      newItem.count = filterJobStatusByID(item.id).length;
      return newItem;
    });

    setGroups(updateGroups);
  }, [savedJobs]);

  React.useEffect(() => {
    console.log('Page -> Profile -> useEffect -> filteredJobs');
    setRefreshing(false);
  }, [filteredJobs]);

  const dispatch = useDispatch();

  const refresh = () => {
    setRefreshing(true);
    setFiltetedJobs(filterJobStatusByID(selectedGroup));
  };

  const filterOnSelected = selectedID => {
    setSelectedGroup(selectedID);
  };

  const handleGoJobDetails = job => {
    dispatch({type: 'selected/setWork', payload: job});
    navigation.navigate('Details');
  };

  const renderSelectBar = (
    <SelectBar
      style={{backgroundColor: gri.set0}}
      onSelected={filterOnSelected}
      textPropName="groupName"
      initSelectedID={1}
      data={groups}
      showCount
    />
  );

  const renderJobCard = ({item}) => (
    <JobCard
      item={item}
      fav={true}
      onPress={() => handleGoJobDetails(item)}
      onLongPress={() => removeSavedJob(item)}
    />
  );

  const renderHeader = (
    <>
      <View style={styles.info_container(gri)}>
        <BackButton navigation={navigation} />
        <ProfileActionsButton
          style={styles.text_container}
          navigation={navigation}>
          <Text style={styles.username(opa)}>{user.displayName}</Text>
          <Text style={styles.usermail(opa)}>{user.email}</Text>
          <Text style={styles.createdAt(opa)}>{createdAt} katıldı</Text>
        </ProfileActionsButton>
        <Image style={styles.image} src={user.photoURL} />
      </View>
      {renderSelectBar}
    </>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={filteredJobs}
        onRefresh={refresh}
        extraData={savedJobs}
        refreshing={refreshing}
        stickyHeaderIndices={[0]}
        renderItem={renderJobCard}
        keyExtractor={item => item.flag}
        stickyHeaderHiddenOnScroll={true}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
