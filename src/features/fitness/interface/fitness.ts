export interface IFitness {
	user: IUser;
	activities: IActivity[];
}

export interface IUser {
	id: string;
	name: string;
	email: string;
	age: number;
	height: number;
	weight: number;
}

export interface IActivity {
	id: string;
	name: string;
	date: string;
	duration: number;
	distance?: number;
	calories_burned: number;
	heart_rate: IHeartRate;
	steps?: number;
	pace?: IPace;
	elevation_gain?: number;
	speed?: ISpeed;
	laps?: number;
	pool_length?: number;
	strides?: number;
	reps?: IReps;
	weight_lifted?: IWeightLifted;
}

export interface IHeartRate {
	average: number;
	max: number;
}

export interface IPace {
	average: number;
	best: number;
}

export interface ISpeed {
	average: number;
	max: number;
}

export interface IReps {
	total: number;
	sets: number;
	average_per_set: number;
}

export interface IWeightLifted {
	total: number;
	average_per_rep: number;
}
