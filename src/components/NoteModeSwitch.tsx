import { ActionIcon, Tooltip } from '@mantine/core';
import { TOGGLE_NOTE_MODE_BUTTONS } from '../constants';
import { PencilIcon } from '../icons/PencilIcon';
import { useSudokuStore } from '../stores/useSudokuStore';

export function NoteModeSwitch() {
	const isNoteMode = useSudokuStore((store) => store.isNoteMode);
	const toggleNoteMode = useSudokuStore((store) => store.toggleNoteMode);

	return (
		<Tooltip label={`Note mode (${TOGGLE_NOTE_MODE_BUTTONS.join(' / ')})`}>
			<ActionIcon
				variant={isNoteMode ? 'filled' : 'outline'}
				onClick={toggleNoteMode}
			>
				<PencilIcon />
			</ActionIcon>
		</Tooltip>
	);
}
