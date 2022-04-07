import React from "react";
import s from './ThisDayInfo.module.scss';
import { ThisDayItem } from "./ThisDayItem";
import cloud from '../../../../assets/images/cloud.png';

interface Props {

}

export interface Item {
	icon_id: string,
	name: string,
	value: string
}

export const ThisDayInfo = (props: Props) => {

	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: '20° - ощущается как 17°'
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: '765 мм ртутного столба - нормальное'
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков'
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: '23 м/с юго-запад - легкий ветер'
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
