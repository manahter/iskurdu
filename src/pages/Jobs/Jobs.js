import {BackHandler, FlatList, ActivityIndicator, View} from 'react-native';
import {useTheme, useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';

import NotFound from '../../components/lotties/NotFound';
import Loading from '../../components/lotties/Loading';
import JobCard from '../../components/cards/JobCard';
import Error from '../../components/lotties/Error';
import usePost from '../../hooks/usePost';
import Header from './components/Header';
import styles from './Jobs.style';

const Jobs = ({navigation}) => {
  console.log('Page -> Jobs');
  const {loading, extending, error, fetchWorks, fetchWorksNextPage} = usePost();
  const totalJobs = useSelector(state => state.selected.totalJobs);
  const reload = useSelector(state => state.utils.worksPageReload);
  const jobs = useSelector(state => state.jobs);
  const dispatch = useDispatch();
  const {opa} = useTheme();

  useEffect(() => {
    console.log('Page -> Jobs -> useEffect -> reload', reload);
    if (reload) {
      fetchWorks();
      dispatch({type: 'utils/setWorksPageReload', payload: false});
    }
  }, [reload]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Bu sayfa için geri gitme işlemini engelliyoruz.
        return true;
      };

      // Geri düğmesine basıldığında "onBackPress" işlevini çağırır
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // Temizleme
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  const handleOnSelect = work => {
    console.log('Page -> Jobs -> goPage -> Details');
    dispatch({type: 'selected/setWork', payload: work});
    navigation.navigate('Details');
  };

  const goNext = () => {
    if (loading || extending) return;
    if (Object.keys(jobs).length >= totalJobs) return;

    console.log('Page -> Jobs -> nextPage');
    fetchWorksNextPage();
  };

  const renderExtending = () =>
    extending ? (
      <ActivityIndicator
        style={styles.indicator}
        color={opa.set7}
        size="large"
      />
    ) : null;

  const renderJobCard = ({item}) => (
    <JobCard item={item} onPress={() => handleOnSelect(item)} />
  );

  const renderHeader = (
    <Header
      navigation={navigation}
      countJobsListed={Object.keys(jobs).length}
      countJobsTotal={totalJobs}
    />
  );

  const renderWorks = (
    <FlatList
      onRefresh={() =>
        dispatch({type: 'utils/setWorksPageReload', payload: true})
      }
      // ListEmptyComponent={ListEmptyComponent}
      ListFooterComponent={renderExtending}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={renderHeader}
      refreshing={loading && !extending}
      stickyHeaderHiddenOnScroll={true}
      keyExtractor={item => item.flag}
      renderItem={renderJobCard}
      data={Object.values(jobs)}
      onEndReachedThreshold={1}
      stickyHeaderIndices={[0]}
      onEndReached={goNext}
    />
  );

  return (
    <View style={styles.container}>
      {renderWorks}
      {error ? (
        <Error />
      ) : !Object.values(jobs).length ? (
        loading ? (
          <Loading />
        ) : (
          <NotFound />
        )
      ) : null}
    </View>
  );
};

export default Jobs;
