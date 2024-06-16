import {IUser, USER_TYPE} from "@/types/user";
import {ITraining, TrainingData} from "@/types/trainings";



export const coach: IUser = {
	id: '1',
	email: 'user@example.com',
	name: 'Тренеров Александр Станиславович',
	role: USER_TYPE.TRAINER,
	authId: 'auth123',
	mainClientsId: ['client1', 'client2'],
	profileId: 'profile123',
	mainCouchId: 'couch123',
	profile: {
		currentWeight: 99.8,
		currentHeight: 180,
	}
}

export const user: IUser = {
	id: '1',
	email: 'user@example.com',
	name: 'Клиентов Сергей Олегович',
	role: USER_TYPE.CLIENT,
	authId: 'auth123',
	mainClientsId: ['client1', 'client2'],
	profileId: 'profile123',
	mainCouchId: 'couch123',
	mainCouch: coach,
	profile: {
		currentWeight: 99,
		currentHeight: 180,
		inBody: {
			inBodyDecodeJson: {
				"id": "89208882928",
				"height": 193,
				"age": 41,
				"gender": "male",
				"measurementDate": "12.03.2023",
				"bodyComposition": {
					"totalBodyWater": 51.9,
					"protein": 14.9,
					"minerals": 4.93,
					"bodyFatMass": 29.0,
					"weight": 99.8
				},
				"muscleFatAnalysis": {
					"weight": {
						"min": 75.6,
						"norm": 90.7,
						"max": 105.8,
						"current": 99.8
					},
					"skeletalMuscleMass": {
						"min": 37.5,
						"norm": 45.4,
						"max": 53.3,
						"current": 40.3
					},
					"bodyFatMass": {
						"min": 10.1,
						"norm": 20.2,
						"max": 30.3,
						"current": 29.0
					}
				},
				"obesityAnalysis": {
					"bmi": {
						"min": 18.5,
						"norm": 24,
						"max": 30,
						"current": 26.7
					},
					"bodyFatPercentage": {
						"min": 8,
						"norm": 19,
						"max": 24,
						"current": 29.1
					}
				},
				"segmentalLeanAnalysis": {
					"leftArm": 4.25,
					"rightArm": 4.22,
					"trunk": 27.4,
					"leftLeg": 11.7,
					"rightLeg": 11.9
				},
				"segmentalFatAnalysis": {
					"leftArm": 2.0,
					"rightArm": 2.0,
					"trunk": 16.3,
					"leftLeg": 7.4,
					"rightLeg": 7.4
				},
				"inBodyScore": 65,
				"weightControl": {
					"idealWeight": 83.3,
					"weightControl": {
						"increase": 0,
						"decrease": -16.5
					},
					"muscleControl": 0,
					"fatControl": -16.5
				},
				"metabolism": {
					"bmr": 1900,
					"metabolicMass": 28.9
				},
				"examinationParameters": {
					"muscleMassLevel": 1,
					"visceralFatLevel": 13,
					"waistHipRatio": 1.08
				},
				"bodyCompositionHistory": [
					{
						"date": "12.03.2023",
						"weight": 99.8,
						"skeletalMuscleMass": 40.3,
						"bodyFatMass": 29.0
					}
				],
				"bmi": 26.7,
				"bmr": 1900,
				"exercisesToBurnCalories": [
					{"label": "Бег", "calories": 650},
					{"label": "Прыжки со скакалкой", "calories": 900},
					{"label": "Теннис", "calories": 500},
					{"label": "Баскетбол", "calories": 650},
					{"label": "Футбол", "calories": 650},
					{"label": "Плавание", "calories": 600},
					{"label": "Силовые тренировки", "calories": 500}
				]
			}
		}
	}
}


