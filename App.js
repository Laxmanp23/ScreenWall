import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import Loader from './component/Loader';
import { loadUnsplaceWall } from './assets/api';

const { height, width } = Dimensions.get('window');

const App = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const loadWallpapers = async () => {
    try {
      const data = await loadUnsplaceWall();
      setImages(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading wallpapers:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWallpapers();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ height: 200, width: width / 2, margin: 5 }}>
      <Image
        style={{ flex: 1, borderRadius: 10 }}
        source={{ uri: item.imageUrl }}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loader}>
          <Loader />
        </View>
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
