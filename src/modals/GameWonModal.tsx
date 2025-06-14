import { Modal } from '@mantine/core';
import { PlayAgainButton } from '../components/PlayAgainButton';
import { FADED_MODAL_TRANSITION } from '../constants';
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
			title="Game Won"
			transitionProps={FADED_MODAL_TRANSITION}
			withCloseButton={false}
			onClose={() => {}}
		>
			<div className="text flex flex-col gap-4">
				<div className="flex items-center justify-center gap-1">
					<span>{'Congrats u won the game!'}</span>
					<span className="text-2xl">{'🥵'}</span>
				</div>
				<div className="flex items-center justify-center">
					<PlayAgainButton />
				</div>
			</div>
		</Modal>
	);
}
