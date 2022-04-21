import { currentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherService } from './../../services/WeatherService';
import { AppDispatch } from './../store';
export const fetchCurrentWeather =
	(payload: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(currentWeatherSlice.actions.fetchCerrentSlice());
			const res = await WeatherService.getCurrentWeather(payload);

			if (res.status === 200) {
				dispatch(currentWeatherSlice.actions.fetchCerrentSliceSuccess(res));
			} else {
				dispatch(currentWeatherSlice.actions.fetchCerrentSliceError(res));
			}
		} catch (error) {
			console.log(error)
		}

	}