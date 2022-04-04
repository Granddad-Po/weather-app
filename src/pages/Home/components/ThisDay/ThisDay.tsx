import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import s from './ThisDay.module.scss';

interface Props {

}

export const ThisDay = (props: Props) => {
	return (
		<div className={s.this_day}>
			<div className={s.this_day__top}>
				<div className={s.top__container}>
					<div className={s.top__temp}>20<span>&#xb0;</span></div>
					<div className={s.top__today}>Monday</div>
				</div>
				<GlobalSvgSelector id='sun' />
			</div>
			<div className={s.this_day__bottom}>
				<div className={s.bottom__time}>Time: <span>20:54</span></div>
				<div className={s.bottom__city}>City: <span>Saint-Petersburg</span></div>
			</div>
		</div>
	)
}