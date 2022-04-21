import moment from "moment";
import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import s from './ThisDay.module.scss';

interface Props {
	weather: Weather
}

export const ThisDay = ({ weather }: Props) => {
	return (
		<div className={s.this_day}>
			<div className={s.this_day__top}>
				<div className={s.top__container}>
					<div className={s.top__temp}>{Math.floor(weather.main.temp)}<span>&#xb0;</span></div>
					<div className={s.top__today}>Monday</div>
				</div>
				<div className={s.this_day__img}>
					<GlobalSvgSelector id='sun' />
				</div>
			</div>
			<div className={s.this_day__bottom}>
				<div className={s.bottom__time}>Time: <span>{moment().format('LT')}</span></div>
				<div className={s.bottom__city}>City: <span>{weather.name}</span></div>
			</div>
		</div>
	)
}