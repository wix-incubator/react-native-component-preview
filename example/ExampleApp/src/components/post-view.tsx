import React from 'react';
import {View, Text, Button} from 'react-native';

interface PostViewProps {
  authorName: string;
  contentText: string;
  isLiked: boolean;
}

export const PostView: React.FC<PostViewProps> = React.memo(({authorName, contentText, isLiked}) => {
  const [liked, setLiked] = React.useState(isLiked);

  return (
    <View style={{padding: 4, backgroundColor: 'white'}}>
      <View>
        <Text style={{fontSize: 14}}>{authorName}</Text>
      </View>
      <View>
        <Text style={{marginVertical: 8, fontSize: 16}}>{contentText}</Text>
      </View>
      <View>
        <Button
          title={liked ? '💖 Unlike' : '🤍 Like'}
          onPress={() => {
            setLiked(!liked);
          }}
        />
      </View>
    </View>
  );
});
