import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BaseScreenLayout } from '@/components/BaseScreenLayout';
import {COLORS} from "@/constants/Colors";

export const HomeTrainer: React.FC = () => {
	return (
		<BaseScreenLayout>
			<View style={styles.wrapper}>
				<Text>123</Text>
			</View>
		</BaseScreenLayout>
	);
}

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