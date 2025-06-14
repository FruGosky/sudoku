import { Cell } from './Cell';
import type { TCell } from '../types/game.types';

type TRowProps = {
	row: TCell[];
	rowIndex: number;
};

export function Row({ row, rowIndex }: TRowProps) {
	return (
		<div key={rowIndex} className="flex">
			{row.map((cell, cellIndex) => (
				<Cell
					key={cellIndex}
					cell={cell}
					colIndex={cellIndex}
					rowIndex={rowIndex}
				/>
			))}
		</div>
	);
}
