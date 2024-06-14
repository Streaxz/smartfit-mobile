import React, { useDeferredValue, useMemo, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { EButtonLinkType } from '@/types/ui/button-link';
import dayjs from 'dayjs';

import { BaseScreenLayout } from '@/components/BaseScreenLayout';
import SearchTitle from '@/components/SearchTitle';
import ClientCard, { TClientProps } from '@/components/trainer/ClientCard';

import ScrollView = Animated.ScrollView;

const clientList: TListedClient[] = [
  {
    name: 'Николай Сергеевич В.',
    level: 54,
    additionalInfo: '+7 (982) 123-34-12',
    key: '123',
    nextMeetDate: dayjs().set('day', 12).set('months', 6).toISOString(),
    accountsLinks: [
      {
        key: EButtonLinkType.PHONE,
        url: 'tel:+79821233412',
        iconName: 'phone',
      },
      {
        key: EButtonLinkType.TELEGRAM,
        url: 'tel:+79821233413',
        iconName: 'phone-in-talk',
      },
    ],
  },
  {
    name: 'Дмитрий Владимирович К.',
    level: 12,
    additionalInfo: '+7 (982) 123-34-12',
    key: '125',
    nextMeetDate: dayjs().set('day', 15).set('months', 6).toISOString(),
  },
  {
    name: 'Максим Андреевич С.',
    level: 67,
    additionalInfo: '+7 (982) 123-34-12',
    key: '126',
    nextMeetDate: dayjs().set('day', 16).set('months', 6).toISOString(),
  },
  {
    name: 'Алексей Петрович И.',
    level: 67,
    additionalInfo: '+7 (982) 123-34-12',
    key: '127',
    nextMeetDate: dayjs().set('day', 18).set('months', 6).toISOString(),
  },
  {
    name: 'Дмитрий Владимирович К.',
    level: 12,
    additionalInfo: '+7 (982) 123-34-12',
    key: '678',
    nextMeetDate: dayjs().set('day', 15).set('months', 6).toISOString(),
  },
  {
    name: 'Максим Андреевич С.',
    level: 67,
    additionalInfo: '+7 (982) 123-34-12',
    key: '235',
    nextMeetDate: dayjs().set('day', 16).set('months', 6).toISOString(),
  },
];

type TListedClient = TClientProps & {
  key: string;
};

export const ClientsListScreen: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string | undefined>();

  const filteredList = useMemo(() => {
    return filterValue
      ? clientList.filter(
          (el) =>
            el.name?.includes(filterValue) ||
            el.nextMeetDate?.includes(filterValue) ||
            el.additionalInfo?.includes(filterValue)
        )
      : clientList;
  }, [clientList, filterValue]);

  const deferredList = useDeferredValue(filteredList);

  return (
    <BaseScreenLayout>
      <SearchTitle
        placeholder="Мои клиенты"
        value={filterValue}
        setValue={setFilterValue}
      />
      <ScrollView style={styles.wrapper}>
        {deferredList.map((client) => (
          <ClientCard
            key={client.key}
            name={client.name}
            level={client.level}
            additionalInfo={client.additionalInfo}
            imageUrl={client.imageUrl}
            nextMeetDate={client.nextMeetDate}
            accountsLinks={client.accountsLinks}
          />
        ))}
      </ScrollView>
    </BaseScreenLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 12,
  },
});
