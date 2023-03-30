import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
import Config from 'react-native-config';

const options = {year: 'numeric', month: 'long', day: 'numeric'};

export const distanceDateLimit = (timeStamp, day) =>
  new Date() - new Date(timeStamp) < 1000 * 60 * 60 * 24 * day
    ? formatDistance(parseISO(timeStamp), new Date(), {
        addSuffix: true,
        locale: tr,
      })
    : new Date(timeStamp).toLocaleString('tr-TR', options) + ' tarihinde';

export const distanceTimeLimit = (timeStamp, day) =>
  new Date() - new Date(timeStamp) < 1000 * 60 * 60 * 24 * day
    ? formatDistance(timeStamp, new Date(), {
        addSuffix: true,
        locale: tr,
      })
    : new Date(timeStamp).toLocaleString('tr-TR', options) + ' tarihinde';

// Eğer 'day' günden kısaysa zamanı uzaklık olarak ver.
// Eğer 'day' günden uzunsa zamanı tarih olarak ver.
export const remainingTimeLimit = timeStamp =>
  new Date() < timeStamp
    ? formatDistance(new Date(), timeStamp, {locale: tr}) + ' kaldı'
    : Config.END_TIME;
