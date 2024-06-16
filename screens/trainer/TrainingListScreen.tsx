import React, { useDeferredValue, useMemo, useState } from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {BaseScreenLayout} from "@/components/BaseScreenLayout";
import SearchTitle from "@/components/SearchTitle";
import {trainingMocks} from "@/utils/mocks";
import {Training} from "@/components/Training";

export const TrainingListScreen: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string | undefined>();

  const filteredList = useMemo(() => {
    return filterValue
      ? trainingMocks.filter(
        (el) =>
          el.name?.includes(filterValue) ||
          el?.type?.includes(filterValue) ||
          el.startTime?.includes(filterValue)
      )
      : trainingMocks;
  }, [trainingMocks, filterValue]);

  const deferredList = useDeferredValue(filteredList);

  return (
    <BaseScreenLayout>
      <SearchTitle
        placeholder="Тренировки"
        value={filterValue}
        setValue={setFilterValue}
      />
      <ScrollView style={styles.wrapper}>
        {deferredList.map((training) => (
          <Training
            key={training.id}
            training={training}
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
