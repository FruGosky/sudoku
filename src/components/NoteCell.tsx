import { useSudokuStore } from '@stores/useSudokuStore';
import { cn } from '@utils/cn';
import type { TCell } from '@/types/game.types';

type TNoteCellListProps = {
	notes: TCell['notes'];
};

export function NoteCellList({ notes }: TNoteCellListProps) {
	const size = useSudokuStore((store) => store.size);

	return (
		<div className="grid h-full w-full grid-cols-3 grid-rows-3 text-center text-[0.7em] leading-[1.2em]">
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
			// add red font color if note cant be possible
			className={cn(
				'pointer-events-none flex h-full w-full cursor-default items-center justify-center',
				notes.includes(number) ? 'opacity-100' : 'opacity-0',
				shouldRevealNumber && [
					'bg-blue-600',
					'text-white',
					'rounded-full',
				],
			)}
			tabIndex={-1}
		>
			{number}
		</span>
	);
}
