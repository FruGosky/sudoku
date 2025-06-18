import { ActionIcon, Tooltip } from '@mantine/core';
import { NOTE_MODE_SWITCH_TOOLTIP } from '@constants';
import { PencilIcon } from '@icons/PencilIcon';
import { useSudokuStore } from '@stores/useSudokuStore';

export function NoteModeSwitch() {
	const isNoteMode = useSudokuStore((store) => store.isNoteMode);
	const toggleNoteMode = useSudokuStore((store) => store.toggleNoteMode);

	return (
		<Tooltip label={NOTE_MODE_SWITCH_TOOLTIP}>
			<ActionIcon
				variant={isNoteMode ? 'filled' : 'outline'}
				onClick={toggleNoteMode}
			>
				<PencilIcon />
			</ActionIcon>
		</Tooltip>
	);
}
