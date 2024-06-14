import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '@/constants/Colors';
import { getAchievement } from '@/constants/achievements';
import { NavigationProp, TRAINER_TABS } from '@/types/navigation';
import { TButtonLinkType } from '@/types/ui/button-link';

import { BaseProfileCard } from '@/components/BaseProfileCard';
import { DateText } from '@/components/DateText';
import { LinkButton } from '@/components/LinkButton';

export type TClientProps = {
  name?: string;
  additionalInfo?: string;
  level?: number;
  imageUrl?: string;
  nextMeetDate?: string;
  accountsLinks?: TButtonLinkType[];
};

const ClientCard: React.FC<TClientProps> = ({
  name,
  additionalInfo,
  level,
  imageUrl,
  nextMeetDate,
  accountsLinks,
}) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.wrapper}>
      <BaseProfileCard
        name={name}
        additionalInfo={additionalInfo}
        level={level}
        imageUrl={imageUrl}
        levelPrefix={`- ${getAchievement(level ?? 0)}`}
      />
      {(nextMeetDate || (accountsLinks?.length ?? 0) > 0) && (
        <View style={styles.meetAndLinksBlock}>
          {nextMeetDate && <DateText text={nextMeetDate} />}
          {(accountsLinks?.length ?? 0) > 0 && (
            <View style={styles.accountLinksWrapper}>
              {accountsLinks?.map((link) => (
                <LinkButton
                  key={link.url}
                  url={link.url}
                  iconName={link.iconName}
                  onClick={link.onClick}
                />
              ))}
              <LinkButton
                key={TRAINER_TABS.CLIENT_PAGE}
                url={TRAINER_TABS.CLIENT_PAGE}
                iconName="arrow-right"
                onClick={() => {
                  navigation.navigate(TRAINER_TABS.CLIENT_PAGE, {
                    clientId: '123',
                  });
                }}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accountLinksWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  meetAndLinksBlock: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  wrapper: {
    backgroundColor: COLORS.WHITE_100,
    borderRadius: 6,
    marginBottom: 14,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
});

export default memo(ClientCard);
