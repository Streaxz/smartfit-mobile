import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useCallback, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { COLORS } from '@/constants/Colors';
import { selectTrainingPlanCreate } from '@/features/trainer/trainingPlans/selectors';
import { fetchTrainingPlan } from '@/features/trainer/trainingPlans/slices/trainingPlanCreateSlice';
import { NavigationProp, TRAINER_TABS } from '@/types/navigation';

import BaseInput from '@/components/BaseInput';

type TForm = {
  name: string;
  additionalProperties: string;
};

type TProps = {
  viewFirstStyles?: StyleProp<ViewStyle>;
  viewStyles?: StyleProp<ViewStyle>;
  description: string;
};

const CreateAiTrainingPlanForm: React.FC<TProps> = ({
  viewStyles,
  viewFirstStyles,
  description,
}) => {
  const dispatch = useAppDispatch();
  const {
    aiData: { pending, error },
  } = useAppSelector(selectTrainingPlanCreate);
  const navigate = useNavigation<NavigationProp>();

  const secondFieldRef = useRef<TextInput | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({
    defaultValues: {
      name: undefined,
      additionalProperties: undefined,
    },
  });
  const onSubmit = useCallback((data: TForm) => {
    dispatch(fetchTrainingPlan(data));
    navigate.navigate(TRAINER_TABS.TRAINING_PLAN_CREATE);
  }, []);

  return (
    <Fragment>
      <View
        style={{
          ...styles.wrapper,
          ...((viewStyles ?? {}) as object),
          ...((viewFirstStyles ?? {}) as object),
        }}
      >
        <Controller<TForm>
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <BaseInput
              placeholder="Название"
              enterKeyHint={'next'}
              onSubmitEditing={() => {
                secondFieldRef.current?.focus();
              }}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={!!errors.name}
            />
          )}
          name="name"
        />
        {errors.name && <Text style={styles.errorText}>This is required.</Text>}
      </View>
      <View
        style={{
          ...styles.wrapper,
          ...(viewStyles ?? ({} as object)),
        }}
      >
        <Controller<TForm>
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <BaseInput
              placeholder="Дополнительные требования к плану"
              ref={secondFieldRef}
              enterKeyHint={'send'}
              onSubmitEditing={handleSubmit(onSubmit)}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              multiline={true}
              error={!!errors.additionalProperties}
            />
          )}
          name="additionalProperties"
        />
        {errors.additionalProperties && (
          <Text style={styles.errorText}>This is required.</Text>
        )}
      </View>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        style={styles.aiButton}
        onPress={handleSubmit(onSubmit)}
        disabled={pending}
      >
        <Text style={styles.aiButtonText}>Создать с помощью ИИ</Text>
        <Icon name={'auto-fix'} color={'white'} size={18} />
      </TouchableOpacity>
      {error && (
        <Text style={styles.errorText}>
          Запрос завершился с ошибкой, попробуйте позже
        </Text>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  aiButton: {
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY_100,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    paddingVertical: 12,
    width: '100%',
  },
  aiButtonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: COLORS.LIGHT_GRAY,
    fontSize: 14,
    marginBottom: 16,
  },
  errorText: {
    bottom: -5,
    color: COLORS.ERROR,
    position: 'absolute',
  },
  wrapper: {
    marginBottom: 6,
    position: 'relative',
  },
});

export default CreateAiTrainingPlanForm;
