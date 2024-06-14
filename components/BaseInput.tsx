import React, { Dispatch, SetStateAction, forwardRef, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { COLORS } from '@/constants/Colors';

type TProps = {
  placeholder?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
} & TextInputProps;

// eslint-disable-next-line react/display-name
const BaseInput = forwardRef<TextInput, TProps>(
  ({ placeholder, setValue, value, ...inputProps }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const setFocused = () => {
      setIsFocused(true);
    };

    const setUnFocused = () => {
      setIsFocused(false);
    };

    return (
      <View
        style={{
          ...styles.container,
          borderColor: isFocused ? COLORS.PRIMARY_100 : COLORS.WHITE_100,
        }}
      >
        <TextInput
          style={styles.text}
          placeholder={placeholder}
          placeholderTextColor={COLORS.BLACK_100}
          onFocus={setFocused}
          onBlur={setUnFocused}
          value={value}
          ref={ref}
          onChange={(e) => {
            setValue?.(e.nativeEvent.text);
          }}
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
