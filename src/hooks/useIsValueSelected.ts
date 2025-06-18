import { useSudokuStore } from '@stores/useSudokuStore';
import type { TCell } from '@/types/game.types';

export const useIsValueSelected = (value: TCell['value']) => {
	const isValueSelected = useSudokuStore((store) => {
		const selectedCell = store.selectedCell;
		if (!selectedCell) return false;
		return store.grid[selectedCell.row][selectedCell.col].value === value;
	});

	return isValueSelected;
};
