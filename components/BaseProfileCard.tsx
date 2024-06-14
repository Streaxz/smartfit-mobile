import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/constants/Colors';

type TProps = {
  name?: string;
  additionalInfo?: string;
  imageUrl?: string;
  level?: number;
  levelPrefix?: string;
};

export const BaseProfileCard: React.FC<TProps> = ({
  name,
  imageUrl,
  additionalInfo,
  level,
  levelPrefix = 'уровень',
}) => {
  return (
    <View style={styles.profileInfo}>
      <Image source={{ uri: imageUrl }} style={styles.profileImage} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        {level && (
          <View style={styles.badges}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {level} {levelPrefix}
              </Text>
            </View>
          </View>
        )}
        {additionalInfo && <Text style={styles.phone}>{additionalInfo}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: COLORS.BLACK_100,
    borderRadius: 4,
    marginRight: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  badgeText: {
    color: COLORS.WHITE,
  },
  badges: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  name: {
    flexShrink: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nameContainer: {
    flexDirection: 'column',
    flexShrink: 1,
    justifyContent: 'center',
    marginLeft: 8,
  },
  phone: {
    color: COLORS.BLACK_100,
    fontSize: 16,
  },
  profileImage: {
    borderRadius: 50,
    height: 70,
    marginBottom: 8,
    width: 70,
  },
  profileInfo: {
    flexDirection: 'row',
    marginTop: 8,
  },
});
