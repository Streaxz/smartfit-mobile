import { IInBody } from '@/types/inBody';

export enum USER_TYPE {
  CLIENT = 'client',
  TRAINER = 'trainer',
  ADMIN = 'admin',
}

export interface IUser {
	id: string;
	email: string;
	name: string;
	role: USER_TYPE;
	authId: string;
	mainClientsId: string[];
	createdAt?: Date;
	updatedAt?: Date;
	profileId: string;
	profile: IProfile;
	mainCouchId?: string;
	mainCouch?: IUser;
}

export interface IProfile {
	currentWeight: number;
	currentHeight: number;
	inBody?: IInBody;
}

export type TLoginData = { role: USER_TYPE; user: IUser };
