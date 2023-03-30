import {SafeAreaView, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import DetailsPageActionsButton from '../../components/buttons/DetailsPageActionsButton';
import IconListItem from '../../components/lists/IconList/components/IconListItem';
import AddCommentButton from '../../components/buttons/AddCommentButton';
import DescriptionCard from '../../components/cards/DescriptionCard';
import SaveJobButton from '../../components/buttons/SaveJobButton';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CommentCard from '../../components/cards/CommentCard';
import ContactCard from '../../components/cards/ContactCard';
import BackButton from '../../components/buttons/BackButton';
import Loading from '../../components/lotties/Loading';
import {remainingTimeLimit} from '../../utils/date';
import Error from '../../components/lotties/Error';
import useComments from '../../hooks/useComments';
import usePost from '../../hooks/usePost';
import styles from './Details.style';

const Details = ({navigation, route}) => {
  console.log('Page -> Details');
  const work = useSelector(state => state.selected.work);
  const {comments, fetchComments} = useComments(work.flag);
  const details = useSelector(state => state.details);
  const deadline = remainingTimeLimit(work.deadline);
  const {loading, error, fetchDetails} = usePost();
  const [summary, setSummary] = useState();
  const {opa} = useTheme();

  useEffect(() => {
    console.log('Page -> Details -> useEffect -> []');
    fetchDetails(work.flag);
    fetchComments();
  }, []);

  useEffect(() => {
    console.log('Page -> Details -> useEffect -> favWork');
    const __summ = [
      [
        work.hasDisorder ? 'human-wheelchair' : 'account',
        work.numOfHires + ' açık pozisyon',
      ],
      ['calendar-range', deadline],
      ['map-marker', `${work.il}, ${work.ilce}`],
      ['identifier', work.flag],
      ['office-building-cog-outline', work.employerType],
      ['timetable', work.employmentStatus + ' çalışan'],
      [
        'school-outline',
        details.ctlOgrenimAsgari ? 'En az: ' + details.ctlOgrenimAsgari : '',
      ],
      [
        'school',
        details.ctlOgrenimAzami ? 'En fazla: ' + details.ctlOgrenimAzami : '',
      ],
      [
        'timeline-clock',
        details.repeaterMeslek_ctl01_ctlMeslekDeneyimSuresiLabel
          ? details.repeaterMeslek_ctl01_ctlMeslekDeneyimSuresiLabel +
            ' yıl deneyim'
          : '',
      ],
    ].reduce((aku, item) => {
      if (item[1]) aku.push({icon: item[0], text: item[1]});
      return aku;
    }, []);

    setSummary(__summ);
  }, [details]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Loading />
      </View>
    );
  }

  const renderScroll = (
    <ScrollView
      contentContainerStyle={styles.contentScroll}
      showsVerticalScrollIndicator={false}>
      {work.employer ? (
        <DescriptionCard title="İşveren" text={work.employer} />
      ) : null}

      <DescriptionCard title="İş Tanımı" text={details.ctlGenelSartlar} />
      <DescriptionCard
        title="Nitelik ve Beceriler"
        text={details.ctlGenelSartlar2}
      />
      {details.phones.map(phone => (
        <ContactCard text={phone} key={phone} />
      ))}
      {details.emails.map(email => (
        <ContactCard text={email} key={email} />
      ))}
      {comments.map(comment => (
        <CommentCard
          commentItem={comment}
          key={comment.time}
          jobID={work.flag}
        />
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.page(opa)}>
      <View style={styles.headContainer(opa)}>
        <BackButton navigation={navigation} position="absolute" />
        <Text style={styles.title(opa)}>{work.title}</Text>
        <FlatList
          data={summary}
          numColumns={2}
          keyExtractor={item => item.icon}
          renderItem={({item}) => (
            <IconListItem icon={item.icon} text={item.text} frameless={true} />
          )}
        />
        <View style={styles.buttonGroup}>
          <SaveJobButton work={work} size={30} style={styles.favoriteIcon} />
          <DetailsPageActionsButton work={work} />
        </View>
      </View>
      {error ? <Error /> : renderScroll}
      <AddCommentButton jobID={work.flag} />
    </SafeAreaView>
  );
};

export default Details;
