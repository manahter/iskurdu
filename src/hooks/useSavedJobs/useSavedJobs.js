import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

function useSavedJobs(init = false) {
  const savedJobs = useSelector(state => state.savedJobs);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (init && user.email) fetchSavedJobs();
  }, [user]);

  const fetchSavedJobs = () => {
    console.log('fetchSavedJobs');
    firestore()
      .collection(`users/${user.uid}/savedJobs`)
      .get()
      .then(querySnapshot => {
        const items = [];
        querySnapshot.forEach(docSnapshot => items.push(docSnapshot.data()));
        dispatch({type: 'savedJobs/load', payload: items});
      })
      .catch(error => {
        console.log('ERROR: fetchSavedJobs', error);
      });
  };

  const addSavedJob = job => {
    const data = {...job, savedTime: Date.now()};

    firestore()
      .doc(`users/${user.uid}/savedJobs/${data.flag}`)
      .set(data)
      .then(() => {
        dispatch({type: 'savedJobs/add', payload: data});
      });
  };

  const updateSavedJob = savedJob => {
    firestore()
      .doc(`users/${user.uid}/savedJobs/${savedJob.flag}`)
      .update(savedJob)
      .then(() => {
        dispatch({type: 'savedJobs/update', payload: savedJob});
      });
  };

  const removeSavedJob = savedJob => {
    firestore()
      .doc(`users/${user.uid}/savedJobs/${savedJob.flag}`)
      .delete()
      .then(() => {
        dispatch({type: 'savedJobs/remove', payload: savedJob});
      });
  };

  const filterJobStatusByID = statusID => {
    return Object.values(savedJobs).filter(job => job.status === statusID);
  };

  return {
    savedJobs,
    fetchSavedJobs,
    addSavedJob,
    updateSavedJob,
    removeSavedJob,
    filterJobStatusByID,
  };
}

export default useSavedJobs;
