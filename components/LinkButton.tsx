import React, { useCallback } from 'react';
import {
  Alert,
  Linking,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '@/constants/Colors';
import { TButtonLinkType } from '@/types/ui/button-link';

type TProps = {
  iconName: string;
} & Omit<TButtonLinkType, 'key'>;

export const LinkButton: React.FC<TProps> = (props) => {
  const handleOpenLink = useCallback(async () => {
    if (props.onClick) {
      props.onClick?.();
    } else if ('url' in props && props.url) {
      const supported = await Linking.canOpenURL(props.url);

      if (supported) {
        await Linking.openURL(props.url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${props.url}`);
      }
    }
  }, [props]);

  return (
    <TouchableHighlight onPress={handleOpenLink}>
      <View style={styles.button}>
        <Icon name={props.iconName} size={20} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE_200,
    borderRadius: 4,
    color: COLORS.BLACK_100,
    display: 'flex',
    flexDirection: 'row',
    fontWeight: 'semibold',
    height: 48,
    justifyContent: 'center',
    lineHeight: 48,
    paddingHorizontal: 10,
    width: 48,
  },
});
