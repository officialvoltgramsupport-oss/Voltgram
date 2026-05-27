import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>VOLTGRAM ⚡</Text>
      <Text style={styles.subtitle}>
        Telegram-connected AI messenger concept
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Connect Telegram</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Features</Text>
        <Text style={styles.item}>• Real-time messaging</Text>
        <Text style={styles.item}>• Stories</Text>
        <Text style={styles.item}>• AI replies</Text>
        <Text style={styles.item}>• Gaming Hub</Text>
        <Text style={styles.item}>• Secret Vault</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    color: '#3b82f6',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 16,
    marginBottom: 25
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  card: {
    width: '100%',
    backgroundColor: '#111827',
    padding: 20,
    borderRadius: 20
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12
  },
  item: {
    color: '#cbd5e1',
    marginBottom: 8
  }
});