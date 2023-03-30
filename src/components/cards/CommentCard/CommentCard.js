import React from 'react';
import {TouchableOpacity} from 'react-native';

import BMComment from '../../modals/BMComment';
import DescriptionCard from '../DescriptionCard';

const CommentCard = ({commentItem, children, jobID}) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <TouchableOpacity onLongPress={() => setVisible(!visible)}>
      <DescriptionCard
        title={commentItem.title}
        text={commentItem.text}
        time={commentItem.time}>
        {children}
      </DescriptionCard>
      <BMComment
        jobID={jobID}
        visible={visible}
        setVisible={setVisible}
        editMode
        commentItem={commentItem}
      />
    </TouchableOpacity>
  );
};

export default CommentCard;
