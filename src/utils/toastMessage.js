import {ToastAndroid, Platform, AlertIOS} from 'react-native';

export default function (msg) {
  console.log('TOASTMESSAGE', msg);
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  } else {
    AlertIOS.alert(msg);
  }
}
