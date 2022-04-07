import React from "react";
import { Card } from "./Card";
import s from './Days.module.scss';
import { Tabs } from "./Tabs";

interface Props {

}

export interface Day {
	day: string,
	day_info: string,
	icon_id: string,
	temp_day: string,
	temp_night: string,
	info: string,
}

export const Days = (props: Props) => {
	const days: Day[] = [
		{
			day: 'Сегодня',
			day_info: '28 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day: 'Завтра',
			day_info: '29 авг',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_night: '+12',
			info: 'Небольшой дождь',
		},
		{
			day: 'Ср',
			day_info: '30 авг',
			icon_id: 'small_rain',
			temp_day: '+18',
			temp_night: '+12',
			info: 'Небольшой дождь',
		},
		{
			day: 'Чт',
			day_info: '1 сент',
			icon_id: 'cloudy',
			temp_day: '+18',
			temp_night: '+12',
			info: 'Облачно',
		},
		{
			day: 'Пт',
			day_info: '2 сент',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_night: '+12',
			info: 'Пасмурно',
		},
		{
			day: 'Пт',
			day_info: '3 сент',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_night: '+12',
			info: 'Пасмурно',
		},
		{
			day: 'Пт',
			day_info: '4 сент',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_night: '+12',
			info: 'Пасмурно',
		},
	]
	return (
		<>
			<Tabs />
			<div className={s.days}>
				{
					days.map((day: Day) => (
						<Card key={day.day_info} days={day} />
					))
				}
			</div>
		</>
	)
}