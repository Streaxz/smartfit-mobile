import React, { Fragment, PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, StatusBarStyle } from 'react-native';

type TProps = {
  statusBgColor: string;
  barStyle: StatusBarStyle;
  bgColor: string;
};

const CustomStatusBar: React.FC<PropsWithChildren<TProps>> = ({
  children,
  statusBgColor = '#fff',
  barStyle = 'dark-content',
  bgColor = '#fff',
}) => {
  return (
    <Fragment>
      <StatusBar backgroundColor={statusBgColor} barStyle={barStyle} />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <SafeAreaView style={{ flex: 0, backgroundColor: statusBgColor }} />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        {children}
      </SafeAreaView>
    </Fragment>
  );
};

export default CustomStatusBar;
