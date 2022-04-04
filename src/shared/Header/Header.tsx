import React from "react";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select, { NonceProvider } from 'react-select'

import s from './Header.module.scss';

interface Props {

}

export const Header = (props: Props) => {
	const options = [
		{ value: 'spb', label: 'Saint-Petersburg' },
		{ value: 'moscow', label: 'Moscow' },
		{ value: 'ekaterinburg', label: 'Ekaterinburg' }
	]

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: 'rgba(71, 147, 255, 0.2)',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: '100',
		})
	}


	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.header__logo}>
					<GlobalSvgSelector id='logo' />
				</div>
				<h2 className={s.header__title}>React weather</h2>
			</div>
			<div className={s.wrapper}>
				<div className={s.change_theme}>
					<GlobalSvgSelector id='change-theme' />
				</div>
				<Select defaultValue={options[0]} styles={colourStyles} options={options} />
			</div>
		</header>
	)
}