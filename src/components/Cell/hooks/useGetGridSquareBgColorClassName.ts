import { useGetGridSquareWidth } from '@hooks/useGetGridSquareWidth';

const getGridSquareBgColorClassName = (
	rowIndex: number,
	cellIndex: number,
	gridSquareWidth: number,
): string => {
	const squareRow = Math.floor(rowIndex / gridSquareWidth);
	const squareCol = Math.floor(cellIndex / gridSquareWidth);
	const isEvenSquare = (squareRow + squareCol) % 2 === 0;

	return isEvenSquare ? 'bg-gray-500' : 'bg-gray-500/80';
};

export const useGetGridSquareBgColorClassName = (
	rowIndex: number,
	colIndex: number,
) => {
	const gridSquareWidth = useGetGridSquareWidth();
	const gridSquareBgColorClassName = getGridSquareBgColorClassName(
		rowIndex,
		colIndex,
		gridSquareWidth,
	);

	return gridSquareBgColorClassName;
};
