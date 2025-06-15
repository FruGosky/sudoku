import { Modal } from '@mantine/core';
import { PlayAgainButton } from '../components/PlayAgainButton';
import { RageButton } from '../components/RageButton';
import {
	FADED_MODAL_TRANSITION,
	GAME_OVER_EMOJI,
	GAME_OVER_MODAL_MESSAGE,
	GAME_OVER_MODAL_TITLE,
} from '../constants';
import { useSudokuStore } from '../stores/useSudokuStore';

const MODAL_CLASS_NAMES = {
	title: '!text-2xl text-center text-red-600 !font-semibold',
	header: '!justify-center !pr-4',
};

export function GameOverModal() {
	const isOpen = useSudokuStore((store) => store.openedModal === 'gameOver');

	return (
		<Modal
			centered
			classNames={MODAL_CLASS_NAMES}
			closeOnClickOutside={false}
			closeOnEscape={false}
			opened={isOpen}
			size="xs"
			title={GAME_OVER_MODAL_TITLE}
			transitionProps={FADED_MODAL_TRANSITION}
			withCloseButton={false}
			onClose={() => {}}
		>
			<div className="text flex flex-col gap-4">
				<div className="flex items-center justify-center gap-1">
					<span>{GAME_OVER_MODAL_MESSAGE}</span>
					<span className="text-2xl">{GAME_OVER_EMOJI}</span>
				</div>
				<div className="flex items-center justify-between gap-3">
					<RageButton />
					<PlayAgainButton />
				</div>
			</div>
		</Modal>
	);
}
