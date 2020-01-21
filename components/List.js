import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';
import {getAllMedia} from "../hooks/APIHooks.js"


const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [data, loading] = getAllMedia();
  setMedia(data);
  return (
    <View style={{marginTop: 19}}>
      <FlatList
        data={media}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <ListItem
              item={item}
              navigation={props.navigation}
              singleMedia={item}
            />
          );
        }}
      />
    </View>
  );
};

export default List;