export const trainingData: TrainingData = {
	"exercises": [
		{
			"photos": [
				"/mnt/data/trainingData/photos/squat_1.jpg",
				"/mnt/data/trainingData/photos/squat_2.jpg"
			],
			"difficulty": "Начинающий",
			"name": "Приседания",
			"muscle": "Ноги",
			"additionalMuscle": "Ягодицы",
			"type": "Силовая тренировка",
			"equipment": "Без оборудования",
			"sets": 3,
			"reps": 15,
			"restBetweenSets": 60
		},
		{
			"photos": [
				"/mnt/data/trainingData/photos/pushup_1.jpg",
				"/mnt/data/trainingData/photos/pushup_2.jpg"
			],
			"difficulty": "Начинающий",
			"name": "Отжимания",
			"muscle": "Грудные",
			"additionalMuscle": "Трицепсы",
			"type": "Силовая тренировка",
			"equipment": "Без оборудования",
			"sets": 3,
			"reps": 12,
			"restBetweenSets": 60
		},
		{
			"photos": [
				"/mnt/data/trainingData/photos/plank_1.jpg",
				"/mnt/data/trainingData/photos/plank_2.jpg"
			],
			"difficulty": "Начинающий",
			"name": "Планка",
			"muscle": "Пресс",
			"additionalMuscle": "Спина",
			"type": "Силовая тренировка",
			"equipment": "Без оборудования",
			"sets": 3,
			"reps": 1,
			"restBetweenSets": 60
		},
		{
			"photos": [
				"/mnt/data/trainingData/photos/row_1.jpg",
				"/mnt/data/trainingData/photos/row_2.jpg"
			],
			"difficulty": "Начинающий",
			"name": "Тяга штанги в наклоне",
			"muscle": "Спина",
			"additionalMuscle": "Бицепсы",
			"type": "Силовая тренировка",
			"equipment": "Штанга",
			"sets": 3,
			"reps": 10,
			"restBetweenSets": 60
		},
		{
			"photos": [
				"/mnt/data/trainingData/photos/lunge_1.jpg",
				"/mnt/data/trainingData/photos/lunge_2.jpg"
			],
			"difficulty": "Начинающий",
			"name": "Выпады",
			"muscle": "Ноги",
			"additionalMuscle": "Ягодицы",
			"type": "Силовая тренировка",
			"equipment": "Без оборудования",
			"sets": 3,
			"reps": 12,
			"restBetweenSets": 60
		},
		{
			"photos": [
				"/mnt/data/trainingData/photos/crunch_1.jpg",
				"/mnt/data/trainingData/photos/crunch_2.jpg"
			],
			"difficulty": "Начинающий",
			"name": "Скручивания",
			"muscle": "Пресс",
			"additionalMuscle": "Без дополнительных мышц",
			"type": "Силовая тренировка",
			"equipment": "Без оборудования",
			"sets": 3,
			"reps": 20,
			"restBetweenSets": 60
		}
	],
	"restBetweenExercises": 90,
	"additionalMarks": [
		"Начните с разминки в течение 5-10 минут, чтобы разогреть мышцы и подготовить тело к тренировке.",
		"Выполняйте упражнения с правильной техникой, чтобы избежать травм и получить максимальную пользу.",
		"Постепенно увеличивайте нагрузку, добавляя больше повторений или подходов по мере улучшения физической формы.",
		"Не забывайте о растяжке после тренировки для ускорения восстановления и улучшения гибкости."
	]
}

export const trainingMocks: ITraining[] = [
	{
		id: 0,
		name: 'Тренировка 1',
		duration: 60,
		startTime: '10:00',
		completed: true,
		progress: true,
		type: 'Бокс',
		client: user,
		location: 'ул. Строителей, 2',
	},
	{
		id: 1,
		name: 'Тренировка 2',
		duration: 60,
		startTime: '12:00',
		completed: true,
		progress: false,
		type: 'Силовая',
		client: user,
		location: 'ул. Строителей, 2',
	},
	{
		id: 2,
		name: 'Тренировка 3',
		duration: 60,
		startTime: '14:00',
		completed: false,
		progress: false,
		type: 'Кардио',
		client: user,
		location: 'ул. Строителей, 2',
	},
	{
		id: 3,
		name: 'Тренировка 4',
		duration: 60,
		startTime: '16:00',
		completed: false,
		progress: false,
		type: 'Силовая',
		client: user,
		location: 'ул. Строителей, 2',
	},

];