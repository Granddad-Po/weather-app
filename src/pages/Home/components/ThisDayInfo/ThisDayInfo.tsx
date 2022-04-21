import React from "react";
import s from './ThisDayInfo.module.scss';
import { ThisDayItem } from "./ThisDayItem";
import cloud from '../../../../assets/images/cloud.png';
import { Weather } from "../../../../store/types/types";

interface Props {
	weather: Weather,
}

export interface Item {
	icon_id: string,
	name: string,
	value: string
}

export const ThisDayInfo = ({ weather }: Props) => {

	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: `${weather.main.pressure} мм ртутного столба`
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков'
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: `${weather.wind.speed} м/с юго-запад`
		},
	];

	return (
		<div className={s.this_day_info}>
			<div className={s.this_day_info__item}>
				{items.map((item: Item) => (
					<ThisDayItem key={item.icon_id} item={item} />
				))}
			</div>
			<img className={s.cloud} src={cloud} alt="облако" />
		</div>
	)
}
