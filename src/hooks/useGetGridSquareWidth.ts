import { useSudokuStore } from '@stores/useSudokuStore';

export const useGetGridSquareWidth = () => {
	const size = useSudokuStore((store) => store.size);
	const squareWidth = Math.round(Math.sqrt(size));

	return squareWidth;
};
