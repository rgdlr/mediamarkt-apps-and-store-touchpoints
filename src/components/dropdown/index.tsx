import { BaseSyntheticEvent, MouseEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { Button } from '../../components';
import { CustomDropdownAttributes } from '../../components/types.d';
import { Position, Shape } from '../../constants';
import { useOnBlur } from '../../hooks';
import { computeClassNames } from '../../utils';
import './index.css';

export function Dropdown(attributes: CustomDropdownAttributes): ReactElement {
	const {
		children,
		defaultValue,
		className,
		onSelectOption,
		options,
		position = Position.LEFT,
		shape = Shape.RECTANGLE,
		...restAttributes
	} = attributes;

	const dropdownRef = useRef(null);
	const [expanded, setExpanded] = useState(false);
	const [selected, setSelected] = useState(defaultValue);

	useOnBlur(dropdownRef, () => setExpanded(false), expanded);

	const toggleExpanded = (_event: MouseEvent<HTMLButtonElement>) =>
		setExpanded((prevExpanded) => !prevExpanded);

	useEffect(() => {
		if (typeof onSelectOption === 'function' && selected) {
			onSelectOption(selected);
		}
	}, [selected]);

	return (
		<div
			{...restAttributes}
			className={computeClassNames('dropdown', `dropdown--${position}`, className)}
			ref={dropdownRef}>
			<Button className='dropdown__button' onClick={toggleExpanded} shape={shape}>
				<svg width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
					<path d='M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z' />
					<path d='M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z' />
				</svg>
			</Button>
			<ul
				aria-expanded={expanded}
				className='dropdown__ul'
				onClick={(event: BaseSyntheticEvent) => {
					setSelected(event.target.getAttribute('data-option'));
				}}>
				{options.map((option) => (
					<li aria-selected={selected === option.id} className='dropdown__li' key={option.id}>
						<button className='dropdown__li-button' data-option={option.id}>
							{option.value}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export type { CustomDropdownAttributes };
