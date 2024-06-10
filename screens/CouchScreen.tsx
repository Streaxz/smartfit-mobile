import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// @ts-ignore
export default function CouchScreen({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    smartfitAcademy: {
      fontFamily: 'roboto-700',
      color: 'rgba(74,144,226,1)',
      width: 273,
      textAlign: 'center',
      lineHeight: 35,
      fontSize: 35,
      alignSelf: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.smartfitAcademy}>COUCH SCREEN</Text>
    </SafeAreaView>
  );
}
