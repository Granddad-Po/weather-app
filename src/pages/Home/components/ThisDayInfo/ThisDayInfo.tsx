import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import s from './ThisDayInfo.module.scss';

interface Props {

}

export const ThisDayInfo = (props: Props) => {
	return (
		<div className={s.this_day_info}>
			<div className={s.this_day_info__item}>
				<div className={s.item__circle}>
					<GlobalSvgSelector id='temp' />
				</div>
				<div className={s.item__title}>Температура</div>
				<div className={s.item__text}>20° - ощущается как 17°</div>
			</div>

			<div className={s.this_day_info__item}>
				<div className={s.item__circle}>
					<GlobalSvgSelector id='pressure' />
				</div>
				<div className={s.item__title}>Давление</div>
				<div className={s.item__text}>765 мм ртутного столба - нормальное</div>
			</div>

			<div className={s.this_day_info__item}>
				<div className={s.item__circle}>
					<GlobalSvgSelector id='precipitation' />
				</div>
				<div className={s.item__title}>Осадки</div>
				<div className={s.item__text}>Без осадков</div>
			</div>

			<div className={s.this_day_info__item}>
				<div className={s.item__circle}>
					<GlobalSvgSelector id='wind' />
				</div>
				<div className={s.item__title}>Ветер</div>
				<div className={s.item__text}>3 м/с юго-запад - легкий ветер</div>
			</div>
		</div>
	)
}