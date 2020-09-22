import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import {View, StyleSheet, Image, Text} from 'react-native';

const Scroll: React.FC = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event: any) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP,
      ),
    };
  });

  const avatarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [100, 180],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Image
          style={[styles.avatar, avatarStyle]}
          source={{uri: 'https://github.com/Xavi002.png'}}
        />
        <Text style={styles.name}>Diogo Martins</Text>
      </Animated.View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: 300}}>
        <Text style={styles.listItem}>Item da listaaa</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
  },
  header: {
    height: 300,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'flex-end',

    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,

    zIndex: 100,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  name: {
    color: '#dddddd',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 25,
  },
  listItem: {
    color: '#dddddd',
    fontSize: 20,
    alignSelf: 'center',
    paddingVertical: 18,
    paddingHorizontal: 100,
    borderRadius: 12,
    marginTop: 12,
  },
});

export default Scroll;
