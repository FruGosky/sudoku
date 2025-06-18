import { Row } from '@components/Row';
import { useSudokuStore } from '@stores/useSudokuStore';

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
