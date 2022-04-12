import React, { useEffect } from "react";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import Select, { NonceProvider } from 'react-select'

import s from './Header.module.scss';
import SingleValue from "react-select/dist/declarations/src/components/SingleValue";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";

interface Props {

}

export const Header = (props: Props) => {
const theme = useTheme();

	const options = [
		{ value: 'spb', label: 'Saint-Petersburg' },
		{ value: 'moscow', label: 'Moscow' },
		{ value: 'ekaterinburg', label: 'Ekaterinburg' }
	]

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: '100',
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme.theme === Theme.DARK ? '#fff' : '#000',
		})
	}

	function changeTheme() {
		theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
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
				<div className={s.change_theme} onClick={changeTheme}>
					<GlobalSvgSelector id='change-theme' />
				</div>
				<Select defaultValue={options[0]} styles={colourStyles} options={options} />
			</div>
		</header>
	)
}