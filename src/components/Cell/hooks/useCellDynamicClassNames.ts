import { useIsValueSelected } from '@hooks/useIsValueSelected';
import { cn } from '@utils/cn';
import { getCellFontClassName } from '../helpers/getCellFontClassName';
import { useGetGridSquareBgColorClassName } from './useGetGridSquareBgColorClassName';
import { useIsCellSelected } from './useIsCellSelected';
import type { TCell } from '@/types/game.types';

export const useCellDynamicClassNames = (
	cell: TCell,
	rowIndex: number,
	colIndex: number,
): string => {
	const isValueSelected = useIsValueSelected(cell.value);
	const isCellSelected = useIsCellSelected(rowIndex, colIndex);
	const gridSquareBgColorClassName = useGetGridSquareBgColorClassName(
		rowIndex,
		colIndex,
	);

	const selectedClassNames = 'border-blue-500 bg-blue-500/20';
	const unSelectedClassNames = [
		'border-gray-400',
		gridSquareBgColorClassName,
		isValueSelected && 'text-blue-800',
	];

	return cn(
		getCellFontClassName(cell),
		isCellSelected ? selectedClassNames : unSelectedClassNames,
	);
};
