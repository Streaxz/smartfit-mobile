import React, { Dispatch, FC, SetStateAction, memo, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '@/constants/Colors';

type TProps = {
  placeholder?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
};

const SearchTitle: FC<TProps> = ({ placeholder, setValue, value }) => {
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
        multiline={false}
        placeholderTextColor={COLORS.BLACK_100}
        onFocus={setFocused}
        onBlur={setUnFocused}
        value={value}
        onChange={(e) => {
          setValue?.(e.nativeEvent.text);
        }}
      />
      <Icon name="magnify" size={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE_100,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    color: COLORS.BLACK_100,
    display: 'flex',
    flexDirection: 'row',
    fontSize: 20,
    marginBottom: 15,
    paddingRight: 20,
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
});

export default memo(SearchTitle);
