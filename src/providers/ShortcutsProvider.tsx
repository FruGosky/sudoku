import React, { type ReactNode } from 'react';
import { TOGGLE_NOTE_MODE_BUTTONS, UNSELECT_ALL_BUTTONS } from '../constants';
import { useSudokuStore } from '../stores/useSudokuStore';

type TShortcutsProviderProps = {
	children: ReactNode;
};

const useHandleClickedNumber = () => {
	const getState = useSudokuStore.getState;

	return (clickedNumber: number) => {
		const selectedCellCords = getState().selectedCell;
		if (!selectedCellCords) return;
		const selectedCell =
			getState().grid[selectedCellCords.row][selectedCellCords.col];

		// Avoid changing correct value
		if (selectedCell.value === selectedCell.correctValue) return;

		// If not correct value is putted then clean it first
		if (selectedCell.value !== null) {
			getState().setSelectedCellValue(null);
			return;
		}
		if (getState().isNoteMode) {
			getState().toggleNoteForSelectedCell(clickedNumber);
			return;
		}
		if (clickedNumber !== selectedCell.correctValue) {
			getState().decrementLives();
			if (getState().livesLeft === 0) {
				getState().setOpenedModal('gameOver');
			}
		}
		getState().setSelectedCellValue(clickedNumber);
	};
};

export function ShortcutsProvider({ children }: TShortcutsProviderProps) {
	const getState = useSudokuStore.getState;
	const handleClickedNumber = useHandleClickedNumber();

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const key = event.key.toUpperCase();
		if (UNSELECT_ALL_BUTTONS.includes(key)) {
			getState().unselectCell();
			return;
		}
		if (TOGGLE_NOTE_MODE_BUTTONS.includes(key)) {
			event.preventDefault();
			getState().toggleNoteMode();
			return;
		}
		const isTryingToPutNumber = /^[1-9]$/.test(key);
		if (isTryingToPutNumber) {
			const clickedNumber = parseInt(key, 10);
			handleClickedNumber(clickedNumber);
			return;
		}
	};
	return (
		<div
			style={{ outline: 'none' }}
			tabIndex={-1}
			onKeyDown={handleKeyDown}
		>
			{children}
		</div>
	);
}
