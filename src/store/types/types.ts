export type Weather = {
	name: string,
	dt: number,
	timezone: number,
	weather: [
		{
			id: number,
			main: string,
			description: string,
			icon: string
		}
	],
	main: {
		temp: number,
		feels_like: number,
		temp_min: number,
		temp_max: number,
		pressure: number,
		humidity: number,
	},
	wind: {
		speed: number,
		deg: number,
	},
	clouds: {
		all: number,
		},
};