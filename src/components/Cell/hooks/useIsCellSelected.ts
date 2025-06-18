import { useSudokuStore } from '@stores/useSudokuStore';

export const useIsCellSelected = (rowIndex: number, colIndex: number) => {
	const isSelected = useSudokuStore((store) => {
		const selectedCell = store.selectedCell;
		if (!selectedCell) return false;
		if (selectedCell.row !== rowIndex) return false;
		if (selectedCell.col !== colIndex) return false;
		return true;
	});

	return isSelected;
};
