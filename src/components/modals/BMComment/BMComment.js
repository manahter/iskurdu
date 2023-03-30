import {useTheme} from '@react-navigation/native';
import {TextInput, View} from 'react-native';
import React from 'react';

import useComments from '../../../hooks/useComments';
import Button from '../../buttons/Button';
import BottomModal from '../BottomModal';
import styles from './BMComment.style';

// title : string
// visible : booleanState
// setVisible : functionState
// jobID : string -> Job's flag
// editMode : boolean -> is edit mode
// commentItem : object -> {text: ..., time: ..., updated: ...}
export default function BMComment({
  visible,
  setVisible,
  jobID,
  editMode,
  commentItem,
}) {
  const {opa, opaColor} = useTheme();
  const [text, setText] = React.useState(commentItem ? commentItem.text : '');
  const {addComment, updateComment, removeComment} = useComments(jobID);

  const addButton = (
    <Button
      text="Ekle"
      outline={true}
      color={opaColor.set7}
      onPress={() => setVisible(false) || setText('') || addComment(text)}
    />
  );

  const editButtons = (
    <>
      <Button
        text="Sil"
        outline={true}
        color={opa.set7}
        onPress={() => setVisible(false) || removeComment(commentItem)}
      />
      <Button
        text="Güncelle"
        outline={true}
        color={opaColor.set7}
        onPress={() => setVisible(false) || updateComment(commentItem, text)}
      />
    </>
  );

  return (
    <BottomModal title="Yorum" visible={visible} setVisible={setVisible}>
      <TextInput
        placeholder="Yorumunuzu yazın..."
        style={styles.input(opa)}
        onChangeText={setText}
        value={text}
        autoFocus
        multiline
      />
      <View style={styles.buttons}>{editMode ? editButtons : addButton}</View>
    </BottomModal>
  );
}
