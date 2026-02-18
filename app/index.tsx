import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* PROFILE 1 */}
      <View style={styles.card}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.image}
        />
        <Text style={styles.name}>Aditya Akbar</Text>
        <Text style={styles.info}>103982</Text>
      </View>

      {/* PROFILE 2 */}
      <View style={styles.card}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.image}
        />
        <Text style={styles.name}>Budi Santoso</Text>
        <Text style={styles.info}>0000001234</Text>
      </View>

      {/* PROFILE 3 */}
      <View style={styles.card}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.image}
        />
        <Text style={styles.name}>John Smith</Text>
        <Text style={styles.info}>johnsmith@example.com</Text>
      </View>

      {/* PROFILE 4 */}
      <View style={styles.card}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.image}
        />
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.info}>janedoe@example.com</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  card: {
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: 'gray',
  },
});
