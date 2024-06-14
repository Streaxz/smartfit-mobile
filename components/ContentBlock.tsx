import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/constants/Colors';

type TProps = {
  label: string;
};

const ContentBlock: FC<PropsWithChildren<TProps>> = ({ children, label }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    flexDirection: 'column',
    marginBottom: 16,
    padding: 16,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContentBlock;
