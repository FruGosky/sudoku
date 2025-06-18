import { NoteCellList } from '@components/NoteCell';
import { useSudokuStore } from '@stores/useSudokuStore';
import { cn } from '@utils/cn';
import { useCellDynamicClassNames } from './hooks/useCellDynamicClassNames';
import type { TCell } from '@/types/game.types';

type TCellProps = {
	cell: TCell;
	rowIndex: number;
	colIndex: number;
};

export function Cell({ cell, rowIndex, colIndex }: TCellProps) {
	const setSelectedCell = useSudokuStore((store) => store.setSelectedCell);
	const selectThisCell = () => {
		setSelectedCell(rowIndex, colIndex);
	};

	const dynamicClassNames = useCellDynamicClassNames(
		cell,
		rowIndex,
		colIndex,
	);

	return (
		<div
			className={cn(
				'flex h-10 w-10 items-center justify-center border-1 border-solid select-none',
				dynamicClassNames,
			)}
			onClick={selectThisCell}
		>
			{cell.value ?? <NoteCellList notes={cell.notes} />}
		</div>
	);
}
