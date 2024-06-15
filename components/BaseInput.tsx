import React, { forwardRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import { COLORS } from '@/constants/Colors';

type TProps = {
  placeholder?: string;
  value?: string;
  error?: boolean;
} & TextInputProps;

// eslint-disable-next-line react/display-name
const BaseInput = forwardRef<TextInput, TProps>(
  ({ placeholder, value, onBlur, style, error, ...inputProps }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const setFocused = () => {
      setIsFocused(true);
    };

    const setUnFocused = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(e);
      setIsFocused(false);
    };

    return (
      <View
        style={{
          ...styles.container,
          borderColor: error
            ? COLORS.ERROR
            : isFocused
              ? COLORS.PRIMARY_100
              : COLORS.WHITE_100,
        }}
      >
        <TextInput
          style={{
            ...styles.text,
            ...(style ?? ({} as object)),
          }}
          placeholder={placeholder}
          placeholderTextColor={COLORS.BLACK_100}
          onFocus={setFocused}
          onBlur={setUnFocused}
          value={value}
          ref={ref}
          {...inputProps}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE_200,
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    color: COLORS.BLACK_100,
    display: 'flex',
    flexDirection: 'row',
    fontSize: 20,
    marginBottom: 15,
    width: '100%',
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingRight: 20,
    paddingVertical: 10,
    width: '100%',
  },
});

export default BaseInput;
