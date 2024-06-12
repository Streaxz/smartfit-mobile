interface BodyComposition {
	totalBodyWater: number;
	protein: number;
	minerals: number;
	bodyFatMass: number;
	weight: number;
}

interface Measurement {
	min: number;
	norm: number;
	max: number;
	current: number;
}

interface MuscleFatAnalysis {
	weight: Measurement;
	skeletalMuscleMass: Measurement;
	bodyFatMass: Measurement;
}

interface ObesityAnalysis {
	bmi: Measurement;
	bodyFatPercentage: Measurement;
}

interface SegmentalAnalysis {
	leftArm: number;
	rightArm: number;
	trunk: number;
	leftLeg: number;
	rightLeg: number;
}

interface WeightControl {
	idealWeight: number;
	weightControl: {
		increase: number;
		decrease: number;
	};
	muscleControl: number;
	fatControl: number;
}

interface Metabolism {
	bmr: number;
	metabolicMass: number;
}

interface ExaminationParameters {
	muscleMassLevel: number;
	visceralFatLevel: number;
	waistHipRatio: number;
}

interface BodyCompositionHistory {
	date: string;
	weight: number;
	skeletalMuscleMass: number;
	bodyFatMass: number;
}

interface Exercise {
	label: string;
	calories: number;
}

export interface InBodyData {
	id: string;
	height: number;
	age: number;
	gender: string;
	measurementDate: string;
	bodyComposition: BodyComposition;
	muscleFatAnalysis: MuscleFatAnalysis;
	obesityAnalysis: ObesityAnalysis;
	segmentalLeanAnalysis: SegmentalAnalysis;
	segmentalFatAnalysis: SegmentalAnalysis;
	inBodyScore: number;
	weightControl: WeightControl;
	metabolism: Metabolism;
	examinationParameters: ExaminationParameters;
	bodyCompositionHistory: BodyCompositionHistory[];
	bmi: number;
	bmr: number;
	exercisesToBurnCalories: Exercise[];
}

export interface IInBody {
	inBodyDecodeJson: InBodyData;
}