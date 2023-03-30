import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const addComment = (workID, comment, comments, setComments) => {
  const user = auth().currentUser;
  const time = Date.now();
  const data = {
    time: time,
    text: comment,
    updated: false,
  };
  firestore()
    .doc(`users/${user.uid}/savedJobs/${workID}/comments/${time}`)
    .set(data)
    .then(() => {
      setComments([...comments, data]);
      console.log('Added comment');
    });
};

export const loadComments = (workID, dispatch) => {
  const user = auth().currentUser;
  firestore()
    .collection(`users/${user.uid}/savedJobs/${workID}/comments`)
    .get()
    .then(querySnapshot => {
      const data = [];
      querySnapshot.forEach(docSnapshot => data.push(docSnapshot.data()));
      // setComments(data);
      dispatch({type: 'selected/setWork', payload: data});
    });
};
