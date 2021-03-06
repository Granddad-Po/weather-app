import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Day } from "./Days";
import s from './Days.module.scss';

interface Props {
	days: Day
}

export const Card = ({ days }: Props) => {
	const { day, day_info, icon_id, temp_day, temp_night, info } = days
	return (
		<div className={s.card}>
			<div className={s.day}>{day}</div>
			<div className={s.day_info}>{day_info}</div>
			<div className={s.icon_id}>{
				<GlobalSvgSelector id={icon_id} />
			}</div>
			<div className={s.temp_day}>{temp_day}<span>&#xb0;</span></div>
			<div className={s.temp_night}>{temp_night}<span>&#xb0;</span></div>
			<div className={s.info}>{info}</div>
		</div>
	)
}