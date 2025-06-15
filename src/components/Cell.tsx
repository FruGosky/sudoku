import { useSudokuStore } from '../stores/useSudokuStore';
import { cn } from '../utils/cn';
import { NoteCellList } from './NoteCell';
import type { TCell, TCorrectGridSizes } from '../types/game.types';

type TCellProps = {
	cell: TCell;
	rowIndex: number;
	colIndex: number;
};

const getGridSize = (size: TCorrectGridSizes) => Math.round(Math.sqrt(size));

const getSquareBgColorClassName = (
	rowIndex: number,
	cellIndex: number,
	gridSize: number,
) => {
	const squareRow = Math.floor(rowIndex / gridSize);
	const squareCol = Math.floor(cellIndex / gridSize);
	const isEvenSquare = (squareRow + squareCol) % 2 === 0;
	return isEvenSquare ? 'bg-gray-500' : 'bg-gray-500/80';
};

const getFontClassNames = (cell: TCell): string => {
	if (!cell.value) return '';
	if (cell.value !== cell.correctValue) return 'text-red-800 font-semibold';
	return 'font-extrabold';
};

export function Cell({ cell, rowIndex, colIndex }: TCellProps) {
	const isSameValueSelected = useSudokuStore((store) => {
		const selectedCell = store.selectedCell;
		if (!selectedCell) return false;
		return (
			store.grid[selectedCell.row][selectedCell.col].value === cell.value
		);
	});
	const isSelected = useSudokuStore((store) => {
		const selectedCell = store.selectedCell;
		if (!selectedCell) return false;
		if (selectedCell.row !== rowIndex) return false;
		if (selectedCell.col !== colIndex) return false;
		return true;
	});
	const setSelectedCell = useSudokuStore((store) => store.setSelectedCell);
	const size = useSudokuStore((store) => store.size);
	const gridSize = getGridSize(size);
	const squareBgColorClassName = getSquareBgColorClassName(
		rowIndex,
		colIndex,
		gridSize,
	);

	return (
		<div
			className={cn(
				'flex h-10 w-10 items-center justify-center border-1 border-solid select-none',
				getFontClassNames(cell),
				isSelected
					? 'border-blue-500 bg-blue-500/20'
					: ['border-gray-400', squareBgColorClassName],
				!isSelected && isSameValueSelected && 'text-blue-800',
			)}
			onClick={() => {
				setSelectedCell(rowIndex, colIndex);
			}}
		>
			{cell.value ? cell.value : <NoteCellList notes={cell.notes} />}
		</div>
	);
}
