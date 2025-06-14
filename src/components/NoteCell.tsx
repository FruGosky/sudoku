import { useSudokuStore } from '../stores/useSudokuStore';
import type { TCell } from '../types/game.types';

type TNoteCellListProps = {
	notes: TCell['notes'];
};

export function NoteCellList({ notes }: TNoteCellListProps) {
	const size = useSudokuStore((store) => store.size);

	return (
		<div
			className={`grid h-full w-full text-center text-[0.7em] leading-[1.2em]`}
			style={{
				gridTemplateColumns: `repeat(3, 1fr)`,
				gridTemplateRows: `repeat(3, 1fr)`,
			}}
		>
			{Array.from({ length: size }, (_, i) => {
				const noteNumber = i + 1;
				return (
					<NoteCell
						key={noteNumber}
						notes={notes}
						number={noteNumber}
					/>
				);
			})}
		</div>
	);
}

type TNoteCellProps = {
	notes: TCell['notes'];
	number: number;
};

function NoteCell({ notes, number }: TNoteCellProps) {
	const shouldRevealNumber = useSudokuStore((store) => {
		if (!notes.includes(number)) return false;
		if (!store.selectedCell) return false;
		return (
			store.grid[store.selectedCell.row][store.selectedCell.col].value ===
			number
		);
	});

	return (
		<span
			key={number}
			// add red font color if note cant be possible
			className={`pointer-events-none flex h-full w-full cursor-default items-center justify-center`}
			style={{
				opacity: notes.includes(number) ? 1 : 0,
				backgroundColor: shouldRevealNumber
					? 'var(--color-blue-600)'
					: 'unset',
				color: shouldRevealNumber ? 'var(--color-white)' : 'unset',
				borderRadius: shouldRevealNumber ? '100%' : 'unset',
			}}
			tabIndex={-1}
		>
			{number}
		</span>
	);
}
