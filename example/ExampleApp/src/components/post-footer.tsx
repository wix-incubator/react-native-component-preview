import React from 'react';
import {View, Text, Button} from 'react-native';

interface PostFooterProps {
  isLiked?: boolean;
}

export const PostFooter: React.FC<PostFooterProps> = ({isLiked}) => {
  const [liked, setLiked] = React.useState(isLiked);

  return (
    <View>
      <Button
        title={liked ? '💖 Unlike' : '🤍 Like'}
        onPress={() => {
          setLiked(!liked);
        }}
      />
    </View>
  );
};
