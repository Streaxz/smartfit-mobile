
export interface Exercise {
	photos: string[];
	difficulty: string;
	name: string;
	muscle: string;
	additionalMuscle: string;
	type: string;
	equipment: string;
	sets: number;
	reps: number;
	restBetweenSets: number;
}

export interface TrainingData {
	exercises: Exercise[];
	restBetweenExercises: number;
	additionalMarks: string[];
}