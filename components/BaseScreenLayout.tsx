import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { COLORS } from '@/constants/Colors';

import CustomStatusBar from '@/components/CustomStatusBar';

export const BaseScreenLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CustomStatusBar
      barStyle={'dark-content'}
      statusBgColor={COLORS.WHITE_200}
      bgColor={COLORS.WHITE_200}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>{children}</View>
      </SafeAreaView>
    </CustomStatusBar>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE_200,
    color: COLORS.BLACK_100,
    flex: 1,
    padding: 25,
  },
  inner: {
    flex: 1,
    padding: 10,
  },
});
