import type { TCell } from '../../../types/game.types';

export const getCellFontClassName = (cell: TCell): string => {
	if (!cell.value) return '';
	if (cell.value !== cell.correctValue) return 'text-red-800 font-semibold';

	return 'font-extrabold';
};
