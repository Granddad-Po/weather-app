import { AxiosResponse } from 'axios';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Weather } from "../types/types"

type CurrentWeather = {
	weather: Weather,
	isLoading: boolean,
	response: Response,
}

type Response = {
	status: number,
	message: string,
}

const initialState: CurrentWeather = {
	weather: {
		name: '',
		dt: 0,
		timezone: 0,
		weather: [
			{
				id: 0,
				main: '',
				description: '',
				icon: ''
			}
		],
		main: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
			pressure: 0,
			humidity: 0,
		},
		wind: {
			speed: 0,
			deg: 0,
		},
		clouds: {
			all: 0,
			},
	},
	isLoading: false,
	response: {
		status: 0,
		message: '',
	}
}

export const currentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		fetchCerrentSlice(state) {
			state.isLoading = true;
		},
		fetchCerrentSliceSuccess(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.isLoading = false;
			state.weather = action.payload.data;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			}
		},
		fetchCerrentSliceError(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.isLoading = false;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			}
		}
	}
})

export default currentWeatherSlice.reducer