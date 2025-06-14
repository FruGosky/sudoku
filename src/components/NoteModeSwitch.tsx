import { ActionIcon, Tooltip } from '@mantine/core';
import { PencilIcon } from '../icons/PencilIcon';
import { useSudokuStore } from '../stores/useSudokuStore';

export function NoteModeSwitch() {
	const isNoteMode = useSudokuStore((store) => store.isNoteMode);
	const toggleNoteMode = useSudokuStore((store) => store.toggleNoteMode);

	return (
		<Tooltip label="Note mode (n)">
			<ActionIcon
				variant={isNoteMode ? 'filled' : 'outline'}
				onClick={toggleNoteMode}
			>
				<PencilIcon />
			</ActionIcon>
		</Tooltip>
	);
}
