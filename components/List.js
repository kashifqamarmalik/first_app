import React, {useContext} from 'react';
import { View, FlatList } from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext';
import { useFetch } from "../hooks/APIHooks.js"


const List = () => {
  const [ media, setMedia ] = useContext(MediaContext);
  const [ data, loading] = useFetch ('https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json');
  console.log('List', data, loading);
  setMedia(data);
    return (
      <View style={{marginTop: 19}}>
        <FlatList
          data={media}
          keyExtractor = {(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <ListItem item={item}/>
            );
          }}
        />
      </View>
    );
};