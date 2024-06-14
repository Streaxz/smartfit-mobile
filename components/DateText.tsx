import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/constants/Colors';
import dayjs from 'dayjs';

export const DateText: React.FC<{
  text: string;
}> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dayjs(text).format('DD MMMM в HH:mm')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE_200,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    fontWeight: 'semibold',
    height: 48,
    paddingHorizontal: 10,
  },
  text: {
    color: COLORS.BLACK_100,
    lineHeight: 48,
  },
});
