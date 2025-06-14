import { ActionIcon, Tooltip } from '@mantine/core';
import { useSudokuStore } from '../stores/useSudokuStore';
import { PencilIcon } from '../icons/PencilIcon';

export function NoteModeSwitch() {
	const isNoteMode = useSudokuStore((store) => store.isNoteMode);
	const toggleNoteMode = useSudokuStore((store) => store.toggleNoteMode);

	return (
		<Tooltip label="Note mode (n)">
			<ActionIcon
				variant={isNoteMode ? 'filled' : 'outline'}
				aria-label="Note mode"
				onClick={toggleNoteMode}
			>
				<PencilIcon />
			</ActionIcon>
		</Tooltip>
	);
}
