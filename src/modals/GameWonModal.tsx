import { Modal } from '@mantine/core';
import { PlayAgainButton } from '../components/PlayAgainButton';
import {
	FADED_MODAL_TRANSITION,
	GAME_WON_EMOJI,
	GAME_WON_MODAL_MESSAGE,
	GAME_WON_MODAL_TITLE,
} from '../constants';
import { useSudokuStore } from '../stores/useSudokuStore';

const MODAL_CLASS_NAMES = {
	title: '!text-2xl text-center text-green-600 !font-semibold',
	header: '!justify-center !pr-4',
};

export function GameWonModal() {
	const isOpen = useSudokuStore((store) => store.openedModal === 'gameWon');

	return (
		<Modal
			centered
			classNames={MODAL_CLASS_NAMES}
			closeOnClickOutside={false}
			closeOnEscape={false}
			opened={isOpen}
			size="xs"
			title={GAME_WON_MODAL_TITLE}
			transitionProps={FADED_MODAL_TRANSITION}
			withCloseButton={false}
			onClose={() => {}}
		>
			<div className="text flex flex-col gap-4">
				<div className="flex items-center justify-center gap-1">
					<span>{GAME_WON_MODAL_MESSAGE}</span>
					<span className="text-2xl">{GAME_WON_EMOJI}</span>
				</div>
				<div className="flex items-center justify-center">
					<PlayAgainButton />
				</div>
			</div>
		</Modal>
	);
}
