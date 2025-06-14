import { useSudokuStore } from '../stores/useSudokuStore';
import { Row } from './Row';

export function Grid() {
	const grid = useSudokuStore((store) => store.grid);

	return (
		<div>
			{grid.map((row, rowIndex) => (
				<Row key={rowIndex} row={row} rowIndex={rowIndex} />
			))}
		</div>
	);
}
