import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';

function useComments(jobID) {
  const comments = useSelector(state => state.comments);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const fetchComments = () => {
    firestore()
      .collection(`users/${user.uid}/savedJobs/${jobID}/comments`)
      .get()
      .then(querySnapshot => {
        const items = [];
        querySnapshot.forEach(docSnapshot => items.push(docSnapshot.data()));
        dispatch({type: 'comments/load', payload: items});
      })
      .catch(error => {
        console.log('ERROR: fetchComments', error);
      });
  };

  const addComment = text => {
    const time = Date.now();
    const item = {
      time: time,
      text: text,
      updated: false,
    };
    firestore()
      .doc(`users/${user.uid}/savedJobs/${jobID}/comments/${time}`)
      .set(item)
      .then(() => {
        dispatch({type: 'comments/add', payload: item});
      });
  };

  const updateComment = (commentItem, text) => {
    const time = Date.now();
    const item = {
      ...commentItem,
      text: text,
      updated: time,
    };
    firestore()
      .doc(`users/${user.uid}/savedJobs/${jobID}/comments/${commentItem.time}`)
      .update(item)
      .then(() => {
        dispatch({type: 'comments/update', payload: item});
      });
  };

  const removeComment = commentItem => {
    firestore()
      .doc(`users/${user.uid}/savedJobs/${jobID}/comments/${commentItem.time}`)
      .delete()
      .then(() => {
        dispatch({type: 'comments/remove', payload: commentItem});
      });
  };

  return {
    comments,
    fetchComments,
    addComment,
    updateComment,
    removeComment,
  };
}

export default useComments;
